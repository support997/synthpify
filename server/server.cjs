// server/server.cjs
const path = require('path');
// Load environment variables from server/.env or root .env
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

//
// Verify SMTP configuration (optional in mock mode)
//
const requiredSmtp = [
  'SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS',
  'MAIL_FROM', 'MAIL_TO'
];

const missingSmtp = requiredSmtp.filter(k => !process.env[k]);
let mockMode = false;

if (missingSmtp.length) {
  console.warn(`⚠️ Missing SMTP variables: ${missingSmtp.join(', ')}`);
  console.warn(`⚠️ Starting mail service in MOCK MODE (messages logged to console).`);
  mockMode = true;
}

//
// Express app initialization
//
const app = express();
app.use(express.json({ limit: '100kb' }));

//
// Security Headers
//
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'microphone=(self "https://api.vapi.ai")');
  next();
});

//
// CORS Configuration
//
const defaultOrigins = ['http://localhost:5173', 'http://localhost:5001', 'http://localhost:3001'];
const corsOrigins = (process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : defaultOrigins)
  .map(s => s.trim())
  .filter(Boolean);

app.use(cors({
  origin(origin, cb) {
    // Allow non-browser tools (e.g. server-to-server curl/health checks) and allowed origins
    if (!origin || corsOrigins.includes(origin) || corsOrigins.includes('*')) {
      return cb(null, true);
    }
    return cb(new Error('Origin blocked by CORS policy'));
  },
  credentials: true
}));

//
// SMTP Transporter
//
let transporter;
if (!mockMode) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  transporter.verify()
    .then(() => console.log('✅ SMTP transporter verified'))
    .catch(err => console.warn('⚠️ SMTP verify warning:', err.message));
}

//
// Route Limiters
//
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many submissions. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

//
// Health Check
//
app.get('/api/health', (_req, res) => res.json({ ok: true, timestamp: new Date().toISOString() }));

//
// Sub-routers (Sensitive Operations Moved Server-Side)
//
const leadsRoute = require('./routes/leads.cjs');
const vapiRoute = require('./routes/vapi.cjs');
const chatRoute = require('./routes/chat.cjs');

app.use('/api', leadsRoute);
app.use('/api/vapi', vapiRoute);
app.use('/api', chatRoute);

//
// Contact Form Submission
//
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name = '', email = '', phone = '', subject = '', message = '' } = req.body || {};

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const mailOptions = {
      from: `"Synthpify Contact" <${process.env.MAIL_FROM || 'support@synthpify.ai'}>`,
      to: process.env.MAIL_TO || 'contact@synthpify.ai',
      replyTo: email,
      subject: subject || `New contact inquiry from ${name}`,
      text:
`New contact submission:

Name: ${name}
Email: ${email}
Phone: ${phone || '-'}
Subject: ${subject || '-'}
Message:
${message}
`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || '-')}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || '-')}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
      `
    };

    if (mockMode) {
      console.log('📝 [MOCK MODE] Email captured:');
      console.log(mailOptions);
      await new Promise(resolve => setTimeout(resolve, 300));
      return res.json({ ok: true, mock: true });
    }

    await transporter.sendMail(mailOptions);
    return res.json({ ok: true });
  } catch (err) {
    console.error('❌ Contact submission error:', err.message);
    return res.status(500).json({ error: 'Failed to deliver contact message.' });
  }
});

//
// Global Error Handler (Prevents stack trace / sensitive leakage to client)
//
app.use((err, _req, res, _next) => {
  console.error('❌ Unhandled server error:', err.message);
  return res.status(err.status || 500).json({
    error: 'Internal server error. Please try again later.'
  });
});

//
// Start Server
//
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Secure Synthpify backend running on port ${PORT}`);
});

//
// HTML Sanitizer
//
function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
