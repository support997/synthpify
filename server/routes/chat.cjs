// server/routes/chat.cjs
const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');

// Rate limit chat messages to prevent flooding backend automation pipelines
const chatLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // Limit each IP to 30 chat messages per minute
  message: { error: 'Too many messages sent. Please slow down.' },
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * ALL /api/chat
 * Proxies chat interactions to the backend automation webhook (n8n/Make).
 * Keeps webhook tokens and internal server URLs strictly server-side.
 */
router.all('/chat', chatLimiter, async (req, res) => {
  const targetWebhookUrl = process.env.N8N_CHAT_WEBHOOK_URL;

  if (!targetWebhookUrl) {
    console.warn('⚠️ N8N_CHAT_WEBHOOK_URL is not configured on the server.');
    return res.status(503).json({
      error: 'Chat service is temporarily unconfigured. Please contact support.'
    });
  }

  try {
    const fetchOptions = {
      method: req.method,
      headers: {
        'Content-Type': req.headers['content-type'] || 'application/json',
      },
    };

    if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const response = await fetch(targetWebhookUrl, fetchOptions);
    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const data = await response.json();
      return res.status(response.status).json(data);
    } else {
      const text = await response.text();
      return res.status(response.status).send(text);
    }
  } catch (err) {
    console.error('❌ Chat proxy delivery error:', err.message);
    return res.status(502).json({ error: 'Chat service temporarily unavailable.' });
  }
});

module.exports = router;
