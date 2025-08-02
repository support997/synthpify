import './App.css'
import { useRef } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Phone, Clock, Users, Settings, BarChart3, Shield, CheckCircle, ArrowRight, Star, Zap, Target, Headphones } from 'lucide-react'
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
              <Button className="bg-blue-600 hover:bg-blue-700">Schedule a Free Demo</Button>
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
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 w-full sm:w-auto">
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
                    <Phone className="mr-2 h-5 w-5" />
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
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
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
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
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
        hideStartButton={true}
      />
    </div>
  )
}

export default App