// src/vapiClient.js
import Vapi from '@vapi-ai/web';

let vapiClient = null;

export function getVapiClient() {
  if (!vapiClient) {
    const apiBaseUrl = typeof window !== 'undefined' && window.location.origin
      ? `${window.location.origin}/api/vapi`
      : '/api/vapi';
    vapiClient = new Vapi('session', apiBaseUrl);
  }

  return vapiClient;
}