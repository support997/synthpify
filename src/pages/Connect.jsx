import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, Phone, Mail, Globe, Briefcase, Calendar, MapPin, Share2, 
  ArrowLeft, Utensils, Wrench, Building2, Home as HomeIcon, Stethoscope, 
  Truck, ShoppingCart, Copy, Smartphone, Mic, Code2, Layers, Zap, Star, 
  Sparkles, ExternalLink, ArrowRight, Store
} from 'lucide-react';
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

  useEffect(() => {
    document.title = "Wesley Lin | Reward/Loyalty/Google Review App • Custom Apps • AI Voice • Kiosk/POS Solutions";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Connect with Wesley Lin, Founder & Solutions Architect at Synthpify.ai. Reward/Loyalty/Google review app, custom apps, AI voice, and Kiosk/POS/online ordering solutions.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Wesley Lin | Reward/Loyalty/Google Review App • Custom Apps • AI Voice • Kiosk/POS Solutions');
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', 'Connect with Wesley Lin, Founder & Solutions Architect at Synthpify.ai. Reward/Loyalty/Google review app, custom apps, AI voice, and Kiosk/POS/online ordering solutions.');
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', 'https://synthpify.ai/wesley.jpg');
    }
  }, []);

  const generateVCard = async () => {
    // Fetch photo, crop to a square from the top, and convert to Base64
    let photoBase64 = '';
    try {
      photoBase64 = await new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const size = Math.min(img.width, img.height);
          canvas.width = size;
          canvas.height = size;
          
          const ctx = canvas.getContext('2d');
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
      'TITLE:Founder & Solutions Architect',
      'TEL;TYPE=CELL:347-738-0038',
      'EMAIL:Wlin@synthpify.ai',
      'URL:https://www.synthpify.ai',
      'NOTE:Wesley Lin - Founder & Solutions Architect at Synthpify.ai. Reward/Loyalty/Google review apps (Engivo), bespoke custom apps (Beanpilot, Propshinsa), autonomous 24/7 conversational voice AI, and Kiosk/POS/online ordering solutions (Clover integrations). Learn more at https://www.synthpify.ai',
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
      title: "Restaurants, Cafes & QSR",
      icon: <Utensils className="h-5 w-5 text-red-500" />,
      desc: "Complete QSR technology: custom POS registers, self-service kiosks, online ordering apps, 24/7 autonomous phone order taking with direct Clover POS/KDS ticket routing, and customer loyalty engines (like Engivo) that accelerate 5-star Google reviews."
    },
    {
      title: "Workforce & Multi-Location Teams",
      icon: <Briefcase className="h-5 w-5 text-red-500" />,
      desc: "Bespoke workforce management systems (like Beanpilot) featuring on-site QR/GPS shift timekeeping, attendance fraud prevention, missed punch variance detection, and automated split-rate wage calculations (cash/check/tips)."
    },
    {
      title: "Real Estate Investment & PropTech",
      icon: <Building2 className="h-5 w-5 text-red-500" />,
      desc: "Institutional financial modeling platforms (like Propshinsa.com) for real-time cap-rate, cash-on-cash, and fix-and-flip deal underwriting in under 2 minutes, paired with 24/7 conversational voice agents capturing prospective buyer and seller leads."
    },
    {
      title: "Home & Field Trade Services",
      icon: <Wrench className="h-5 w-5 text-red-500" />,
      desc: "24/7 conversational voice assistants that answer incoming calls, triage urgent jobs, schedule technician visits, and dispatch preliminary quotes, fully synchronized with your Google Calendar, CRM, and customer SMS updates."
    },
    {
      title: "Healthcare, Dental & Wellness",
      icon: <Stethoscope className="h-5 w-5 text-red-500" />,
      desc: "Intelligent patient intake, automated appointment booking, and routine FAQ triage that eliminate phone hold times, minimize no-shows, and relieve front-desk staff from administrative burnout."
    },
    {
      title: "Retail & Franchise Chains",
      icon: <ShoppingCart className="h-5 w-5 text-red-500" />,
      desc: "Zero-download digital loyalty cards, countertop camera QR scanners, real-time push broadcasts, and multi-unit corporate analytics hubs for cross-store performance tracking."
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
        className="w-full max-w-[420px] relative z-10 my-auto h-[88vh] min-h-[620px] max-h-[880px] flex flex-col"
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
              <p className="text-neutral-500 font-semibold text-[14px] leading-snug">
                Founder & Solutions Architect<br/>
                <span className="text-neutral-700 font-bold">Synthpify.ai</span> • Reward/Loyalty/Google Review App • Custom Apps • AI Voice • Kiosk/POS/Online Ordering Solution
              </p>
              
              {/* Connection Details block */}
              <div className="mt-6">
                <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3">Organization details</p>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-[14px] text-neutral-700 font-semibold">
                    <Calendar className="w-4 h-4 text-neutral-400" /> 
                    <span>Founded June 2020</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px] text-neutral-700 font-semibold">
                    <MapPin className="w-4 h-4 text-neutral-400" /> 
                    <span>New York, NY</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons (View Card & Share) */}
              <div className="flex gap-3 mt-6">
                <Button 
                  onClick={generateVCard}
                  variant="outline" 
                  className="flex-1 bg-transparent border-2 border-neutral-200 hover:bg-neutral-100 text-neutral-800 rounded-xl py-5 font-semibold text-sm shadow-none transition-colors"
                >
                  View card
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      className="flex-[0.8] bg-[#1A1A1A] hover:bg-black text-white rounded-xl py-5 px-5 font-semibold text-sm shadow-md transition-colors"
                    >
                      <Share2 className="w-4 h-4 mr-2" /> Share
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" sideOffset={8} className="w-48 bg-[#1A1A1A] text-white border-white/10 rounded-xl p-2 shadow-2xl">
                    <DropdownMenuItem onClick={handleCopyLink} className="focus:bg-white/10 rounded-lg cursor-pointer font-medium py-2 text-xs">
                      <Copy className="w-4 h-4 mr-2" />
                      {copied ? "Copied!" : "Copy Link"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleEmailShare} className="focus:bg-white/10 rounded-lg cursor-pointer font-medium py-2 text-xs">
                      <Mail className="w-4 h-4 mr-2" />
                      Share via Email
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Contact Info List */}
            <div className="px-6 pb-6 shrink-0">
              <div className="space-y-2.5">
                {/* Email */}
                <a href="mailto:Wlin@synthpify.ai" className="flex items-center gap-3.5 group p-2 -mx-2 rounded-2xl hover:bg-neutral-100/60 transition-colors">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#FF4E4E] flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC2B2B] transition-colors shadow-sm shadow-red-500/20">
                    <Mail className="w-[20px] h-[20px] text-white" />
                  </div>
                  <div className="font-semibold text-neutral-800 text-[15px] break-all">Wlin@synthpify.ai</div>
                </a>
                
                {/* Phone */}
                <a href="tel:3477380038" className="flex items-center gap-3.5 group p-2 -mx-2 rounded-2xl hover:bg-neutral-100/60 transition-colors">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#FF4E4E] flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC2B2B] transition-colors shadow-sm shadow-red-500/20">
                    <Phone className="w-[20px] h-[20px] text-white" />
                  </div>
                  <div className="font-semibold text-neutral-800 text-[15px]">(347) 738-0038</div>
                </a>
                
                {/* Website */}
                <a href="https://www.synthpify.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group p-2 -mx-2 rounded-2xl hover:bg-neutral-100/60 transition-colors">
                  <div className="w-[42px] h-[42px] rounded-full bg-[#FF4E4E] flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC2B2B] transition-colors shadow-sm shadow-red-500/20">
                    <Globe className="w-[20px] h-[20px] text-white" />
                  </div>
                  <div className="font-semibold text-neutral-800 text-[15px]">synthpify.ai</div>
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="px-8 shrink-0">
              <div className="h-px bg-neutral-200/80 w-full mb-6"></div>
            </div>

            {/* About & Core Capabilities */}
            <div className="px-6 pb-6 shrink-0">
              <h2 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-3">About Synthpify</h2>
              <p className="text-neutral-700 text-[14px] leading-relaxed mb-6 font-medium">
                Synthpify bridges bespoke full-stack web software with autonomous AI systems, merchant payment processing, and modern point-of-sale integrations. We engineer production SaaS platforms, deploy 24/7 human-like voice agents that never miss a call, and provide integrated Clover merchant services, custom POS registers, and self-service kiosks.
              </p>

              {/* 4 Core Pillars Grid */}
              <div className="grid grid-cols-4 gap-2 pb-6 mb-2">
                
                {/* Card 1: Custom Web & SaaS */}
                <div className="bg-white rounded-xl p-2 shadow-sm ring-1 ring-black/[0.04] flex flex-col justify-between items-center text-center h-[96px]">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-1 shrink-0">
                    <Code2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-bold text-[9px] text-neutral-800 leading-[1.15]">
                    Custom Web<br/>& SaaS
                  </span>
                </div>

                {/* Card 2: 24/7 AI Voice */}
                <div className="bg-white rounded-xl p-2 shadow-sm ring-1 ring-black/[0.04] flex flex-col justify-between items-center text-center h-[96px]">
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mb-1 shrink-0">
                    <Mic className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-bold text-[9px] text-neutral-800 leading-[1.15]">
                    24/7 Voice<br/>AI Agents
                  </span>
                </div>

                {/* Card 3: Merchant Services & POS */}
                <div className="bg-white rounded-xl p-2 shadow-sm ring-1 ring-black/[0.04] flex flex-col justify-between items-center text-center h-[96px]">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center mb-1 shrink-0">
                    <img src="/clover-logo.png" alt="Clover" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="font-bold text-[8px] text-neutral-800 leading-[1.15]">
                    Merchant Services<br/>& POS / Kiosks
                  </span>
                </div>

                {/* Card 4: Loyalty & Reviews */}
                <div className="bg-white rounded-xl p-2 shadow-sm ring-1 ring-black/[0.04] flex flex-col justify-between items-center text-center h-[96px]">
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mb-1 shrink-0">
                    <Star className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="font-bold text-[9px] text-neutral-800 leading-[1.15]">
                    Loyalty &<br/>Google Reviews
                  </span>
                </div>

              </div>

              {/* Deployed Client Projects Showcase */}
              <div className="mb-8 pt-2">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest">Deployed Systems</h3>
                  <a href="/projects" className="text-[11px] font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition">
                    <span>View All</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="space-y-2.5">
                  {/* Beanpilot */}
                  <a 
                    href="/projects" 
                    className="block p-3 rounded-2xl bg-white border border-neutral-200/70 hover:border-emerald-300 shadow-sm transition-all group hover:shadow"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[13px] text-neutral-900 group-hover:text-emerald-600 transition-colors">Beanpilot</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Workforce & Payroll SaaS
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-snug">
                      QR/GPS shift timekeeping, missed punch variance detection & automated cash/check/tips payroll calculation.
                    </p>
                  </a>

                  {/* Engivo */}
                  <a 
                    href="https://engivo-1.onrender.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 rounded-2xl bg-white border border-neutral-200/70 hover:border-blue-300 shadow-sm transition-all group hover:shadow"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[13px] text-neutral-900 group-hover:text-blue-600 transition-colors">Engivo</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        Customer Loyalty & Reviews
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-snug">
                      Zero-download customer rewards ledger, in-browser camera QR scanner & 5-star Google review growth funnel.
                    </p>
                  </a>

                  {/* Propshinsa */}
                  <a 
                    href="https://propshinsa.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 rounded-2xl bg-white border border-neutral-200/70 hover:border-amber-300 shadow-sm transition-all group hover:shadow"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[13px] text-neutral-900 group-hover:text-amber-600 transition-colors">Propshinsa.com</span>
                        <ExternalLink className="w-3 h-3 text-neutral-400" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        Real Estate FinTech
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-snug">
                      Intelligent property deal underwriting, cap-rate & cash-on-cash financial modeling, and PDF pitch summaries.
                    </p>
                  </a>
                </div>

                <div className="mt-3 text-center">
                  <a 
                    href="/projects" 
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-bold transition shadow-sm"
                  >
                    <span>Inspect Full Case Studies & Screenshots</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Industries Served Accordion */}
              <h3 className="text-[12px] font-bold text-neutral-400 uppercase tracking-widest mb-3">Industries Served</h3>
              <Accordion type="single" collapsible className="w-full space-y-2.5">
                {industries.map((ind, i) => (
                  <AccordionItem value={`item-${i}`} key={i} className="border-none bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/[0.04] transition-all hover:shadow-md">
                    <AccordionTrigger className="hover:no-underline text-[14px] font-bold text-neutral-800 py-3.5 px-4">
                      <div className="flex items-center gap-3 text-left">
                        <div className="p-2 rounded-full bg-red-50 shrink-0">
                          {ind.icon}
                        </div>
                        <span>{ind.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-600 text-[13px] leading-relaxed pb-4 pt-1 px-4 font-medium">
                      {ind.desc}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </div>

          {/* Floating Bottom Action Bar */}
          <div className="absolute bottom-5 left-5 right-5 z-30 pointer-events-none">
            <div className="bg-[#111111] rounded-[20px] p-2 flex items-center gap-2 shadow-2xl ring-1 ring-white/10 pointer-events-auto">
              <Button 
                variant="ghost" 
                className="text-neutral-400 hover:text-white hover:bg-white/10 rounded-xl px-4 font-semibold text-[14px]"
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
                    className="text-white hover:bg-white/10 bg-white/5 rounded-xl font-semibold text-[14px] hidden sm:flex"
                  >
                    Share
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" sideOffset={12} className="w-48 bg-[#1A1A1A] text-white border-white/10 rounded-xl p-2 shadow-2xl">
                  <DropdownMenuItem onClick={handleCopyLink} className="focus:bg-white/10 rounded-lg cursor-pointer font-medium py-2 text-xs">
                    <Copy className="w-4 h-4 mr-2" />
                    {copied ? "Copied!" : "Copy Link"}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleEmailShare} className="focus:bg-white/10 rounded-lg cursor-pointer font-medium py-2 text-xs">
                    <Mail className="w-4 h-4 mr-2" />
                    Share via Email
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                className="bg-white text-black hover:bg-neutral-200 rounded-xl font-bold text-[14px] px-5" 
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
