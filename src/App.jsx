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
          {/* existing testimonials area unchanged */}
        </div>
      </section>

      {/* Verticals Section (unchanged content) */}
      <section id="verticals" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ...existing verticals content... */}
        </div>
      </section>

      {/* About Section (unchanged content) */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ...existing about content... */}
        </div>
      </section>

      {/* Terms & Privacy (unchanged content) */}
      <section id="terms" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ...existing terms/privacy content... */}
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-10"
          >
            <Badge className="bg-blue-100 text-blue-700">Contact</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Talk to Us</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Prefer to speak? Start a quick call with our AI assistant, or send us a message and we’ll follow up by email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleStartCall}>
                Start AI Voice Assistant
              </Button>
              <a
                href="mailto:support@synthpify.ai"
                className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-base border-slate-300 text-slate-700 hover:bg-white"
              >
                Email support@synthpify.ai
              </a>
            </div>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us a bit about what you need..."
                />
              </div>

              <div className="flex items-center gap-4">
                <Button disabled={sending} className="bg-blue-600 hover:bg-blue-700 px-6">
                  {sending ? 'Sending…' : 'Send Message'}
                </Button>
                <span className="text-sm text-slate-500">
                  Or email <a className="underline" href="mailto:support@synthpify.ai">support@synthpify.ai</a>
                </span>
              </div>
            </form>
          </div>
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
        apiKey={import.meta.env.VITE_VAPI_API_KEY}
        assistantId={import.meta.env.VITE_VAPI_ASSISTANT_ID}
      />
    </div>
  )
}

export default App
