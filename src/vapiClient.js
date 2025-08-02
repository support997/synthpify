// src/vapiClient.js
import Vapi from '@vapi-ai/web'

let vapiClient = null

export function getVapiClient() {
  if (!vapiClient) {
    vapiClient = new Vapi({
      apiKey: '82e1b653-e726-4499-b041-74da34f52b6b', // or hardcode for now
      
      config: {
        assistant: {
          id: '8d624bc7-38e0-4c06-abca-6fadb797d6cd'
        },
        enableWakeWord: false,
        startListeningOnLoad: false,
        openOnStart: false, // stays hidden until you click
        autoClose: true,
        position: 'bottom-right',
        showAgentAvailability: false,
        firstMessage: 'Hi there! Thanks for requesting a demo. I’m your voice assistant — how can I help?',
      }
    })
  }

  return vapiClient
}