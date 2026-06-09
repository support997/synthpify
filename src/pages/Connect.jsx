import React from 'react';
import { motion } from 'framer-motion';
import { Download, Phone, Mail, Globe, Briefcase, Building2, Utensils, Wrench, Home as HomeIcon, Stethoscope, Truck, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Connect = () => {
  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Wesley Lin
ORG:Synthpify.ai
TITLE:Business Development Consultant
TEL;TYPE=CELL:347-738-0038
EMAIL:Wlin@synpthify.ai
URL:https://www.synthpify.ai
NOTE:Synthpify.ai specializes in developing advanced business automation tools and conversational AI assistants.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Wesley_Lin_Synthpify.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const industries = [
    {
      title: "Restaurants & Cafes",
      icon: <Utensils className="h-5 w-5 text-brand-500" />,
      desc: "Phone order taking agent. No more missed calls, so you can take care of the customer in front of you while having the AI handle inbound calls, loyalty program questions, and menu troubleshooting."
    },
    {
      title: "Home Services",
      icon: <Wrench className="h-5 w-5 text-brand-500" />,
      desc: "Plumbing, Electrical, Roofing: While you are out on the job, our agent can answer your calls, check your availability, book appointments, and send preliminary quotes directly to the caller."
    },
    {
      title: "Real Estate Investment & Agencies",
      icon: <Building2 className="h-5 w-5 text-brand-500" />,
      desc: "Instantly pre-qualify inbound leads, capture seller details, and answer property-specific questions 24/7, ensuring you never miss a potential fix-and-flip deal or client inquiry while analyzing other properties."
    },
    {
      title: "Property Management",
      icon: <HomeIcon className="h-5 w-5 text-brand-500" />,
      desc: "Field routine tenant FAQs and late-night maintenance requests. The AI can triage urgent issues to your on-call staff and log standard work orders without waking up your team."
    },
    {
      title: "Healthcare Clinics & Dental Offices",
      icon: <Stethoscope className="h-5 w-5 text-brand-500" />,
      desc: "Handle high volumes of routine patient calls for appointment scheduling, rescheduling, and basic intake, reducing front-desk burnout and keeping the focus on patient care."
    },
    {
      title: "Logistics & Delivery",
      icon: <Truck className="h-5 w-5 text-brand-500" />,
      desc: "Automate driver dispatch updates, provide customers with real-time tracking information over the phone, and handle route rescheduling requests without requiring a human dispatcher."
    },
    {
      title: "E-Commerce & Retail",
      icon: <ShoppingCart className="h-5 w-5 text-brand-500" />,
      desc: "Act as a front-line customer support agent to handle order status checks, process return requests, and answer common product questions, seamlessly routing complex issues to your live support team."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 flex items-center justify-center font-sans relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md relative z-10 my-auto"
      >
        <Card className="bg-slate-900/60 border-slate-800/50 backdrop-blur-2xl shadow-2xl shadow-brand-900/20 rounded-3xl overflow-hidden">
          <CardContent className="p-0">
            {/* Header section */}
            <div className="p-8 text-center border-b border-slate-800/50 bg-slate-800/20">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-24 h-24 mx-auto bg-gradient-to-tr from-brand-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-brand-500/20 mb-6"
              >
                <span className="text-3xl font-bold text-white tracking-wider">WL</span>
              </motion.div>
              <h1 className="text-3xl font-bold text-white mb-2">Wesley Lin</h1>
              <p className="text-brand-300 font-medium flex items-center justify-center gap-2 mb-6">
                <Briefcase className="w-4 h-4" />
                Business Development Consultant
              </p>
              
              <Button 
                onClick={generateVCard}
                className="w-full bg-brand-600 hover:bg-brand-500 text-white rounded-full py-6 text-lg font-semibold shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Contact
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="flex justify-center gap-6 p-6 border-b border-slate-800/50 bg-slate-900/40">
              <a href="tel:3477380038" className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors border border-slate-700">
                  <Phone className="w-5 h-5 text-slate-300 group-hover:text-brand-400" />
                </div>
                <span className="text-xs text-slate-400 font-medium">Call</span>
              </a>
              <a href="mailto:Wlin@synpthify.ai" className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors border border-slate-700">
                  <Mail className="w-5 h-5 text-slate-300 group-hover:text-brand-400" />
                </div>
                <span className="text-xs text-slate-400 font-medium">Email</span>
              </a>
              <a href="https://www.synthpify.ai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors border border-slate-700">
                  <Globe className="w-5 h-5 text-slate-300 group-hover:text-brand-400" />
                </div>
                <span className="text-xs text-slate-400 font-medium">Website</span>
              </a>
            </div>

            {/* About & Industries */}
            <div className="p-8 bg-slate-900/60">
              <h2 className="text-xl font-semibold text-white mb-4">About Synthpify.ai</h2>
              <p className="text-slate-300 leading-relaxed text-sm mb-8">
                Synthpify.ai specializes in developing advanced business automation tools and conversational AI assistants to streamline complex operational workflows. By seamlessly orchestrating intelligent voice agents and automated logic pipelines, the platform transforms how companies manage customer interactions and day-to-day tasks.
              </p>

              <h3 className="text-lg font-semibold text-white mb-4">Industries We Transform</h3>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {industries.map((ind, i) => (
                  <AccordionItem value={`item-${i}`} key={i} className="border-slate-700/50 border rounded-xl px-4 bg-slate-800/40 backdrop-blur-sm overflow-hidden">
                    <AccordionTrigger className="hover:no-underline text-sm font-semibold text-slate-200 py-4">
                      <div className="flex items-center gap-3 text-left">
                        <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/50">
                          {ind.icon}
                        </div>
                        {ind.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 text-sm leading-relaxed pb-5 pt-1 px-1">
                      {ind.desc}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

          </CardContent>
        </Card>
        
        {/* Footer info */}
        <div className="text-center mt-8 pb-8 opacity-60">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Synthpify.ai</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Connect;
