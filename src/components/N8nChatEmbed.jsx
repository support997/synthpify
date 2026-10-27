import React, { useEffect } from 'react';

const N8N_CSS = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
const N8N_ESM = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

export default function N8nChatEmbed() {
  useEffect(() => {
    // Remove any left-side overrides from earlier attempts
    document.getElementById('n8n-left-chat-css')?.remove();
    document.getElementById('n8n-chat-override')?.remove();
    document.getElementById('n8n-left-chat')?.remove();

    // Stub opener so clicks before load get queued
    if (!window.openN8nChat) {
      window.__pendingOpenN8n = false;
      window.openN8nChat = () => { window.__pendingOpenN8n = true; };
    }

    // Ensure n8n CSS
    if (!document.getElementById('n8n-chat-css')) {
      const link = document.createElement('link');
      link.id = 'n8n-chat-css';
      link.rel = 'stylesheet';
      link.href = N8N_CSS;
      document.head.appendChild(link);
    }

    // Load SDK and create the chat (default: bottom-right)
    let destroyed = false;
    (async () => {
      try {
        const { createChat } = await import(/* @vite-ignore */ N8N_ESM);
        const chatEndpoint = typeof window !== 'undefined' && window.location.origin
          ? `${window.location.origin}/api/chat`
          : '/api/chat';

        const inst = createChat({
          webhookUrl: chatEndpoint,
          mode: 'window',                  // FAB + modal (bottom-right)
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

        if (destroyed) return;

        // Robust open/close helpers
        window.openN8nChat = () => {
          if (inst?.open) inst.open();
          else document.querySelector('.n8n-chat .n8n-chat-floating-button')?.click();
        };
        window.closeN8nChat = () => {
          if (inst?.close) inst.close();
          else document.querySelector('.n8n-chat .n8n-chat-floating-button')?.click();
        };

        // Open if user clicked before load finished
        if (window.__pendingOpenN8n) {
          window.__pendingOpenN8n = false;
          window.openN8nChat();
        }
      } catch (e) {
        console.error('Failed to initialize n8n chat:', e);
      }
    })();

    return () => { destroyed = true; };
  }, []);

  return null;
}
