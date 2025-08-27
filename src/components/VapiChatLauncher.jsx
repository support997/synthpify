// src/components/VapiChatLauncher.jsx
import React, { useRef, useState } from "react";

const VAPI_WIDGET_SRC =
  "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";

// Must exist on the **frontend** env (.env, .env.production etc)
const VAPI_PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY;
const VAPI_ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;

export default function VapiChatLauncher() {
  const [opened, setOpened] = useState(false);
  const [busy, setBusy] = useState(false);
  const chatRootRef = useRef(null);

  const loadScriptOnce = (src) =>
    new Promise((resolve, reject) => {
      const existing = Array.from(document.scripts).find((el) => el.src === src);
      if (existing) {
        if (existing.readyState === "complete") resolve();
        existing.addEventListener("load", () => resolve());
        existing.addEventListener("error", reject);
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = reject;
      document.head.appendChild(s);
    });

  const mountVapiChat = async () => {
    if (!VAPI_PUBLIC_KEY || !VAPI_ASSISTANT_ID) {
      console.error("Missing VAPI env vars on the FRONTEND build.");
      throw new Error("Missing VAPI configuration");
    }
    await loadScriptOnce(VAPI_WIDGET_SRC);

    if (chatRootRef.current) chatRootRef.current.innerHTML = "";

    const widget = document.createElement("vapi-widget");
    widget.setAttribute("public-key", VAPI_PUBLIC_KEY);
    widget.setAttribute("assistant-id", VAPI_ASSISTANT_ID);

    // Keep it INLINE chat so it never floats over the voice button
    widget.setAttribute("mode", "chat");
    widget.setAttribute("position", "inline");
    widget.setAttribute("theme", "dark");
    widget.setAttribute("title", "TALK WITH AI");
    widget.setAttribute("chat-first-message", "Hey, How can I help you today?");
    widget.setAttribute("chat-placeholder", "Type your message...");

    chatRootRef.current.appendChild(widget);
  };

  const handleOpenChat = async () => {
    try {
      setBusy(true);
      setOpened(true);
      await mountVapiChat();
    } catch (e) {
      console.error(e);
      alert("Could not open chat. Please try again.");
      setOpened(false);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="w-full">
      {!opened ? (
        <button
          onClick={handleOpenChat}
          disabled={busy}
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base"
        >
          {busy ? "Starting…" : "Chat with Synthpify AI"}
        </button>
      ) : (
        <div className="mt-6">
          <div
            ref={chatRootRef}
            className="w-full rounded-xl border border-slate-200 bg-white p-2 min-h-[520px]"
          />
        </div>
      )}
    </div>
  );
}
