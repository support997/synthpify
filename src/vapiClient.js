// src/vapiClient.js
import Vapi from '@vapi-ai/web';

let vapiClient = null;

export function getVapiClient() {
  if (!vapiClient) {
    const key = import.meta.env.VITE_VAPI_API_KEY || '252067f2-002e-43bf-bf24-04b3ffcc8810';
    vapiClient = new Vapi(key);
  }

  return vapiClient;
}