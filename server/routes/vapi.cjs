// server/routes/vapi.cjs
const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');

// Rate limit voice call initializations to prevent quota exhaustion or abuse
const vapiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 session attempts per 15 mins
  message: { error: 'Too many voice call requests. Please wait a few minutes before trying again.' },
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * POST /api/vapi/call/web
 * Proxies call creation to Vapi's private API using server-side credentials.
 * The client SDK only receives the ephemeral Daily WebRTC room URL, keeping
 * the private VAPI_API_KEY completely secret and server-side.
 */
router.post('/call/web', vapiLimiter, async (req, res) => {
  const apiKey = process.env.VAPI_API_KEY;
  const assistantId = process.env.VAPI_ASSISTANT_ID;

  if (!apiKey || !assistantId) {
    console.warn('⚠️ Vapi request received, but VAPI_API_KEY or VAPI_ASSISTANT_ID is missing on server.');
    return res.status(503).json({
      error: 'Voice agent service is temporarily unconfigured. Please contact support@synthpify.ai.'
    });
  }

  try {
    const vapiRes = await fetch('https://api.vapi.ai/call/web', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey.trim()}`,
      },
      body: JSON.stringify({
        assistantId: assistantId.trim(),
      }),
    });

    const data = await vapiRes.json().catch(() => ({}));

    if (!vapiRes.ok) {
      console.error('❌ Upstream Vapi API error:', vapiRes.status, data);
      return res.status(vapiRes.status).json({
        error: data.message || 'Failed to initialize voice session with provider.'
      });
    }

    return res.status(201).json(data);
  } catch (error) {
    console.error('❌ Vapi proxy request failed:', error.message);
    return res.status(500).json({ error: 'Internal server error starting voice call.' });
  }
});

/**
 * GET /api/vapi/status
 * Safe public status check indicating if voice service is active without exposing keys.
 */
router.get('/status', (_req, res) => {
  const configured = Boolean(process.env.VAPI_API_KEY && process.env.VAPI_ASSISTANT_ID);
  res.json({ ok: true, active: configured });
});

module.exports = router;
