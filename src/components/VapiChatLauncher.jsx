// src/components/VapiChatLauncher.jsx
import React, { useRef, useState } from "react";

const VAPI_WIDGET_SRC =
  "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";

export default function VapiChatLauncher() {
  const [opened, setOpened] = useState(false);
  const [busy, setBusy] = useState(false);
  const [errorNotice, setErrorNotice] = useState(null);
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
    // Check voice service status from secure backend
    const statusRes = await fetch('/api/vapi/status').catch(() => null);
    const statusData = statusRes ? await statusRes.json().catch(() => ({})) : {};

    if (!statusData.active) {
      throw new Error("Chat assistant is currently offline. Please use the contact form.");
    }

    await loadScriptOnce(VAPI_WIDGET_SRC);

    if (chatRootRef.current) chatRootRef.current.innerHTML = "";

    const widget = document.createElement("vapi-widget");
    // Connects through server-side proxy
    widget.setAttribute("mode", "chat");
    widget.setAttribute("position", "inline");
    widget.setAttribute("theme", "dark");
    widget.setAttribute("title", "TALK WITH AI");
    widget.setAttribute("chat-first-message", "Hey, how can I help you today?");
    widget.setAttribute("chat-placeholder", "Type your message...");

    chatRootRef.current.appendChild(widget);
  };

  const handleOpenChat = async () => {
    try {
      setBusy(true);
      setErrorNotice(null);
      setOpened(true);
      await mountVapiChat();
    } catch (e) {
      console.warn("Vapi chat status:", e.message);
      setErrorNotice(e.message || "Could not open chat. Please contact us via the contact form.");
      setOpened(false);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="w-full">
      {errorNotice && (
        <div className="mb-4 text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
          {errorNotice}
        </div>
      )}
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
