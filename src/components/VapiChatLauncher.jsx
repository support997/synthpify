import React, { useRef, useState } from "react";

const VAPI_WIDGET_SRC =
  "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";

// Pulled at build time by Vite (must be on your FRONTEND service env)
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
      console.error(
        "VAPI env vars missing: VITE_VAPI_PUBLIC_KEY / VITE_VAPI_ASSISTANT_ID"
      );
      throw new Error("Missing VAPI configuration");
    }

    // Clear any prior instance to avoid duplicates
    if (chatRootRef.current) chatRootRef.current.innerHTML = "";

    // Create and configure the widget via JS (no HTML escaping headaches)
    const widget = document.createElement("vapi-widget");
    widget.setAttribute("assistant-id", VAPI_ASSISTANT_ID);
    widget.setAttribute("public-key", VAPI_PUBLIC_KEY);

    // ---- Your desired appearance/behavior ----
    widget.setAttribute("mode", "chat");
    widget.setAttribute("theme", "dark");
    widget.setAttribute("base-bg-color", "#000000");
    widget.setAttribute("accent-color", "#14B8A6");
    widget.setAttribute("cta-button-color", "#000000");
    widget.setAttribute("cta-button-text-color", "#ffffff");
    widget.setAttribute("border-radius", "medium");
    widget.setAttribute("size", "full");
    widget.setAttribute("position", "bottom-right");
    widget.setAttribute("title", "TALK WITH AI");
    widget.setAttribute("start-button-text", "Start");
    widget.setAttribute("end-button-text", "End Call");
    widget.setAttribute("chat-first-message", "Hey, How can I help you today?");
    widget.setAttribute("chat-placeholder", "Type your message...");
    widget.setAttribute("voice-show-transcript", "true");
    // Consent (safe as a JS string; no need to HTML-escape quotes)
    widget.setAttribute("consent-required", "true");
    widget.setAttribute("consent-title", "Terms and conditions");
    widget.setAttribute(
      "consent-content",
      'By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.'
    );
    widget.setAttribute("consent-storage-key", "vapi_widget_consent");
    // -----------------------------------------

    chatRootRef.current.appendChild(widget);
  };

  const handleOpenChat = async () => {
    try {
      setBusy(true);
      setOpened(true);
      await mountVapiChat();
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
