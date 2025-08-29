// src/components/N8nChatEmbed.jsx
import React, { useEffect } from 'react';

function N8nChatEmbed() {
  useEffect(() => {
    // Queue early clicks until the widget is ready
    if (!window.openN8nChat) {
      window.__pendingOpenN8n = false;
      window.openN8nChat = () => { window.__pendingOpenN8n = true; };
    }

    // Ensure n8n CSS is loaded once
    if (!document.getElementById('n8n-chat-css')) {
      const link = document.createElement('link');
      link.id = 'n8n-chat-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
      document.head.appendChild(link);
    }

    // GLOBAL overrides: force bottom-left + tint to emerald gradient
    const STYLE_ID = 'n8n-chat-override';
    document.getElementById(STYLE_ID)?.remove();
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .n8n-chat .n8n-chat-floating-button { left: 24px !important; right: auto !important; bottom: 24px !important; }
      .n8n-chat .n8n-chat-modal          { left: 24px !important; right: auto !important; bottom: 92px !important; }

      .n8n-chat .n8n-chat-floating-button {
        background: linear-gradient(90deg, #10B981, #14B8A6) !important;
        color: #fff !important; border-radius: 9999px !important;
        box-shadow: 0 10px 15px -3px rgba(16,185,129,.3),
                    0 4px 6px -2px rgba(16,185,129,.2) !important;
      }
      .n8n-chat .n8n-chat-floating-button:hover { filter: brightness(0.95) !important; }
      .n8n-chat .n8n-chat-floating-button svg { color:#fff !important; fill: currentColor !important; }
    `;
    document.head.appendChild(style);

    // Load the SDK and mount (let it attach to <body>)
    (async () => {
      try {
        const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');

        const inst = createChat({
          webhookUrl: 'https://n8n-nu6j.onrender.com/webhook/fa608d72-de1f-4d49-9b6e-36d20e4d61d1/chat',
          branding: {
            logo: 'https://i.postimg.cc/GpdryNWY/synthpify-logo-dark.png',
            name: 'Synthpify',
            welcomeText: 'Hi 👋, how can we help?',
            responseTimeText: 'We will assign an agent for you. Give us a sec'
          }
        });

        // Robust open/close (works whether API exists or not)
        window.openN8nChat = () => {
          if (inst?.open) inst.open();
          else document.querySelector('.n8n-chat .n8n-chat-floating-button')?.click();
        };
        window.closeN8nChat = () => {
          if (inst?.close) inst.close();
          else document.querySelector('.n8n-chat .n8n-chat-floating-button')?.click();
        };

        // If the user clicked before load finished, open now
        if (window.__pendingOpenN8n) {
          window.__pendingOpenN8n = false;
          window.openN8nChat();
        }
      } catch (e) {
        console.error('Failed to load n8n chat widget:', e);
      }
    })();

    // Keep persistent
    return () => {};
  }, []);

  return null;
}

export default N8nChatEmbed;