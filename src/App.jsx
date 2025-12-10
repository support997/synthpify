import './index.css'
import React, { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VapiWidget from './components/VapiWidget'
import N8nChatEmbed from './components/N8nChatEmbed'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Security from './pages/Security'

import About from './pages/About'
import Contact from './pages/Contact'
import Support from './pages/Support'

function App() {
  const vapiRef = useRef(null)

  const handleStartCall = () => {
    vapiRef.current?.startCall();
  };

  return (
    <Router>
      <div className="bg-slate-50 text-slate-900 font-sans antialiased selection:bg-brand-100 selection:text-brand-700 min-h-screen flex flex-col">

        <Navbar onScheduleClick={handleStartCall} />

        <N8nChatEmbed />

        <Routes>
          <Route path="/" element={<Home onScheduleClick={handleStartCall} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
        </Routes>

        <Footer />

        <VapiWidget ref={vapiRef} apiKey={import.meta.env.VITE_VAPI_API_KEY} assistantId={import.meta.env.VITE_VAPI_ASSISTANT_ID} />

      </div>
    </Router>
  )
}

export default App