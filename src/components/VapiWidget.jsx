// src/components/VapiWidget.jsx
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Vapi from '@vapi-ai/web';

const VapiWidget = forwardRef(({
  hideStartButton = false
}, ref) => {
  const [vapi, setVapi] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Route API calls through authenticated server-side endpoint
    // Sensitive API keys and assistant IDs remain strictly server-side
    const apiBaseUrl = typeof window !== 'undefined' && window.location.origin
      ? `${window.location.origin}/api/vapi`
      : '/api/vapi';

    const vapiInstance = new Vapi('session', apiBaseUrl);
    setVapi(vapiInstance);

    vapiInstance.on('call-start', () => {
      setIsConnected(true);
      setErrorMessage(null);
    });

    vapiInstance.on('call-end', () => {
      setIsConnected(false);
      setIsSpeaking(false);
    });

    vapiInstance.on('speech-start', () => {
      setIsSpeaking(true);
    });

    vapiInstance.on('speech-end', () => {
      setIsSpeaking(false);
    });

    vapiInstance.on('message', (message) => {
      if (message.type === 'transcript') {
        setTranscript(prev => [...prev, { role: message.role, text: message.transcript }]);
      }
    });

    vapiInstance.on('error', (error) => {
      const errMsg = error?.message || error?.error?.message || 'Voice connection unavailable.';
      setErrorMessage(errMsg);
    });

    return () => {
      try {
        vapiInstance?.stop();
      } catch (err) {
        // Ignore expected cleanup termination
        void err;
      }
    };
  }, []);

  const startCall = async () => {
    if (!vapi) return;
    setErrorMessage(null);

    try {
      // Passes 'default' to satisfy client-side SDK validation;
      // The backend proxy securely enforces and injects the server-configured assistant ID.
      await vapi.start('default');
    } catch (err) {
      console.warn('Voice call initiation status:', err?.message || err);
      setErrorMessage('Unable to start voice session. Please schedule a tech consultation or contact support.');
    }
  };

  const endCall = () => {
    vapi?.stop();
  };

  useImperativeHandle(ref, () => ({
    startCall
  }));

  if (!isConnected && hideStartButton) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      zIndex: 1000,
      fontFamily: 'Arial, sans-serif'
    }}>
      {!isConnected && !hideStartButton && (
        <button
          onClick={startCall}
          style={{
            background: '#12A594',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            padding: '16px 24px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(18, 165, 148, 0.3)',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(18, 165, 148, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(18, 165, 148, 0.3)';
          }}
        >
          🎤 Talk to Assistant
        </button>
      )}

      {errorMessage && !isConnected && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          left: '0',
          background: '#1e293b',
          color: '#f8fafc',
          padding: '12px 16px',
          borderRadius: '8px',
          fontSize: '13px',
          maxWidth: '300px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          border: '1px solid #334155'
        }}>
          {errorMessage}
        </div>
      )}

      {isConnected && (
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '20px',
          width: '320px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          border: '1px solid #e1e5e9'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: isSpeaking ? '#ff4444' : '#12A594',
                animation: isSpeaking ? 'pulse 1s infinite' : 'none'
              }}></div>
              <span style={{ fontWeight: 'bold', color: '#333' }}>
                {isSpeaking ? 'Assistant Speaking...' : 'Listening...'}
              </span>
            </div>
            <button
              onClick={endCall}
              style={{
                background: '#ff4444',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              End Call
            </button>
          </div>

          <div style={{
            maxHeight: '200px',
            overflowY: 'auto',
            marginBottom: '12px',
            padding: '8px',
            background: '#f8f9fa',
            borderRadius: '8px'
          }}>
            {transcript.length === 0 ? (
              <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                Conversation will appear here...
              </p>
            ) : (
              transcript.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: '8px',
                    textAlign: msg.role === 'user' ? 'right' : 'left'
                  }}
                >
                  <span style={{
                    background: msg.role === 'user' ? '#12A594' : '#333',
                    color: '#fff',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    display: 'inline-block',
                    fontSize: '14px',
                    maxWidth: '80%'
                  }}>
                    {msg.text}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
});

export default VapiWidget;
