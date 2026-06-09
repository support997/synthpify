// server/utils/automation.cjs
async function forwardToAutomationWorkflow(leadData) {
    const webhookUrl = process.env.AUTOMATION_WEBHOOK_URL;
    
    if (!webhookUrl) {
        console.warn("Warning: AUTOMATION_WEBHOOK_URL environment variable is missing. Skipping automation pipeline.");
        return true; // Return true to prevent blocking client submission during partial configurations
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...leadData,
                source: "Digital Business Card",
                capturedAt: new Date().toISOString()
            }),
        });

        return response.ok;
    } catch (error) {
        console.error("External webhook delivery failed:", error.message);
        return false;
    }
}

module.exports = { forwardToAutomationWorkflow };
