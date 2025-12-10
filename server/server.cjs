// server/server.cjs
require('dotenv').config(); // harmless on Render; only used if you run locally

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

//
// Fail fast if required env vars are missing
//
const required = [
  'SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS',
  'MAIL_FROM', 'MAIL_TO', 'CORS_ORIGIN'
  // PORT is provided by Render at runtime; we still allow your own fallback
];

const missing = required.filter(k => !process.env[k]);
let mockMode = false;

if (missing.length) {
  console.warn(`⚠️  Missing environment variables: ${missing.join(', ')}`);
  console.warn(`⚠️  Starting in MOCK MODE. Emails will be logged to console but not sent.`);
  mockMode = true;
}

//
// Express app
//
const app = express();
app.use(express.json({ limit: '100kb' }));

// Allow single or comma-separated origins in CORS_ORIGIN
const corsOrigins = (process.env.CORS_ORIGIN || (mockMode ? 'http://localhost:5001' : ''))
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

app.use(cors({
  origin(origin, cb) {
    // Allow non-browser tools (no origin) and allowed origins
    if (!origin || corsOrigins.includes(origin)) return cb(null, true);
    return cb(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

//
// SMTP transporter (Gmail or any SMTP)
//
//
// SMTP transporter (Gmail or any SMTP)
//
let transporter;
if (!mockMode) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,                 // e.g. smtp.gmail.com
    port: Number(process.env.SMTP_PORT),         // 587 for STARTTLS, 465 for SSL
    secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,               // e.g. youremail@gmail.com
      pass: process.env.SMTP_PASS                // e.g. Gmail App Password
    }
  });
}

// Verify SMTP on startup (logs warning if it fails, but server can still run)
// Verify SMTP on startup (logs warning if it fails, but server can still run)
if (!mockMode && transporter) {
  transporter.verify()
    .then(() => console.log('✅ SMTP ready'))
    .catch(err => console.warn('⚠️ SMTP verify failed:', err.message));
}

const rateLimit = require('express-rate-limit');

//
// Routes
//
app.get('/api/health', (_req, res) => res.json({ ok: true }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name = '', email = '', phone = '', subject = '', message = '' } = req.body || {};

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const mailOptions = {
      from: `"Synthpify Contact" <${process.env.MAIL_FROM}>`,
      to: process.env.MAIL_TO,
      replyTo: email, // lets you reply straight to the user
      subject: subject || `New contact from ${name}`,
      text:
        `New contact submission

Name: ${name}
Email: ${email}
Phone: ${phone || '-'}
Subject: ${subject || '-'}
Message:
${message}
`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || '-')}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || '-')}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
      `
    };

    if (mockMode) {
      console.log('📝 [MOCK MODE] Email would be sent:');
      console.log(mailOptions);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return res.json({ ok: true });
    }

    await transporter.sendMail(mailOptions);
    return res.json({ ok: true });
  } catch (err) {
    console.error('❌ Contact send error:', err);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
});

//
// Start server
//
const PORT = process.env.PORT || 3001; // Render sets PORT automatically
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

//
// tiny HTML escaper (prevents HTML injection in emails)
//
function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
