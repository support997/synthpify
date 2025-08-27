import React, { useEffect, useRef, useState } from "react";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // reCAPTCHA v3 site key
const API_BASE = import.meta.env.VITE_API_BASE  

// VAPI (from your snippet)
const VAPI_WIDGET_SRC = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
const VAPI_PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY  
const VAPI_ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID  

export default function VapiChatLauncher() {
  const [allowed, setAllowed] = useState(false);
  const [busy, setBusy] = useState(false);
  const chatRootRef = useRef(null);

  // Load reCAPTCHA v3
  useEffect(() => {
    if (window.grecaptcha || !SITE_KEY) return;
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  const loadScriptOnce = (src) =>
    new Promise((resolve, reject) => {
      // already loaded?
      const existing = Array.from(document.scripts).find((el) => el.src === src);
      if (existing) {
        existing.addEventListener("load", () => resolve());
        if (existing.readyState === "complete") resolve();
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = reject;
      document.head.appendChild(s);
    });

  const verifyCaptcha = async () => {
    if (!window.grecaptcha) throw new Error("reCAPTCHA not available");
    const token = await window.grecaptcha.execute(SITE_KEY, { action: "open_chat" });
    const res = await fetch(`${API_BASE}/api/vapi/allow`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ token }),
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    if (!data.ok) throw new Error("captcha failed");
    return true;
  };

  const mountVapiChat = async () => {
    // Ensure the VAPI widget script is loaded (defines <vapi-widget/>)
    await loadScriptOnce(VAPI_WIDGET_SRC);

    // clear any previous widget (avoid duplicates)
    if (chatRootRef.current) chatRootRef.current.innerHTML = "";

    // Create the custom element with your IDs
    const widget = document.createElement("vapi-widget");
    widget.setAttribute("assistant-id", VAPI_ASSISTANT_ID);
    widget.setAttribute("public-key", VAPI_PUBLIC_KEY);

    // OPTIONAL: you can set extra attributes supported by VAPI here, e.g.:
    // widget.setAttribute("title", "Synthpify AI");
    // widget.setAttribute("position", "inline");

    chatRootRef.current?.appendChild(widget);
  };

  const handleOpenChat = async () => {
    try {
      setBusy(true);
      await verifyCaptcha();
      setAllowed(true);
      setTimeout(mountVapiChat, 0); // mount after container renders
    } catch (err) {
      console.error(err);
      alert("Could not open chat. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="w-full">
      {!allowed ? (
        <button
          onClick={handleOpenChat}
          disabled={busy || !SITE_KEY}
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
