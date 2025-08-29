// src/components/N8nChatEmbed.jsx
import React, { useEffect } from 'react';

function N8nChatEmbed() {
  useEffect(() => {
    // Remove any old left-side overrides/containers from earlier attempts
    document.getElementById('n8n-left-chat-css')?.remove();
    document.getElementById('n8n-chat-override')?.remove();
    document.getElementById('n8n-left-chat')?.remove();

    // Stub opener so clicks before load are queued
    if (!window.openN8nChat) {
      window.__pendingOpenN8n = false;
      window.openN8nChat = () => { window.__pendingOpenN8n = true; };
    }

    // Ensure n8n CSS once
    if (!document.getElementById('n8n-chat-css')) {
      const link = document.createElement('link');
      link.id = 'n8n-chat-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
      document.head.appendChild(link);
    }

    // Load SDK and create the chat (default: bottom-right)
    (async () => {
      try {
        const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');

        const inst = createChat({
          webhookUrl: 'https://n8n-nu6j.onrender.com/webhook/fa608d72-de1f-4d49-9b6e-36d20e4d61d1/chat',
          mode: 'window',                  // floating button + modal (bottom-right by default)
          loadPreviousSession: true,
          showWelcomeScreen: false,
          defaultLanguage: 'en',
          initialMessages: [
            'Hi there! 👋'
            
          ],
          i18n: {
            en: {
              title: 'Synthpify AI',
              subtitle: "We put in the hard work so you can focus on what matters most.",
              footer: '',
              getStarted: 'New Conversation',
              inputPlaceholder: 'Type your question..',
            },
          },
          enableStreaming: false,
        });

        // Robust open/close helpers
        window.openN8nChat = () => {
          if (inst?.open) inst.open();
          else document.querySelector('.n8n-chat .n8n-chat-floating-button')?.click();
        };
        window.closeN8nChat = () => {
          if (inst?.close) inst.close();
          else document.querySelector('.n8n-chat .n8n-chat-floating-button')?.click();
        };

        // If user clicked before ready, open now
        if (window.__pendingOpenN8n) {
          window.__pendingOpenN8n = false;
          window.openN8nChat();
        }
      } catch (e) {
        console.error('Failed to initialize n8n chat:', e);
      }
    })();

    // keep persistent
    return () => {};
  }, []);

  return null;
}
