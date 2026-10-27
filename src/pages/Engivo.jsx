// src/pages/Engivo.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Smartphone, Star, Zap, Users, QrCode, Bell, ArrowRight, ExternalLink,
  CheckCircle2, AlertTriangle, Store, Clock, Sparkles, Share2,
  Database, Split, HelpCircle, Layers, Utensils, Award, ShieldAlert,
  Flame, TrendingUp, Printer, Wifi, Gamepad2, Instagram, ShoppingBag,
  CreditCard, ShieldCheck, RefreshCw, ChevronRight, Lock, Eye
} from 'lucide-react';

export default function Engivo({ onScheduleClick }) {
  const [activeGalleryTab, setActiveGalleryTab] = useState('customer-app');
  const [activeTier, setActiveTier] = useState('gold');

  useEffect(() => {
    document.title = "Engivo | Restaurant Operating, Online Ordering & Gamified Loyalty Platform | Synthpify";
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      id: 'customer-app',
      name: 'Customer Web App',
      badge: 'Zero-Download Mobile PWA',
      image: '/engivo-customer-app.png',
      headline: 'Instant Countertop QR Access, Online Ordering & Rewards',
      description: 'Diners scan a table or counter QR code to instantly launch your custom-branded restaurant app in mobile Safari or Chrome without visiting the App Store. Supports "Add to Home Screen" as a high-performance Progressive Web App.',
      highlights: [
        'Instant QR access with personalized greeting ("Welcome back, John!")',
        'Live interactive menu with dietary tags (Halal, Vegan, Gluten-Free) & modifier add-ons',
        'Integrated Stripe payments (Apple Pay, Google Pay, Credit Cards) with real-time order status updates',
        'In-app Guest WiFi Quick-Connect drawer for seamless in-store dining experiences'
      ]
    },
    {
      id: 'scanner',
      name: 'Staff Scanner App',
      badge: 'Zero Hardware Required',
      image: '/engivo-admin-scanner.png',
      headline: 'Camera QR Scanner Running Directly in Mobile Browsers',
      description: 'Turn any staff phone, iPad, or register tablet into an ultra-fast customer loyalty scanner. Cashiers scan guest QR cards with the device camera to verify memberships, redeem rewards, and adjust points on the fly.',
      highlights: [
        'In-browser camera scanner eliminates expensive barcode scanning hardware',
        'High-speed viewfinder with animated laser target detection for peak-hour lines',
        'Instant member lookup with 1-click reward voucher redemption',
        'Protected by staff-level role permissions to prevent unauthorized overrides'
      ]
    },
    {
      id: 'promotions',
      name: 'Push Broadcasts',
      badge: 'Traffic On Demand',
      image: '/engivo-admin-promotions.png',
      headline: 'Direct-to-Device Web Push Broadcast Engine',
      description: 'Drive customer traffic on demand. Store owners can broadcast promotional drops, flash specials, and VIP bonuses directly to customer phone lock-screens with real-time delivery telemetry. Zero carrier SMS fees.',
      highlights: [
        'Send time-sensitive flash offers directly to diners’ phones to boost slow shifts',
        'Zero per-message SMS carrier fees by using native Web Push API standards',
        'Audience telemetry monitoring total enrolled customer devices',
        'Historical broadcast tracker with delivery timestamps and open auditing'
      ]
    },
    {
      id: 'members',
      name: 'Member Points Ledger',
      badge: 'Customer Intelligence',
      image: '/engivo-admin-members.png',
      headline: 'Real-Time Points Ledger & VIP Customer Activity Feed',
      description: 'Complete visibility into who your diners are, how frequently they visit, and their historical reward spend. Easily search members by name or email and trigger automated win-back promotions for dormant diners.',
      highlights: [
        'Live transaction ledger detailing points earned, bonuses awarded, and rewards redeemed',
        'Fast search & filter tags: All Members, Has Points, and Enrolled Today',
        'Flags lapsed diners for targeted automated win-back re-engagement prompts',
        'Built-in GDPR/CCPA data export, profile management, and privacy compliance tools'
      ]
    },
    {
      id: 'corporate',
      name: 'Corporate Hub',
      badge: 'Multi-Location Governance',
      image: '/engivo-admin-corporate.png',
      headline: 'Multi-Branch Analytics & Cross-Location Loyalty Governance',
      description: 'Central command for restaurant groups and franchise operators. Enforce brand-wide rules or set location-specific overrides for operating hours, delivery radius, tax rates, and points issuance economics.',
      highlights: [
        'Manage multiple store branches with independent hours, delivery zones, and tax rates',
        'Consolidated member growth telemetry and earned vs. bonus points economics',
        'Unified guest experience allowing cross-store points earning and reward redemptions',
        'Multi-store employee assignments with granular role-based access control'
      ]
    },
    {
      id: 'menus',
      name: 'Digital Menu & 86ing',
      badge: 'Real-Time Catalog Sync',
      image: '/engivo-admin-menus.png',
      headline: 'Dynamic Menu Management & Instant Item Availability Controls',
      description: 'Keep your digital catalog in sync across customer devices with multi-section menus, modifier groups, and instant 1-click availability toggles (86ing) that broadcast via Server-Sent Events (<50ms sync).',
      highlights: [
        'Unlimited categories, menu items, modifier groups, and spice level customizers',
        'Instant 1-click 86ing immediately greys out sold-out items on active diner phones',
        'Cloudinary CDN photo uploads with automatic compression and mobile optimization',
        'Location-specific pricing and category availability overrides'
      ]
    },
    {
      id: 'theme',
      name: 'Theme & Branding',
      badge: 'White-Label Customization',
      image: '/engivo-admin-theme.png',
      headline: 'White-Label Visual Identity & Real-Time Cloudinary Asset Sync',
      description: 'Customize the look and feel of your customer-facing mobile app in real time by uploading custom venue hero banners, primary color palettes, and store logos without writing code or redeploying software.',
      highlights: [
        'Direct Cloudinary CDN upload pipeline for high-res hero banners and store logos',
        'Instant real-time sync with customer web app without rebuilding or redeploying',
        'Automatic image optimization, compression, and responsive CDN formatting',
        'Location-specific white-label branding controls for multi-concept restaurant groups'
      ]
    },
    {
      id: 'roles',
      name: 'Roles & Security',
      badge: '22-Point RBAC Security',
      image: '/engivo-admin-roles.png',
      headline: 'Role-Based Access Governance & Staff Permission Isolation',
      description: 'Granular role-based security protecting sensitive business operations. Ensure cashiers only access the camera scanner, kitchen staff only see order tickets, and corporate managers control menus and finances.',
      highlights: [
        'Pre-configured system tiers: Corporate Admin, Store Manager, Cashier, Kitchen Staff',
        '22 granular permission checkboxes separating billing and menus from checkout scanning',
        'Multi-store staff assignments preventing cross-location data leakage',
        'Zero-trust session governance with cryptographically signed authentication'
      ]
    }
  ];

  const currentGalleryItem = galleryItems.find(item => item.id === activeGalleryTab) || galleryItems[0];

  const vipTiers = [
    { id: 'bronze', name: 'Bronze', points: '0 – 249 pts', perks: 'Base 1x points per $1, birthday dessert voucher' },
    { id: 'silver', name: 'Silver', points: '250 – 499 pts', perks: '1.25x points multiplier, free beverage with any entree' },
    { id: 'gold', name: 'Gold', points: '500 – 999 pts', perks: '1.5x points multiplier, priority kitchen prep, exclusive monthly tasting invites' },
    { id: 'platinum', name: 'Platinum', points: '1,000 – 2,499 pts', perks: '2x points multiplier, free appetizer every visit, VIP table reservation access' },
    { id: 'diamond', name: 'Diamond', points: '2,500+ pts', perks: '3x points multiplier, dedicated private dining concierge, annual chef tasting dinner' }
  ];

  return (
    <div className="flex-grow bg-slate-50 text-slate-900 font-sans">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-6 backdrop-blur-md">
              <Sparkles size={14} className="text-blue-400 animate-pulse" />
              <span>Engivo • Multi-Location Restaurant Operating & Gamified Loyalty Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6">
              Online Ordering, Kitchen Ops & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">Gamified Loyalty</span> in One Unified Ecosystem.
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Break free from third-party commission traps and fragmented POS data. Engivo combines customer-facing mobile ordering, gamified loyalty rewards, automated thermal kitchen printing, and multi-location corporate management into a real-time platform with sub-50ms sync.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onScheduleClick}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 text-base"
              >
                <span>Schedule an Engivo Demo</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://engivo-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 text-base"
              >
                <span>Demo Site</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-6 border-t border-slate-800/80">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-1">&lt; 50ms</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">SSE Live Sync</div>
              <div className="text-[11px] text-slate-500 mt-1">Real-time menu 86ing & status streams</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-teal-400 mb-1">0%</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Order Commissions</div>
              <div className="text-[11px] text-slate-500 mt-1">Direct Stripe checkout & 100% data ownership</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-1">Port 9100</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">LAN Cloud Printing</div>
              <div className="text-[11px] text-slate-500 mt-1">Automated ESC/POS kitchen thermal printing</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-1">5 Tiers</div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">VIP Gamification</div>
              <div className="text-[11px] text-slate-500 mt-1">Social quests & built-in mini-games</div>
            </div>
          </div>

          {/* Hero Showcase Card */}
          <div className="mt-14 max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/70 p-6 sm:p-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative max-w-[280px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-950">
                  <div className="bg-slate-900 text-[11px] text-slate-400 px-3 py-1.5 flex items-center justify-between border-b border-slate-800">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      engivo-1.onrender.com
                    </span>
                    <span>Demo Site</span>
                  </div>
                  <img
                    src="/engivo-customer-app.png"
                    alt="Engivo Customer Mobile PWA"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">
                  <Award size={14} /> Complete Operating System
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  The Starbucks-Grade Operating System for Independent Restaurants & Multi-Store Groups
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Engivo eliminates the chaos of disjointed systems. Your diners enjoy frictionless mobile ordering, customized modifiers, instant Guest WiFi connection, and gamified loyalty milestones. Your kitchen runs on live kanban status boards with automated thermal ticket printing. And corporate oversees multiple branches from a single unified hub.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Instant QR access & zero app store downloads</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Engivo Print Bridge (automated ESC/POS LAN printing)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Social quests: Google reviews, Instagram story bounties</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Server-Sent Events: &lt;50ms real-time menu & status sync</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 🛑 The Pain Points Section */}
      <section className="py-24 px-6 bg-slate-900 text-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold mb-4 uppercase tracking-wider">
              <ShieldAlert size={14} /> The Restaurant Industry Reality
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              🛑 The Pain Points: What Restaurant Owners are Struggling With
            </h2>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              Why relying on third-party delivery marketplace algorithms and passive POS checkout counters quietly erodes your profit margins and leaves repeat dining to chance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pain Point 1 */}
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-red-500/20 shadow-lg relative group hover:border-red-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  The Third-Party Trap <span className="text-red-400 font-semibold block text-sm mt-0.5">(Loss of Ownership)</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Visibility is dominated by platforms like Uber Eats, Grubhub, and DoorDash. They bring in orders, but they hijack the customer relationship, charge 15% to 30% commissions, and keep all customer contact data locked away in their walled gardens.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-red-400 font-semibold flex items-center gap-1.5">
                <AlertTriangle size={14} /> You pay for orders, but never own the customer.
              </div>
            </div>

            {/* Pain Point 2 */}
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-red-500/20 shadow-lg relative group hover:border-red-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Siloed POS Data <span className="text-red-400 font-semibold block text-sm mt-0.5">(Trapped Behind the Register)</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Even with built-in POS rewards, customer information gets trapped in the system. Occasional generic text blasts or emails aren't enough to build true brand engagement, meaningful customer habituation, or repeat dining routines.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-red-400 font-semibold flex items-center gap-1.5">
                <AlertTriangle size={14} /> Low engagement with zero interactive mobile experience.
              </div>
            </div>

            {/* Pain Point 3 */}
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-red-500/20 shadow-lg relative group hover:border-red-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
                  <HelpCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Leaving Repeat Business to Chance <span className="text-red-400 font-semibold block text-sm mt-0.5">(The "Hope" Strategy)</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Owners provide great food and hospitable service, but once a customer walks out the door, there is no proactive, guaranteed way to get them back. Hoping they remember to return next week is not a predictable growth strategy.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-red-400 font-semibold flex items-center gap-1.5">
                <AlertTriangle size={14} /> Zero automated triggers to bring diners back.
              </div>
            </div>

            {/* Pain Point 4 */}
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-red-500/20 shadow-lg relative group hover:border-red-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Vulnerability During Slow Periods <span className="text-red-400 font-semibold block text-sm mt-0.5">(Quiet Shift Lulls)</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  When the restaurant is quiet on rainy afternoons or mid-week evenings, owners lack a direct, immediate channel to reach out to local customers, announce flash specials, and drive instant counter and table foot traffic.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-red-400 font-semibold flex items-center gap-1.5">
                <AlertTriangle size={14} /> Empty tables with no way to trigger on-demand visits.
              </div>
            </div>

            {/* Pain Point 5 */}
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-red-500/20 shadow-lg relative group hover:border-red-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
                  <Share2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Untapped Word-of-Mouth <span className="text-red-400 font-semibold block text-sm mt-0.5">(Silent Happy Customers)</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Customers might love the food, but there is no automated system to incentivize them to refer friends, post on social media, or leave public 5-star Google reviews. Unhappy diners complain online, while satisfied diners stay quiet.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-red-400 font-semibold flex items-center gap-1.5">
                <AlertTriangle size={14} /> Losing local Google Maps rank to lower-quality competitors.
              </div>
            </div>

            {/* Pain Point 6 */}
            <div className="p-8 rounded-3xl bg-slate-800/80 border border-red-500/20 shadow-lg relative group hover:border-red-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
                  <Split size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Fragmented Multi-Location Management <span className="text-red-400 font-semibold block text-sm mt-0.5">(Inconsistent Experience)</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Trying to run a consistent loyalty and ordering program across an entire restaurant group often results in a disconnected experience. Different stores run disjointed promotions, points don't transfer, and corporate lacks birds-eye data.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-red-400 font-semibold flex items-center gap-1.5">
                <AlertTriangle size={14} /> Fragmented customer records and fractured branding.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 💡 The Solution Section */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-4 uppercase tracking-wider">
              <Sparkles size={14} className="text-emerald-600" /> The Modern Restaurant Playbook
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              💡 The Solution: How Your Custom-Branded App Helps
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Equip your restaurant with the exact mobile engagement and customer retention mechanics pioneered by Starbucks, Sweetgreen, and Chipotle — custom-tailored to your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution Card 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Take Back Control of the Customer
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  By launching a custom-branded app (like Starbucks), restaurants bypass third parties and POS limitations, building a direct, owned connection with their diners.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium pt-3 border-t border-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600 shrink-0" /> 100% owned customer data and order histories</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600 shrink-0" /> Zero 15–30% third-party marketplace commissions</li>
                </ul>
              </div>
            </div>

            {/* Solution Card 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <Flame size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Turn One-Time Visitors into Regulars
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Built-in rewards and sign-up incentives actively build customer loyalty and give diners a compelling reason to choose you over the competition.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium pt-3 border-t border-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Instant welcome points bonus on first QR scan</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Visual milestone progress bar encouraging repeat meals</li>
                </ul>
              </div>
            </div>

            {/* Solution Card 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                  <Bell size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Drive Traffic on Demand
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Owners can instantly send targeted offers and special deals directly to customers' phones to boost sales during notoriously slow periods.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium pt-3 border-t border-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-600 shrink-0" /> Direct lock-screen push notifications with $0 SMS fees</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-purple-600 shrink-0" /> Launch 60-second flash deals to fill quiet shifts</li>
                </ul>
              </div>
            </div>

            {/* Solution Card 4 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Unlock Customer Insights
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  The app provides clear data on who the repeat customers are and flags lapsed customers so you can send them win-back campaigns before they churn.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium pt-3 border-t border-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-600 shrink-0" /> Live member points ledger tracking visit frequencies</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-indigo-600 shrink-0" /> Automatic alerts for dormant guests with targeted perks</li>
                </ul>
              </div>
            </div>

            {/* Solution Card 5 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Amplify Marketing & Reputation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  The app actively encourages and rewards behaviors that grow the business, such as Instagram shares, friend referrals, and positive Google reviews.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium pt-3 border-t border-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-600 shrink-0" /> Automated Google review acceleration funnel</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-600 shrink-0" /> Instagram story bounty & friend referral bonuses</li>
                </ul>
              </div>
            </div>

            {/* Solution Card 6 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6">
                  <Store size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Unified Brand Experience
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  It seamlessly manages multiple locations, giving the entire restaurant group a professional, cohesive loyalty experience under one roof.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 font-medium pt-3 border-t border-slate-200">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-600 shrink-0" /> Cross-store points earning and reward redemption</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-600 shrink-0" /> Centralized corporate analytics & location overrides</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 5 Core Platform Pillars (Comprehensive Architecture) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4 uppercase tracking-wider">
              Complete Operating Platform
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Everything Engivo Powers
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Explore the 5 integrated modules running across diners’ phones, kitchen lines, and corporate headquarters.
            </p>
          </div>

          <div className="space-y-16">
            {/* Pillar 1: Customer Web App & Digital Experience */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Smartphone size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Module 01</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">Customer Web App & Digital Experience (Mobile PWA)</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <QrCode size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Instant QR Access & PWA</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Customers scan a table/counter QR code to access the digital store without downloading an app from the App Store; supports "Add to Home Screen" as a Progressive Web App.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <Utensils size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Live Interactive Menu</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Real-time digital menu with categories, dietary tags (Halal, Vegan, Gluten-Free), item customization (modifiers, add-ons, spice levels), and "Today's Specials".
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                    <ShoppingBag size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Seamless Online Ordering (Pickup & Delivery)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Integrated Stripe payment processing (Credit Cards, Apple Pay, Google Pay). Real-time order tracking with status updates (Accepted, In Kitchen, Ready, Out for Delivery).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    <Store size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Multi-Store Selector</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Multi-store selector with intelligent store-switching restrictions per location to prevent order dispatch to the wrong branch.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                    <Wifi size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">In-App Guest WiFi & Quick Connect</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Quick-connect WiFi drawer for in-store dining allowing diners to connect in 1 tap without typing complex router passwords.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Personalized Greeting & Status</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dynamic welcome headers remembering diner identity, active points balance, and favorite recurring orders across repeat visits.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Gamified Loyalty & Rewards Hub */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <Star size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Module 02</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">Gamified Loyalty & Rewards Hub</h3>
                </div>
              </div>

              {/* VIP Tier Progression Interactive Showcase */}
              <div className="mb-8 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">VIP Club & Tier Progression</span>
                    <h4 className="text-xl font-bold">5-Tier Membership Engine & Milestone Progress Bars</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {vipTiers.map(tier => (
                      <button
                        key={tier.id}
                        onClick={() => setActiveTier(tier.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          activeTier === tier.id
                            ? 'bg-amber-400 text-slate-950 shadow-md'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {tier.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Tier Details */}
                {(() => {
                  const currentTier = vipTiers.find(t => t.id === activeTier) || vipTiers[0];
                  return (
                    <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <div className="text-lg font-bold text-white flex items-center gap-2">
                          <Award size={18} className="text-amber-400" />
                          <span>{currentTier.name} Status</span>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-700 text-amber-300 font-semibold">{currentTier.points}</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1 font-medium">{currentTier.perks}</p>
                      </div>
                      <div className="text-xs text-slate-400">
                        Configurable in Engivo Admin • Automatic points milestone multipliers
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Gamification Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">"Unlock Your Rewards" Showcase Carousel</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Visual showcase of redeemable food, drinks, and discount perks that updates live from the admin dashboard with locked/unlocked progress states.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <TrendingUp size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Points Engine</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Configurable earn rates (e.g., points per dollar spent), instant welcome bonus on signup, and seamless checkout discount redemptions.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <QrCode size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Digital Member QR Card</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Personal customer QR card for instant counter check-in and in-store redemptions scanned directly by staff with zero hardware required.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                    <Star size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Google Review Quest</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Awards points when diners submit verified Google reviews, automatically accelerating 5-star customer feedback and local SEO rankings.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                    <Instagram size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Instagram Story & Post Bounty</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Diners submit their social media posts for staff verification in the admin queue to earn bonus points, turning diners into brand ambassadors.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                    <Share2 size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Referral Program</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Diners share a unique referral code/link to earn bonus rewards once their friend completes a qualifying first order.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    <Gamepad2 size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Flappy Bird Mini-Game</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Built-in interactive mini-game where customers can play to earn bonus loyalty points while their food is being prepared.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                    <Award size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Custom Perks & Milestones</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dynamic tier badges with exclusive perks (priority kitchen prep, tasting invites, concierge access) unlocked automatically as points accrue.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Kitchen Operations & Cloud Printing */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Printer size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Module 03</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">Kitchen Operations & Engivo Print Bridge</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <Layers size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Live Order Management Board</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Real-time kitchen kanban and list views with acoustic chime notifications, live elapsed prep timers, and 1-tap status advancement (Accepted → Kitchen → Ready).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                    <Printer size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Engivo Print Bridge (Auto Thermal)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lightweight background daemon running on Mac, Windows, or Raspberry Pi. Automatically dispatches ESC/POS print jobs directly to kitchen thermal printers (Epson TM-T88, Star TSP143) over raw LAN TCP (Port 9100).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                    <QrCode size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Staff Scanner Mobile App</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Front-of-house staff scan diners' digital QR member cards using any mobile phone or iPad camera to instantly redeem reward coupons and credit order points.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4: Admin & Multi-Location Management Dashboard */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Store size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Module 04</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">Admin & Multi-Location Corporate Dashboard</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Multi-Location Hierarchy</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Configure Brand-Wide rules or location-specific overrides for store operating hours, delivery radius, localized tax rates, and store-switching toggles.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Full Menu & Catalog Studio</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unlimited categories, items, modifier groups, and auto-compressed Cloudinary CDN photo uploads with instant 1-click 86ing availability toggles.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Online Ordering Governance</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Independently toggle pickup vs delivery per location, configure dynamic prep times, customize checkout order notes, and trigger emergency store closures.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Push Broadcast Campaigns</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Broadcast promotional announcements, flash discounts, and event notifications straight to customer lock-screens with real-time delivery telemetry.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Instagram Submission Verification</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Visual moderation queue for staff to review, approve, or reject customer Instagram story tags with image previews before awarding bonus loyalty points.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 text-base">Granular Roles & Privacy</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    22-point RBAC permissions (Corporate Admin, Store Manager, Cashier, Kitchen Staff), multi-store assignments, and built-in GDPR/CCPA data export tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 5: Real-Time Architecture (<50ms Sync) */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
                  <Zap size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Module 05</span>
                  <h3 className="text-2xl font-extrabold text-white">Real-Time Architecture (&lt;50ms Server-Sent Events Sync)</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                  <h4 className="font-bold text-white mb-2 text-base">Zero-Latency SSE Streams</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Changes made in Engivo Admin (86’d items, menu updates, price adjustments, reward showcase changes) push instantly to all active diner devices without pull-to-refresh.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                  <h4 className="font-bold text-white mb-2 text-base">Live Order Pipeline</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    When a diner places an order via Apple Pay or Credit Card, tickets appear instantly on the kitchen display board and trigger local thermal ticket printing within milliseconds.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                  <h4 className="font-bold text-white mb-2 text-base">Reliable Fallback Mechanisms</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Automatic stream reconnection with exponential backoff ensures diners and kitchen staff never miss status transitions even on fluctuating restaurant cellular connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Visual Product Gallery / Interactive Showcase */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 uppercase tracking-wider">
              <QrCode size={14} /> Interactive Product Gallery
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Explore the System Across Devices
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Click through the modules below to inspect actual production screens across customer mobile PWAs, staff scanners, and corporate portals.
            </p>

            {/* Gallery Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {galleryItems.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGalleryTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeGalleryTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Gallery Viewer */}
          <div className="bg-slate-800/90 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              <div className="lg:col-span-5 space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">
                  {currentGalleryItem.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {currentGalleryItem.headline}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentGalleryItem.description}
                </p>

                <div className="space-y-3 pt-2">
                  {currentGalleryItem.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={onScheduleClick}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                  >
                    Request Demo for Your Restaurant
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 flex justify-center">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-950">
                  <img
                    src={currentGalleryItem.image}
                    alt={currentGalleryItem.headline}
                    className="w-full h-auto object-contain max-h-[520px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Head-to-Head Comparison Matrix */}
      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4 uppercase tracking-wider">
              Comparison Matrix
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              How Engivo Compares
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              See how our all-in-one restaurant platform stacks up against third-party delivery marketplaces and basic POS punch cards.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-xs uppercase font-bold text-slate-500 tracking-wider">
                  <th className="py-5 px-6">Capability & Feature</th>
                  <th className="py-5 px-6 text-slate-400">3rd-Party Marketplaces</th>
                  <th className="py-5 px-6 text-slate-400">Basic POS Punchcards</th>
                  <th className="py-5 px-6 text-blue-600 font-extrabold bg-blue-50/50">Engivo Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Customer Data Ownership</td>
                  <td className="py-4 px-6 text-red-500 font-medium">None (Data withheld)</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">Partial (Siloed in POS)</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/30">100% Owned by You</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Commission Fees on Orders</td>
                  <td className="py-4 px-6 text-red-500 font-medium">15% – 30% Per Order</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">Included / Flat Monthly</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/30">0% Commission</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">App Store Download Friction</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">Heavy Native App</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">No App (Physical Card)</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/30">&lt; 5s Instant QR PWA</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Kitchen Cloud Thermal Printing</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">Proprietary Tablet Only</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">Wired Register Only</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/30">Auto ESC/POS LAN (Port 9100)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Direct Lock-Screen Push Alerts</td>
                  <td className="py-4 px-6 text-red-500 font-medium">Promotes Competitors</td>
                  <td className="py-4 px-6 text-red-500 font-medium">Expensive Carrier SMS</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/30">Instant Web Push ($0 SMS)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Google Review Acceleration</td>
                  <td className="py-4 px-6 text-red-500 font-medium">No (Internal ratings only)</td>
                  <td className="py-4 px-6 text-red-500 font-medium">None</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/30">Direct 5-Star Quest Funnel</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Gamification & Social Quests</td>
                  <td className="py-4 px-6 text-red-500 font-medium">None</td>
                  <td className="py-4 px-6 text-red-500 font-medium">None (Points only)</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/30">Mini-Games, Instagram & Quests</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Real-Time Sync Speed</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">Periodic Polling</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">Local POS only</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 bg-blue-50/30">&lt; 50ms SSE Live Stream</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Call to Action Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
            <Flame size={14} className="text-amber-400" /> Stop Leaving Repeat Diners to Chance
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready to Take Back Control of Your Diners?
          </h2>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Let us demonstrate how Engivo can eliminate third-party commission bleed, supercharge repeat visits with gamified VIP loyalty, automate kitchen printing, and boost your restaurant’s Google Maps rank.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onScheduleClick}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer text-base"
            >
              Schedule Tech Consultation
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-md transition-all text-base"
            >
              Get Custom App Quote
            </Link>
          </div>

          <div className="pt-6 text-xs text-slate-500">
            Deployed on modern cloud infrastructure • Cloudinary media pipelines • Web Push API compliant
          </div>
        </div>
      </section>
    </div>
  );
}
