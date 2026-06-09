import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Phone, Mail, Globe, Briefcase, Calendar, MapPin, Share2, ArrowLeft, Utensils, Wrench, Building2, Home as HomeIcon, Stethoscope, Truck, ShoppingCart, Copy, Smartphone, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Connect = () => {
  const [copied, setCopied] = useState(false);

  const generateVCard = async () => {
    // Fetch photo, crop to a square from the top, and convert to Base64
    let photoBase64 = '';
    try {
      photoBase64 = await new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          // Make it a perfect square based on width
          const size = Math.min(img.width, img.height);
          canvas.width = size;
          canvas.height = size;
          
          const ctx = canvas.getContext('2d');
          
          // Crop from the very top (srcY = 0) so the face sits in the middle of the square
          const srcX = (img.width - size) / 2;
          const srcY = 0; 
          
          ctx.drawImage(img, srcX, srcY, size, size, 0, 0, size, size);
          
          const dataURL = canvas.toDataURL('image/jpeg', 0.85);
          resolve(dataURL.split(',')[1]);
        };
        img.onerror = reject;
        img.src = '/wesley.jpg';
      });
    } catch (err) {
      console.warn('Could not load photo for vCard:', err);
    }

    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Wesley Lin',
      'ORG:Synthpify.ai',
      'TITLE:Founder, Business Development',
      'TEL;TYPE=CELL:347-738-0038',
      'EMAIL:Wlin@synthpify.ai',
      'URL:https://www.synthpify.ai',
      'NOTE:Synthpify.ai specializes in developing advanced business automation tools and conversational AI assistants to streamline complex operational workflows. By seamlessly orchestrating intelligent voice agents and automated logic pipelines, the platform transforms how companies manage customer interactions and day-to-day tasks. We also offer merchant service, custom App dev and online ordering service.',
      photoBase64 ? `PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}` : '',
      'END:VCARD'
    ].filter(Boolean).join('\r\n');

    const vcfBlob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(vcfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Wesley_Lin_Synthpify.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent("Check out Wesley Lin from Synthpify.ai");
    const body = encodeURIComponent(window.location.href);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const industries = [
    {
      title: "Restaurants & Cafes",
      icon: <Utensils className="h-5 w-5 text-red-500" />,
      desc: "Phone order taking agent. No more missed calls, so you can take care of the customer in front of you while having the AI handle inbound calls, loyalty program questions, and menu troubleshooting."
    },
    {
      title: "Home Services",
      icon: <Wrench className="h-5 w-5 text-red-500" />,
      desc: "Plumbing, Electrical, Roofing: While you are out on the job, our agent can answer your calls, check your availability, book appointments, and send preliminary quotes directly to the caller."
    },
    {
      title: "Real Estate Investment & Agencies",
      icon: <Building2 className="h-5 w-5 text-red-500" />,
      desc: "Instantly pre-qualify inbound leads, capture seller details, and answer property-specific questions 24/7, ensuring you never miss a potential fix-and-flip deal or client inquiry while analyzing other properties."
    },
    {
      title: "Property Management",
      icon: <HomeIcon className="h-5 w-5 text-red-500" />,
      desc: "Field routine tenant FAQs and late-night maintenance requests. The AI can triage urgent issues to your on-call staff and log standard work orders without waking up your team."
    },
    {
      title: "Healthcare Clinics & Dental Offices",
      icon: <Stethoscope className="h-5 w-5 text-red-500" />,
      desc: "Handle high volumes of routine patient calls for appointment scheduling, rescheduling, and basic intake, reducing front-desk burnout and keeping the focus on patient care."
    },
    {
      title: "Logistics & Delivery",
      icon: <Truck className="h-5 w-5 text-red-500" />,
      desc: "Automate driver dispatch updates, provide customers with real-time tracking information over the phone, and handle route rescheduling requests without requiring a human dispatcher."
    },
    {
      title: "E-Commerce & Retail",
      icon: <ShoppingCart className="h-5 w-5 text-red-500" />,
      desc: "Act as a front-line customer support agent to handle order status checks, process return requests, and answer common product questions, seamlessly routing complex issues to your live support team."
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-slate-900 flex items-center justify-center font-sans relative overflow-hidden py-12 px-4 sm:px-6">
      {/* Decorative dark background blur */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[128px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[420px] relative z-10 my-auto h-[85vh] min-h-[600px] max-h-[850px] flex flex-col"
      >
        {/* The Card */}
        <div className="bg-[#F8F9FA] rounded-[36px] overflow-hidden shadow-2xl shadow-red-900/10 flex-1 relative flex flex-col border border-white/10">
          
          {/* Scrollable Content Area */}
          <div id="scrollable-content" className="overflow-y-auto flex-1 pb-28 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* Header section (Hero Image) */}
            <div 
              className="h-48 relative p-6 shrink-0 rounded-t-[36px] bg-cover bg-center"
              style={{ backgroundImage: "url('/hero-bg.png')" }}
            >
              {/* Dark overlay to ensure the back button and logo remain readable */}
              <div className="absolute inset-0 bg-black/30 rounded-t-[36px]"></div>

              {/* Back button */}
              <div 
                className="relative z-10 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-md cursor-pointer hover:bg-black/50 transition shadow-sm"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </div>

              {/* Logo / Badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-[#FF6B6B]/90 backdrop-blur-md px-3 py-1.5 rounded text-white font-bold tracking-[0.2em] text-xs shadow-sm border border-white/20">
                  SYNTHPIFY
                </div>
              </div>

              {/* Profile Avatar overlapping */}
              <div className="absolute left-6 -bottom-12 z-20">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-24 h-24 rounded-full border-[6px] border-[#F8F9FA] bg-[#1A1A1A] flex items-center justify-center shadow-md overflow-hidden"
                >
                  <img 
                    src="/wesley.jpg" 
                    alt="Wesley Lin" 
                    className="w-full h-full object-cover object-[center_15%]"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="text-3xl font-bold text-white tracking-wider hidden">WL</span>
                </motion.div>
              </div>
            </div>

            {/* Main Info */}
            <div className="px-6 pt-16 pb-6 shrink-0">
              <h1 className="text-3xl font-bold text-neutral-900 tracking-tight mb-1">Wesley Lin</h1>
              <p className="text-neutral-500 font-semibold text-[15px] leading-snug">
                Founder & Business Development<br/>
                Synthpify | AI Agency
              </p>
              
              {/* Connection Details block */}
              <div className="mt-7">
                <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3">Organization details</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[15px] text-neutral-700 font-semibold">
                    <Calendar className="w-5 h-5 text-neutral-400" /> 
                    <span>Founded June 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-[15px] text-neutral-700 font-semibold">
                    <MapPin className="w-5 h-5 text-neutral-400" /> 
                    <span>New York, NY</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons (View Card & Add Tag) */}
              <div className="flex gap-3 mt-7">
                <Button 
                  onClick={generateVCard}
                  variant="outline" 
                  className="flex-1 bg-transparent border-2 border-neutral-200 hover:bg-neutral-100 text-neutral-800 rounded-xl py-6 font-semibold text-base shadow-none transition-colors"
                >
                  View card
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      className="flex-[0.8] bg-[#1A1A1A] hover:bg-black text-white rounded-xl py-6 px-5 font-semibold text-base shadow-md transition-colors"
                    >
                      <Share2 className="w-5 h-5 mr-2" /> Share
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" sideOffset={8} className="w-48 bg-[#1A1A1A] text-white border-white/10 rounded-xl p-2 shadow-2xl">
                    <DropdownMenuItem onClick={handleCopyLink} className="focus:bg-white/10 rounded-lg cursor-pointer font-medium py-2">
                      <Copy className="w-4 h-4 mr-2" />
                      {copied ? "Copied!" : "Copy Link"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleEmailShare} className="focus:bg-white/10 rounded-lg cursor-pointer font-medium py-2">
                      <Mail className="w-4 h-4 mr-2" />
                      Share via Email
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Contact Info List */}
            <div className="px-6 pb-6 shrink-0">
              <div className="space-y-3">
                {/* Email */}
                <a href="mailto:Wlin@synthpify.ai" className="flex items-center gap-4 group p-2 -mx-2 rounded-2xl hover:bg-neutral-100/60 transition-colors">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#FF4E4E] flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC2B2B] transition-colors shadow-sm shadow-red-500/20">
                    <Mail className="w-[22px] h-[22px] text-white" />
                  </div>
                  <div className="font-semibold text-neutral-800 text-[16px] break-all">Wlin@synthpify.ai</div>
                </a>
                
                {/* Phone */}
                <a href="tel:3477380038" className="flex items-center gap-4 group p-2 -mx-2 rounded-2xl hover:bg-neutral-100/60 transition-colors">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#FF4E4E] flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC2B2B] transition-colors shadow-sm shadow-red-500/20">
                    <Phone className="w-[22px] h-[22px] text-white" />
                  </div>
                  <div className="font-semibold text-neutral-800 text-[16px]">(347) 738-0038</div>
                </a>
                
                {/* Website */}
                <a href="https://www.synthpify.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-2 -mx-2 rounded-2xl hover:bg-neutral-100/60 transition-colors">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#FF4E4E] flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC2B2B] transition-colors shadow-sm shadow-red-500/20">
                    <Globe className="w-[22px] h-[22px] text-white" />
                  </div>
                  <div className="font-semibold text-neutral-800 text-[16px]">synthpify.ai</div>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="px-8 shrink-0">
              <div className="h-px bg-neutral-200/80 w-full mb-8"></div>
            </div>

            {/* About & Industries */}
            <div className="px-6 pb-6 shrink-0">
              <h2 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-4">About</h2>
              <p className="text-neutral-700 text-[15px] leading-relaxed mb-10 font-medium">
                Synthpify.ai specializes in developing advanced business automation tools and conversational AI assistants to streamline complex operational workflows. By seamlessly orchestrating intelligent voice agents and automated logic pipelines, the platform transforms how companies manage customer interactions and day-to-day tasks.
              </p>

              <div className="grid grid-cols-4 gap-2 pb-6 mb-4">
                
                {/* Card 1: Clover */}
                <div className="bg-white rounded-xl p-2.5 shadow-sm ring-1 ring-black/[0.03] flex flex-col justify-between items-center text-center h-[90px]">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center p-1.5 mb-1.5 shrink-0">
                    <img src="/clover-logo.png" alt="Clover" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-bold text-[9px] text-neutral-800 leading-[1.1]">Merchant services</span>
                </div>

                {/* Card 2: Custom App */}
                <div className="bg-white rounded-xl p-2.5 shadow-sm ring-1 ring-black/[0.03] flex flex-col justify-between items-center text-center h-[90px]">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-1.5 shrink-0">
                    <Smartphone className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-bold text-[9px] text-neutral-800 leading-[1.1]">Custom App</span>
                </div>

                {/* Card 3: AI Voice */}
                <div className="bg-white rounded-xl p-2.5 shadow-sm ring-1 ring-black/[0.03] flex flex-col justify-between items-center text-center h-[90px]">
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mb-1.5 shrink-0">
                    <Mic className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-bold text-[8.5px] text-neutral-800 leading-[1.1]">
                    AI Voice<br/>
                    <span className="font-medium text-neutral-500">Workflow Automation</span>
                  </span>
                </div>

                {/* Card 4: Online Ordering */}
                <div className="bg-white rounded-xl p-2.5 shadow-sm ring-1 ring-black/[0.03] flex flex-col justify-between items-center text-center h-[90px]">
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mb-1.5 shrink-0">
                    <ShoppingCart className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="font-bold text-[9px] text-neutral-800 leading-[1.1]">Online ordering</span>
                </div>

              </div>

              <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Industries</h3>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {industries.map((ind, i) => (
                  <AccordionItem value={`item-${i}`} key={i} className="border-none bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/[0.03] transition-all hover:shadow-md">
                    <AccordionTrigger className="hover:no-underline text-[15px] font-bold text-neutral-800 py-4 px-5">
                      <div className="flex items-center gap-3 text-left">
                        <div className="p-2.5 rounded-full bg-red-50">
                          {ind.icon}
                        </div>
                        {ind.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-600 text-[14px] leading-relaxed pb-5 pt-1 px-5 font-medium">
                      {ind.desc}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>

          {/* Floating Bottom Action Bar */}
          <div className="absolute bottom-6 left-6 right-6 z-30 pointer-events-none">
            <div className="bg-[#111111] rounded-[20px] p-2 flex items-center gap-2 shadow-2xl ring-1 ring-white/10 pointer-events-auto">
              <Button 
                variant="ghost" 
                className="text-neutral-400 hover:text-white hover:bg-white/10 rounded-xl px-5 font-semibold text-[15px]"
                onClick={() => {
                  const scrollArea = document.getElementById('scrollable-content');
                  if (scrollArea) {
                    scrollArea.scrollTo({ top: scrollArea.scrollHeight, behavior: 'smooth' });
                  }
                }}
              >
                More...
              </Button>
              <div className="flex-1"></div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-white/10 bg-white/5 rounded-xl font-semibold text-[15px] hidden sm:flex"
                  >
                    Share
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" sideOffset={12} className="w-48 bg-[#1A1A1A] text-white border-white/10 rounded-xl p-2 shadow-2xl">
                  <DropdownMenuItem onClick={handleCopyLink} className="focus:bg-white/10 rounded-lg cursor-pointer font-medium py-2">
                    <Copy className="w-4 h-4 mr-2" />
                    {copied ? "Copied!" : "Copy Link"}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleEmailShare} className="focus:bg-white/10 rounded-lg cursor-pointer font-medium py-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Share via Email
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                className="bg-white text-black hover:bg-neutral-200 rounded-xl font-bold text-[15px] px-6" 
                onClick={generateVCard}
              >
                Save Contact
              </Button>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Connect;
