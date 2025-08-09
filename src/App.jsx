import './App.css'
import { useRef } from 'react'
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

function App() {
  const vapiRef = useRef(null)

  const handleStartCall = () => {
    vapiRef.current?.startCall();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Phone className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">AI Voice Agent</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#verticals" className="text-slate-700 hover:text-blue-600 transition-colors">Verticals</a>
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
            {/* Feature 1 */}
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

            {/* Feature 2 */}
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

            {/* Feature 3 */}
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

            {/* Feature 4 */}
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

            {/* Feature 5 */}
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

            {/* Feature 6 */}
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

      <section id="terms" className="py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center space-y-4 mb-16"
    >
      <Badge className="bg-slate-200 text-slate-800">
        Legal & Policy
      </Badge>
      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
        Terms of Service & Privacy Policy
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Please review the following terms and privacy practices governing your use of Synthify.ai's services.
      </p>
    </motion.div>

    <div className="space-y-16 text-slate-700 text-base leading-relaxed">
      <div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Part I: Terms of Service</h3>
        <ol className="space-y-6 list-decimal list-inside">
          <li><strong>Acceptance of Terms:</strong> You represent and warrant that you have read, understood, and agree to be bound by these Terms of Service, and, if acting on behalf of an entity, you have the authority to bind that entity. Your access to and use of our services is conditioned upon your acceptance of and compliance with these Terms. Synthify.ai reserves the right to modify these Terms at any time. We will notify you of material changes via email or through the client dashboard at least thirty (30) days before such changes take effect. Your continued use of the services after such notice constitutes acceptance of the modified Terms.</li>

          <li><strong>Description of Service:</strong> Synthify.ai provides a customizable AI voice agent service to automate customer interactions, including handling inbound calls to take orders, book appointments, and qualify leads, all managed via a client dashboard. The service does not process credit card payments; all financial transactions are handled by the Client at the point of service. The full scope of services, including customizations, integrations, and service-level commitments, will be detailed in a Statement of Work (SOW) or Service Agreement executed between Synthify.ai and the Client. Synthify.ai will use commercially reasonable efforts to ensure service availability but does not guarantee uninterrupted access.</li>

          <li><strong>Client Obligations:</strong> The Client agrees to: a. Provide accurate, complete, and current information to Synthify.ai for configuring and training the AI assistant. b. Use the service in compliance with all applicable laws, including but not limited to data protection laws (e.g., GDPR, CCPA) and telephony regulations (e.g., TCPA). c. Indemnify and hold Synthify.ai harmless from claims arising from the Client’s willful misconduct, negligence, or failure to comply with applicable laws in handling financial transactions, fulfilling orders, or managing bookings. d. Promptly notify Synthify.ai of any legal or regulatory issues arising from the Client’s use of the service.</li>

          <li><strong>Fees and Payment:</strong> Fees are detailed in the applicable Service Agreement and are payable within thirty (30) days of invoice issuance. Synthify.ai may modify pricing with thirty (30) days’ written notice. Late payments may incur interest at 1.5% per month or the maximum rate permitted by law. Clients may dispute billing errors in writing within fifteen (15) days of receiving an invoice. No refunds will be issued for prepaid fees unless otherwise specified in the Service Agreement.</li>

          <li><strong>Intellectual Property:</strong> All intellectual property rights in the Synthify.ai service, including software, AI models, documentation, and website, remain the exclusive property of Synthify.ai and its licensors. The Client retains ownership of all data provided to Synthify.ai (“Client Data”) and grants Synthify.ai a non-exclusive, worldwide, royalty-free license to use, process, and store Client Data solely to provide the services. Any improvements or derivative works based on Client Data shall be owned by Synthify.ai.</li>

          <li><strong>Confidentiality:</strong> Both parties agree to treat all non-public information received from the other as confidential, except for information that is: (a) publicly available through no fault of the receiving party; (b) independently developed without use of the disclosing party’s information; (c) disclosed with the disclosing party’s prior written consent; or (d) required to be disclosed by law, provided the receiving party notifies the disclosing party promptly. Upon termination, each party shall return or destroy the other’s confidential information, except as required by law. Confidentiality obligations shall survive for three (3) years post-termination, except for trade secrets, which remain protected indefinitely.</li>

          <li><strong>Disclaimer of Warranties:</strong> The service is provided “as is,” without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement, except as required by applicable law. Synthify.ai does not warrant that the service will be uninterrupted or error-free but will use commercially reasonable efforts to maintain industry-standard security measures.</li>

          <li><strong>Limitation of Liability:</strong> In no event shall Synthify.ai be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from: (a) your access to or use of the service; (b) third-party conduct or content; (c) content obtained from the service; or (d) unauthorized access or alteration of your data, except as required by applicable law. Synthify.ai’s total liability for any claim shall not exceed the greater of the fees paid by the Client in the twelve (12) months preceding the claim or $10,000, except for claims arising from gross negligence, willful misconduct, violations of data protection laws, or as provided under Section 3(c) (indemnification).</li>

          <li><strong>Termination:</strong> Either party may terminate this Agreement with thirty (30) days’ written notice. Synthify.ai may terminate immediately for material breach, including non-payment, misuse of the service, or violation of applicable law. Upon termination, the Client’s access to the service will be revoked, and outstanding fees will become due. Synthify.ai will provide the Client a thirty (30)-day period to retrieve Client Data, after which Synthify.ai may delete such data, subject to applicable law. Transition assistance may be provided at Synthify.ai’s discretion, subject to additional fees as agreed in writing.</li>

          <li><strong>Governing Law and Dispute Resolution:</strong> This Agreement shall be governed by the laws of the State of Delaware, excluding its conflict of law provisions. Any disputes arising under this Agreement shall first be submitted to non-binding mediation in Delaware, administered by a mutually agreed mediator. If mediation fails within sixty (60) days, disputes shall be resolved by binding arbitration in Delaware under the rules of the American Arbitration Association (AAA). The arbitration shall be conducted by a single arbitrator, and the decision shall be final and binding. Each party shall bear its own costs, except that the arbitrator may award costs and fees to the prevailing party. If arbitration is not enforceable, any legal action shall be brought exclusively in the state or federal courts located in Delaware. If any provision of this Agreement is found unenforceable, the remaining provisions shall remain in full force and effect.</li>

          <li><strong>Force Majeure:</strong> Neither party shall be liable for delays or failure to perform due to causes beyond their reasonable control, including natural disasters, cyberattacks, or government actions, provided the affected party notifies the other promptly and resumes performance as soon as practicable.</li>

          <li><strong>Entire Agreement:</strong> This Agreement, together with any executed Statement of Work or Service Agreement, constitutes the entire agreement between the parties and supersedes all prior agreements, understandings, or representations, whether written or oral.</li>

          <li><strong>Assignment:</strong> Neither party may assign this Agreement without the other’s prior written consent, except that Synthify.ai may assign this Agreement to a successor in connection with a merger, acquisition, or sale of all or substantially all of its assets.</li>

          <li><strong>Notices:</strong> All notices under this Agreement shall be in writing and delivered via email to legal@synthify.ai for Synthify.ai and to the Client’s designated contact email, or by certified mail to the addresses specified in the Service Agreement. Notices are deemed received upon confirmation of delivery.</li>
        </ol>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Part II: Privacy Policy</h3>
        <ol className="space-y-6 list-decimal list-inside">
          <li><strong>Data Protection and GDPR Compliance:</strong> Synthify.ai is committed to complying with applicable data protection laws, including the General Data Protection Regulation (GDPR) for Clients or customers in the European Economic Area (EEA). Synthify.ai acts as a data processor for personal data provided by the Client or their customers, and the Client acts as the data controller under GDPR. The Client is responsible for ensuring that their use of the service complies with applicable data protection laws, including obtaining necessary consents or lawful bases for processing personal data. Synthify.ai will process personal data only as instructed by the Client and in accordance with this Agreement and any applicable Data Processing Agreement (DPA).</li>

          <li><strong>Information We Collect:</strong> We collect personal information provided by you or your customers, including contact information (e.g., name, phone number, email) and order or appointment details, as authorized by the Client. We may also collect usage and technical data (e.g., IP addresses, device identifiers) to operate and improve the service. Personal data is collected only with the Client’s authorization or as necessary to provide the services.</li>

          <li><strong>Purpose of Data Collection:</strong> We collect and process personal information solely to provide the services, including fulfilling orders, managing bookings, and facilitating communication. Any use of data for analytics or service improvement (e.g., AI model training) will be anonymized or conducted with your prior consent, where required by applicable law. We adhere to data minimization principles, collecting only what is necessary for the stated purposes.</li>

          <li><strong>Data Storage and Security:</strong> We store personal information on secure servers and implement industry-standard security measures, including encryption, access controls, and regular security audits, to prevent unauthorized access, loss, or misuse. Data is retained only for as long as necessary to provide the services or as required by law, after which it is securely deleted. In the event of a data breach, we will notify affected Clients and, where required, data subjects or supervisory authorities promptly, in accordance with GDPR and other applicable laws.</li>

          <li><strong>Data Sharing and International Transfers:</strong> We do not sell, rent, or lease personal information to third parties. We may share data with trusted third parties (e.g., cloud hosting providers, integration partners) solely to provide the services, pursuant to data processing agreements that comply with GDPR Article 28 and other applicable laws. If data is transferred internationally, including outside the EEA, we ensure compliance with applicable safeguards, such as Standard Contractual Clauses (SCCs) under GDPR or equivalent mechanisms, to protect personal data.</li>

          <li><strong>Your Rights:</strong> You and your customers have the right to access, correct, delete, or port personal information we hold, and, where applicable, to restrict or object to processing, subject to legal and contractual obligations. Under GDPR, EEA data subjects may also lodge complaints with a supervisory authority. Requests can be submitted via privacy@synthify.ai or through the client dashboard. We will respond within thirty (30) days or as required by applicable law.</li>
        </ol>
      </div>
    </div>
  </div>
</section>
    {/* Security Section */}
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
                <Phone className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">AI Voice Agent</span>
              </div>
              <p className="text-slate-400">
                Never miss a call again with our intelligent AI voice agent solution.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
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
            <p>&copy; 2024 AI Voice Agent. All rights reserved.</p>
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