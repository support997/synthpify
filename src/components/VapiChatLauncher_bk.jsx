// src/components/VapiChatLauncher.jsx
import React, { useRef, useState } from "react";

const VAPI_WIDGET_SRC = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
const VAPI_PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY;
const VAPI_ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;

export default function VapiChatLauncher() {
  const [busy, setBusy] = useState(false);
  const [opened, setOpened] = useState(false);
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
    await loadScriptOnce(VAPI_WIDGET_SRC);
    if (!VAPI_PUBLIC_KEY || !VAPI_ASSISTANT_ID) {
      console.error("VAPI env vars missing: VITE_VAPI_PUBLIC_KEY / VITE_VAPI_ASSISTANT_ID");
      throw new Error("Missing VAPI configuration");
    }
    if (chatRootRef.current) chatRootRef.current.innerHTML = "";
    const widget = document.createElement("vapi-widget");
    widget.setAttribute("assistant-id", VAPI_ASSISTANT_ID);
    widget.setAttribute("public-key", VAPI_PUBLIC_KEY);
    chatRootRef.current?.appendChild(widget);
  };

  const handleOpenChat = async () => {
    try {
      setBusy(true);
      setOpened(true);
      setTimeout(mountVapiChat, 0);
    } catch (err) {
      console.error(err);
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
          disabled={busy} // <- no dependency on SITE_KEY anymore
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
