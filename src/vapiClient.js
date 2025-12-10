// src/vapiClient.js
import Vapi from '@vapi-ai/web'

let vapiClient = null

export function getVapiClient() {
  if (!vapiClient) {
    vapiClient = new Vapi(import.meta.env.VITE_VAPI_API_KEY)
  }

  return vapiClient
}