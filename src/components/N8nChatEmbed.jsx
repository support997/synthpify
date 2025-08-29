// src/components/N8nChatEmbed.jsx
import React, { useEffect } from 'react';
import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

const N8nChatEmbed = ({ targetId }) => {
  useEffect(() => {
    // The createChat function needs a target element to render into
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      console.error(`Target element with ID "${targetId}" not found.`);
      return;
    }

    // Initialize the chat widget with the specified target
    const chatInstance = createChat({
      webhookUrl: 'https://n8n-nu6j.onrender.com/webhook/fa608d72-de1f-4d49-9b6e-36d20e4d61d1/chat',
      target: targetElement,
    });

    // Clean up function
    return () => {
      // You can add logic to destroy the chat instance if needed
    };
  }, [targetId]);

  return <div id={targetId} />;
};

export default N8nChatEmbed;
