// server/routes/leads.cjs
const express = require('express');
const router = express.Router();
const { forwardToAutomationWorkflow } = require('../utils/automation.cjs');

// Define validation matching the frontend Zod schema
const validateLead = (req, res, next) => {
    const { name, email, company } = req.body;
    
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
        return res.status(400).json({ error: "Valid name is required (minimum 2 characters)." });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ error: "A valid email address is required." });
    }
    
    next();
};

// POST Endpoint
router.post('/leads', validateLead, async (req, res) => {
    const { name, email, company } = req.body;

    try {
        const automationSuccess = await forwardToAutomationWorkflow({ name, email, company });

        if (!automationSuccess) {
            throw new Error("Failed to forward lead to automation pipeline.");
        }

        return res.status(201).json({ success: true, message: "Lead successfully synchronized." });
    } catch (error) {
        console.error("Lead processing error:", error.message);
        return res.status(500).json({ error: "Internal server error processing contact submission." });
    }
});

module.exports = router;
