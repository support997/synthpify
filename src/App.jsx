import './App.css'
import { useRef, useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Phone, Clock, Users, Settings, BarChart3, Shield, CheckCircle, ArrowRight, Star, Zap, Target, Headphones, Mic } from 'lucide-react'
import { motion } from 'framer-motion'
import VapiWidget from './components/VapiWidget'

// Import images
import heroImage from './assets/hero-split-restaurant-customer.png'
import problemImage from './assets/problem-missed-calls.png'
import solutionImage from './assets/solution-ai-dashboard.png'
import onboardingImage from './assets/onboarding-training.png'
import phoneImage from './assets/phone-system-live.png'
import orderManagementImage from './assets/order-management-dashboard.png'


// ✅ NEW: import your logo
import synthpifyLogo from './assets/synthpify_logo_small.jpeg'
import React, { useEffect } from 'react';

// VAPI chotbot
//import VapiChatLauncher from './components/VapiChatLauncher'

const BRAND = 'Synthpify.ai' // <- change here if needed
const LAST_UPDATED = 'August 13, 2025'

function App() {
  const vapiRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleStartCall = () => {
    vapiRef.current?.startCall();
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  // Simple mailto fallback so you receive messages at support@synthpify.ai.
  // (If you add a backend route later, swap this for a fetch('/api/contact', ...))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    const subject = `New website contact from ${form.name || 'Anonymous'}`
    const body =
`Name: ${form.name}
Email: ${form.email}
Message:
${form.message}`

    const mailto = `mailto:support@synthpify.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    // Open email client
    window.location.href = mailto

    // UX nicety: reset after a moment
    setTimeout(() => {
      setSending(false)
      setForm({ name: '', email: '', message: '' })
    }, 600)
  }

  function N8nChatEmbed() {
  useEffect(() => {
    // 0) Early stub so clicks before load get queued
    if (!window.openN8nChat) {
      window.__pendingOpenN8n = false;
      window.openN8nChat = () => { window.__pendingOpenN8n = true; };
    }

    // 1) Ensure n8n CSS
    if (!document.getElementById('n8n-chat-css')) {
      const link = document.createElement('link');
      link.id = 'n8n-chat-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
      document.head.appendChild(link);
    }

    // 2) Create a fixed bottom-left container we fully control
    let container = document.getElementById('n8n-left-chat');
    if (!container) {
      container = document.createElement('div');
      container.id = 'n8n-left-chat';
      document.body.appendChild(container);
    }
    Object.assign(container.style, {
      position: 'fixed',
      left: '24px',
      bottom: '24px',
      right: 'auto',
      zIndex: '2147483647'
    });

    // 3) Left position + color overrides scoped to our container
    const STYLE_ID = 'n8n-left-chat-css';
    document.getElementById(STYLE_ID)?.remove();
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #n8n-left-chat .n8n-chat-floating-button { left: 0 !important; right: auto !important; bottom: 0 !important; }
      #n8n-left-chat .n8n-chat-modal          { left: 0 !important; right: auto !important; bottom: 68px !important; }

      /* Match your Talk-to-Assistant look (emerald gradient) */
      #n8n-left-chat .n8n-chat-floating-button {
        background: linear-gradient(90deg, #10B981, #14B8A6) !important;
        color: #fff !important;
        border-radius: 9999px !important;
        box-shadow: 0 10px 15px -3px rgba(16,185,129,.3),
                    0 4px 6px -2px rgba(16,185,129,.2) !important;
      }
      #n8n-left-chat .n8n-chat-floating-button:hover { filter: brightness(0.95) !important; }
      #n8n-left-chat .n8n-chat-floating-button svg   { color:#fff !important; fill: currentColor !important; }
    `;
    document.head.appendChild(style);

    // 4) Load SDK and mount into our container (bottom-left)
    let inst;
    (async () => {
      try {
        const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');
        inst = createChat({
          webhookUrl: 'https://n8n-nu6j.onrender.com/webhook/fa608d72-de1f-4d49-9b6e-36d20e4d61d1/chat',
          target: '#n8n-left-chat',       // ⬅️ anchor here
          mode: 'window',                 // render toggle + window in target
          // theme: 'dark',
        });

        // Robust open/close helpers (work even if no API methods)
        window.openN8nChat = () => {
          if (inst?.open) inst.open();
          else document.querySelector('#n8n-left-chat .n8n-chat-floating-button')?.click();
        };
        window.closeN8nChat = () => {
          if (inst?.close) inst.close();
          else document.querySelector('#n8n-left-chat .n8n-chat-floating-button')?.click();
        };

        // If user clicked before ready, open now
        if (window.__pendingOpenN8n) {
          window.__pendingOpenN8n = false;
          window.openN8nChat();
        }
      } catch (e) {
        console.error('Failed to load n8n chat widget:', e);
      }
    })();

    // keep persistent
    return () => {};
  }, []);

  return null;
}





  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              {/* ✅ Replaced phone icon + name */}
              <img
                src={synthpifyLogo}
                alt="Synthpify logo"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-slate-900">Synthpify AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#verticals" className="text-slate-700 hover:text-blue-600 transition-colors">Verticals</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleStartCall}>Schedule a Free Demo</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  <Zap className="w-4 h-4 mr-1" />
                  AI-Powered Solution
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Stop Losing Business to a 
                  <span className="text-blue-600"> Busy Phone Line</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Our AI Voice Agent Answers Every Call, Takes Every Order, and Books Every Appointment—24/7. 
                  Customers pay at pickup, keeping your process simple.
                </p>
              </div>
              
              <div className="space-y-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 w-full sm:w-auto" onClick={handleStartCall}>
                  Schedule a Free Demo with Our Voice Agent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex justify-center sm:justify-start">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-4"
                    onClick={() => vapiRef.current?.startCall()}
                  >
                    <Mic className="mr-2 h-5 w-5" />
                    See How It Works
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-600">Trusted by 500+ businesses</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="AI Voice Agent Interface" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
              >
                <CheckCircle className="h-6 w-6" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
              >
                <Phone className="h-6 w-6" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={problemImage} 
                alt="Missed calls impact on business" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-700">
                  <Target className="w-4 h-4 mr-1" />
                  The Problem
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  You're a business owner, not a call center
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We understand the hustle. The phone rings, but you're already stretched thin. You have to choose: 
                  serve the person in front of you or risk losing the person on the line. Every missed call is a 
                  missed order or reservation, leading to lost revenue and frustrated customers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">67%</div>
                    <div className="text-sm text-red-700">Calls go unanswered</div>
                  </CardContent>
                </Card>
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">$1,200</div>
                    <div className="text-sm text-red-700">Lost per month</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-700">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  The Solution
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  The Solution is an AI Voice Agent
                </h2>
                <h3 className="text-xl font-semibold text-blue-600">
                  Our intelligent AI is more than a chatbot—it's a new member of your team
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We've designed a sophisticated AI that sounds and feels like a real person. It seamlessly 
                  integrates with your workflow to handle orders and calls professionally and efficiently, 
                  so you can focus on what you do best: running your business. Orders are paid for upon pickup, 
                  simplifying your transaction process.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-green-700">Calls answered</div>
                  </CardContent>
                </Card>
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-green-700">Available when you need it</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={solutionImage} 
                alt="AI Voice Agent Solution" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <Badge className="bg-blue-100 text-blue-700">
              <Settings className="w-4 h-4 mr-1" />
              How It Works
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Three Simple Steps to Success
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get your AI Voice Agent up and running in no time with our streamlined process
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <CardTitle className="text-xl">Onboarding & Training</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src={onboardingImage} 
                    alt="AI Onboarding Process" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-slate-600">
                    We work with you to train our AI on your specific business. From your menu items and pricing 
                    to your booking policies and common FAQs, our AI learns everything it needs to know.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <CardTitle className="text-xl">Go Live</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src={phoneImage} 
                    alt="AI Phone System" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-slate-600">
                    We provide a dedicated phone number or integrate with your existing line. 
                    The AI is now ready to answer calls 24/7.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <CardTitle className="text-xl">Your Orders, Your Way</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src={orderManagementImage} 
                    alt="Order Management Dashboard" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-slate-600">
                    Orders taken by our AI are immediately captured in your custom dashboard. You have the 
                    flexibility to manage them however you prefer: Physical Printout, KDS Integration, or Manual Entry.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <Badge className="bg-purple-100 text-purple-700">
              <Star className="w-4 h-4 mr-1" />
              Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              The Features That Make Your Business More Efficient
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover the powerful capabilities that set our AI Voice Agent apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards unchanged */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <CardTitle>Order Capture and Management</CardTitle>
                  <CardDescription>
                    Orders are captured in your custom dashboard for easy viewing and processing.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6" />
                  </div>
                  <CardTitle>Flexible Fulfillment</CardTitle>
                  <CardDescription>
                    Choose how you want to handle orders—physical printouts, KDS, or manual POS entry.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <CardTitle>No Credit Card Hassle</CardTitle>
                  <CardDescription>
                    We simplify the process by allowing customers to pay at pickup, removing complexity and liability.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center personalidad-center mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle>Flexible Availability</CardTitle>
                  <CardDescription>
                    Available 24/7 or on-demand during your business hours. Your AI agent works when you need it to capture every opportunity.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Headphones className="h-6 w-6" />
                  </div>
                  <CardTitle>Customizable Voice & Tone</CardTitle>
                  <CardDescription>
                    The AI sounds just like you want it to, matching your brand's personality and style.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle>Secure & Private</CardTitle>
                  <CardDescription>
                    Your data and your customers' data is protected with enterprise-grade security measures.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

 {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <Badge className="bg-blue-100 text-blue-700">
              <Users className="w-4 h-4 mr-1" />
              Customer Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how businesses like yours have transformed their customer service and increased revenue with our AI Voice Agent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6">
                    "Since implementing the AI Voice Agent, we haven't missed a single order. Our revenue increased by 35% in just three months. The system is incredibly easy to use and our customers love the quick response times."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold">MR</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Maria Rodriguez</div>
                      <div className="text-sm text-slate-500">Owner, Bella's Pizzeria</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6">
                    "The AI agent handles our appointment bookings flawlessly. It's like having a dedicated receptionist 24/7. Our clients are impressed with the professional service, and we can focus on what we do best."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-semibold">DT</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Dr. Thomas Chen</div>
                      <div className="text-sm text-slate-500">Dental Practice Owner</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6">
                    "Game changer for our restaurant! The AI takes orders accurately and handles special requests perfectly. We've reduced wait times and increased customer satisfaction significantly."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-semibold">JS</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">James Smith</div>
                      <div className="text-sm text-slate-500">Manager, Urban Bistro</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6">
                    "The setup was incredibly smooth, and the support team was fantastic. Within a week, we were capturing calls we would have otherwise missed. ROI was immediate."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-orange-600 font-semibold">LW</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Lisa Wang</div>
                      <div className="text-sm text-slate-500">Owner, Fresh Flowers Co.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6">
                    "Our customers love the quick response and professional service. The AI understands our menu perfectly and even handles complex dietary restrictions. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-teal-600 font-semibold">RP</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Robert Park</div>
                      <div className="text-sm text-slate-500">Chef & Owner, Fusion Kitchen</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6">
                    "Best investment we've made for our business. The AI agent works seamlessly with our existing systems and has eliminated the stress of missing important calls during busy periods."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-indigo-600 font-semibold">SJ</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Sarah Johnson</div>
                      <div className="text-sm text-slate-500">Owner, Cozy Café</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section id="verticals" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <Badge className="bg-blue-100 text-blue-700">
              <BarChart3 className="w-4 h-4 mr-1" />
              Industry Solutions
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Perfect for Every Business Type
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI Voice Agent adapts to your industry's unique needs, handling calls professionally across all business verticals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* QSR */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <span className="text-2xl">🍔</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Quick Service Restaurants</h3>
                  <p className="text-sm text-slate-600">Fast food chains, pizza shops, coffee shops, and drive-thru restaurants</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Full Service Restaurants */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Full Service Restaurants</h3>
                  <p className="text-sm text-slate-600">Fine dining, casual dining, bistros, and specialty cuisine restaurants</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Spa & Wellness */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                    <span className="text-2xl">🧘</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Spa & Wellness</h3>
                  <p className="text-sm text-slate-600">Day spas, massage therapy, wellness centers, and beauty salons</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Nail Salons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <span className="text-2xl">💅</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Nail Salons</h3>
                  <p className="text-sm text-slate-600">Nail art studios, manicure/pedicure services, and nail care specialists</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hair Salons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                    <span className="text-2xl">✂️</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Hair Salons</h3>
                  <p className="text-sm text-slate-600">Hair styling, barbershops, color specialists, and hair treatment centers</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Plumbers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Plumbing Services</h3>
                  <p className="text-sm text-slate-600">Emergency plumbers, pipe repair, drain cleaning, and installation services</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Electricians */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Electrical Services</h3>
                  <p className="text-sm text-slate-600">Residential electricians, commercial wiring, and emergency electrical repairs</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* HVAC */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition-colors">
                    <span className="text-2xl">❄️</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">HVAC Contractors</h3>
                  <p className="text-sm text-slate-600">Heating, ventilation, air conditioning installation, repair, and maintenance</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Roofers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Roofing Services</h3>
                  <p className="text-sm text-slate-600">Roof installation, repair, inspection, and emergency roofing services</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Medical Offices */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Medical Offices</h3>
                  <p className="text-sm text-slate-600">Doctor offices, dental practices, clinics, and healthcare providers</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Professional Offices */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Professional Offices</h3>
                  <p className="text-sm text-slate-600">Law firms, accounting offices, consulting services, and business professionals</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Hotels */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                    <span className="text-2xl">🏨</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Hotels & Hospitality</h3>
                  <p className="text-sm text-slate-600">Hotels, motels, bed & breakfasts, and hospitality services</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Car Dealers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Car Dealerships</h3>
                  <p className="text-sm text-slate-600">Auto sales, used car lots, service departments, and automotive services</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Our AI Voice Agent is highly customizable and can be trained for any business type. 
                Contact us to discuss your specific industry needs.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Us for Custom Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <Badge className="bg-blue-100 text-blue-700">
              <Users className="w-4 h-4 mr-1" />
              About Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              About Synthify.ai
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                At Synthify.ai, we believe that small business owners should be able to focus on their passion: providing the best customer service and experience to their clients, regardless of how they connect. Customer satisfaction and speed of service are critical growth factors for businesses in every industry.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                Through our AI service, we empower businesses to achieve this focus. We help you reduce lost revenue, increase operational efficiency, and eliminate the mundane, repetitive tasks that shackle your team. Most importantly, we give time back to the business owner so you can concentrate on what you're passionate about—growing your business.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our mission is to empower small businesses with intelligent, automated solutions that increase efficiency and enhance the customer experience. Through AI workflow automation, we create custom solutions that enable you to add a workforce that runs 24/7. This allows you to carry out tasks with speed and accuracy while keeping expenses at bay and adding revenue streams from opportunities that were otherwise missed. We bring the true meaning of "Doing more with less" to life.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Purpose</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are purpose-built to give you peace of mind. Every missed call is a missed opportunity, and every overwhelmed employee is a risk to your business. Our service is designed to eliminate these worries by ensuring every phone call is answered promptly, professionally, and productively. We are here to help you capture every order, book every reservation, and qualify every lead, so your business never has to miss a beat.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">What We Do</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We build smart, connected workflows that save your business time, reduce errors, and increase efficiency.
              </p>

              <h4 className="text-xl font-semibold text-slate-900 mb-4">How It Works</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-slate-900 mb-2">Triggers</h5>
                    <p className="text-slate-600">Start a workflow when a customer places an order, fills out a form, sends a message, or books online.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-slate-900 mb-2">Automated Tasks</h5>
                    <p className="text-slate-600">Instantly send confirmations, update spreadsheets or CRMs, notify your team, generate receipts, and more.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-slate-900 mb-2">Smart Rules</h5>
                    <p className="text-slate-600">Add if/then logic to handle approvals, prevent conflicts, upsell automatically, or guide customer decisions.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-slate-900 mb-2">Data Sync</h5>
                    <p className="text-slate-600">Seamlessly connect and update your tools like Google Sheets, Stripe, QuickBooks, CRMs, calendars, and databases.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-slate-900 mb-2">AI Integration</h5>
                    <p className="text-slate-600">Use AI to understand voice calls, extract key info from messages, summarize orders, or qualify leads—all automatically.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-World Examples We Solve</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-slate-900 mb-2">Order Taking</h5>
                    <p className="text-slate-600">Capture food, product, or service orders via voice, chat, or web—and send them to your dashboard for smooth processing and pickup payment.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-slate-900 mb-2">Reservation & Booking</h5>
                    <p className="text-slate-600">Let customers schedule appointments or tables directly into your calendar or system—with no manual back-and-forth.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h5 className="font-semibold text-slate-900 mb-2">Lead Generation</h5>
                    <p className="text-slate-600">Automatically capture new customer interest through voice calls, forms, or messages—and push them into your CRM or email list.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms & Privacy (unchanged content) */}
      {/* Terms of Service */}
      <section id="terms" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Part I: Terms of Service</h2>
              <p className="text-slate-600">Please read these Terms carefully before using our services.</p>
            </div>

            <ol className="list-decimal pl-6 space-y-6 text-slate-700 leading-relaxed">
              <li>
                <strong>Acceptance of Terms.</strong> You acknowledge that you have read, understood, and agree to be bound by these Terms of Service. Your access to and use of our services is conditioned upon your acceptance of and compliance with these Terms.
              </li>

              <li>
                <strong>Description of Service.</strong> {BRAND} provides a customizable AI voice agent service designed to automate customer interactions for businesses. Our service includes an AI assistant that handles inbound calls to take orders, book appointments, and qualify leads, all of which are managed via a client dashboard. Our AI voice agent does not process credit card payments; all financial transactions are to be handled by the Client at the point of service. The full scope of services, including specific customizations and integrations, will be detailed in a separate Statement of Work or Service Agreement executed between {BRAND} and the Client.
              </li>

              <li>
                <strong>Client Obligations.</strong> The Client agrees to:
                <div className="mt-2 space-y-2">
                  <p>a. Provide accurate, complete, and current information to {BRAND} for the purpose of configuring and training the AI assistant.</p>
                  <p>b. Use the service in compliance with all applicable laws and regulations.</p>
                  <p>c. Hold {BRAND} harmless from any and all claims arising from the Client's failure to handle financial transactions, fulfill orders, or manage bookings.</p>
                </div>
              </li>

              <li>
                <strong>Fees and Payment.</strong> Fees for our services are based on the scope of work and are subject to a separate Service Agreement. Pricing is subject to change at the sole discretion of {BRAND}, with at least thirty (30) days' notice provided to the Client.
              </li>

              <li>
                <strong>Intellectual Property.</strong> All intellectual property rights in and to the {BRAND} service, including the software, AI models, documentation, and the website, are and shall remain the exclusive property of {BRAND} and its licensors.
              </li>

              <li>
                <strong>Confidentiality.</strong> Both parties agree to treat all non-public information received from the other party as confidential. This includes, but is not limited to, pricing, technical information, customer data, and business strategies. This obligation of confidentiality shall survive the termination of this Agreement.
              </li>

              <li>
                <strong>Disclaimer of Warranties.</strong> THE SERVICE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. {BRAND} does not warrant that the service will be uninterrupted, error-free, or completely secure.
              </li>

              <li>
                <strong>Limitation of Liability.</strong> IN NO EVENT SHALL {BRAND.toUpperCase()} BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING, WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (C) ANY CONTENT OBTAINED FROM THE SERVICE; AND (D) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE. Our total liability to the Client for any claim arising out of or relating to this Agreement shall not exceed the amount paid by the Client to {BRAND} in the twelve (12) months preceding the event giving rise to the claim.
              </li>

              <li>
                <strong>Termination.</strong> Either party may terminate this Agreement at any time with thirty (30) days' written notice. Upon termination, the Client's access to the service will be revoked, and any outstanding fees will become immediately due and payable.
              </li>

              <li>
                <strong>Governing Law and Dispute Resolution.</strong> This Agreement shall be governed by the laws of the State of Delaware, without regard to its conflict of law provisions. Any legal action or proceeding arising under this Agreement shall be brought exclusively in the state or federal courts located in Delaware.
              </li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Part II: Privacy Policy</h2>
              <p className="text-slate-600">How we collect, use, and protect information.</p>
            </div>

            <ol className="list-decimal pl-6 space-y-6 text-slate-700 leading-relaxed">
              <li>
                <strong>Information We Collect.</strong> We collect information that you or your customers provide to us when using our service, including contact information (name, phone number, email) and specific order or appointment details.
              </li>

              <li>
                <strong>Purpose of Data Collection.</strong> We collect this information for the sole purpose of providing our services to you. This data is used to fulfill orders and bookings and to facilitate communication.
              </li>

              <li>
                <strong>Data Storage and Security.</strong> We are committed to protecting the security of your data. We store information on secure servers and use industry-standard measures to prevent unauthorized access, loss, or misuse of data.
              </li>

              <li>
                <strong>Data Sharing.</strong> We do not sell, rent, or lease your data to third parties. We only share information as necessary to provide our services, which may include sharing with internal teams or third-party services for integration purposes.
              </li>

              <li>
                <strong>Your Rights.</strong> You or your customers have the right to access, correct, or delete personal information we hold, subject to legal and contractual obligations.
              </li>
            </ol>

            <div className="pt-4 text-slate-600 text-sm">
              <p>
                If you have questions about these terms or our privacy practices, please contact us at
                {' '}<a href="mailto:privacy@synthpify.ai" className="text-blue-600 underline">privacy@synthpify.ai</a>.
              </p>
            </div>

            <div className="pt-8 text-center">
              <a href="#top" className="text-blue-600 underline">Back to top</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Section (unchanged content) */}
      <section id="security" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-12"
          >
            <Badge className="bg-blue-100 text-blue-700">Security</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Security at Synthpify.ai</h2>
          </motion.div>

          <div className="space-y-6 text-slate-700 text-base leading-relaxed max-w-3xl mx-auto">
            <p><strong>HTTPS:</strong> Our site is served over HTTPS to protect data in transit.</p>
            <p><strong>Access:</strong> Administrative access to our infrastructure is restricted to authorized personnel.</p>
            <p><strong>Privacy:</strong> We act as a data processor; clients remain data controllers. We do not sell personal data.</p>
            <p><strong>Incidents:</strong> If we become aware of a data incident impacting clients, we will notify affected clients without undue delay as required by law.</p>
            <p><strong>Contact:</strong> For security questions or reports, email <a href="mailto:security@synthify.ai" className="text-blue-600 underline">security@synthify.ai</a>.</p>
          </div>
        </div>
      </section>

      {/* Contact Section (NEW) */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-3 text-base"
            onClick={() => vapiRef.current?.startCall()}
          >
            Start AI Voice Assistant
          </button>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-3 text-base"
            onClick={() => {
              // Queue the intent immediately; it will open as soon as the widget is ready
              window.__pendingOpenN8n = true;
              if (typeof window.openN8nChat === 'function') window.openN8nChat();
            }}
          >
            Chat with our AI
          </button>

         
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Never Miss Another Call?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their customer service with our AI Voice Agent. 
              Get started with a free demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4" onClick={handleStartCall}>
                Schedule Your Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {/* ✅ Replaced phone icon + name in footer */}
                <img
                  src={synthpifyLogo}
                  alt="Synthpify AI logo"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-xl font-bold">Synthpify AI</span>
              </div>
              <p className="text-slate-400">
                Never miss a call again with our intelligent AI voice agent solution.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="mailto:support@synthpify.ai" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#terms" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Synthpify AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <VapiWidget 
        ref={vapiRef}
        apiKey={import.meta.env.VITE_VAPI_PUBLIC_KEY}
        assistantId={import.meta.env.VITE_VAPI_ASSISTANT_ID}
      />
    </div>
  )
}

export default App
