export const projects = [
  {
    id: 'beanpilot',
    name: 'Beanpilot',
    tagline: 'Workforce Timesheet, GPS/QR Shift Management & Payroll Engine',
    category: 'Custom Web App / SaaS',
    industry: 'Workforce & Hospitality',
    badge: 'Enterprise SaaS',
    colorTheme: {
      primary: 'from-emerald-500 to-teal-700',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      accent: 'emerald',
      iconBg: 'bg-emerald-100 text-emerald-600'
    },
    summary: 'An end-to-end workforce scheduling, timekeeping, and payroll calculation platform built to eliminate attendance fraud, simplify multi-role shifts, and automate tip and wage calculations.',
    challenge: 'Managing staff across shifts and locations was burdened by manual punch cards, buddy punching, disputed overtime hours, and stressful hours spent calculating pooled tips and multi-tier wage disbursements at the end of every pay period.',
    solution: 'We engineered a real-time web application featuring physical location QR-scan clock-ins, dynamic role & location permissions, shift grouping, live manager audits, and an automated payroll calculation engine that exports audit-ready timesheet summaries.',
    keyFeatures: [
      {
        title: 'Frictionless QR Code Clock-In / Out',
        desc: 'Staff scan on-site QR codes to verify physical presence, eliminating proxy punching.'
      },
      {
        title: 'Multi-Role & Shift Scheduling',
        desc: 'Flexible scheduling with custom roles, wage rates, and manager approval queues.'
      },
      {
        title: 'Automated Tip & Wage Engine',
        desc: 'Calculates pooled tips, hourly wage brackets, and overtime differentials automatically.'
      },
      {
        title: 'One-Click Payroll Summary Exports',
        desc: 'Generate audit-ready spreadsheets and CSVs formatted for payroll providers in seconds.'
      },
      {
        title: 'Live Shift Activity & Audits',
        desc: 'Managers view active staff, break intervals, and live hours worked from any device.'
      }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Express', 'JWT Authentication'],
    metrics: [
      { label: 'Time Saved', value: '10+ hrs/wk', desc: 'On manual payroll & shift reconciliation' },
      { label: 'Accuracy', value: '100%', desc: 'Elimination of buddy-punching & math errors' },
      { label: 'Adoption', value: 'Multi-Location', desc: 'Active deployment across service & restaurant teams' }
    ],
    screenshot: '/beanpilot.png',
    placeholderIcon: 'Users'
  },
  {
    id: 'envigo',
    name: 'Envigo',
    tagline: 'Customer Loyalty, Rewards Ledger & Google Review Growth Engine',
    category: 'Customer Engagement & RepTech',
    industry: 'Retail & Hospitality',
    badge: 'Reputation & Loyalty',
    colorTheme: {
      primary: 'from-blue-500 to-indigo-700',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      accent: 'blue',
      iconBg: 'bg-blue-100 text-blue-600'
    },
    summary: 'A modern customer engagement platform that turns one-time patrons into repeat advocates by accelerating 5-star Google reviews and rewarding repeat visits through a digital points system.',
    challenge: 'Local retail and dining businesses struggled with inconsistent Google reviews, losing prospective walk-ins to competitors. Off-the-shelf loyalty apps were overly complex, required slow app-store downloads, and charged exorbitant subscription fees.',
    solution: 'We built a zero-download web platform accessible instantly via counter QR codes. Customers check in seamlessly, earn redeemable perks, and are dynamically routed through an automated review funnel that drives authentic Google 5-star ratings.',
    keyFeatures: [
      {
        title: 'Zero-Download QR Onboarding',
        desc: 'Customers scan a counter or table QR code and join the program in under 10 seconds.'
      },
      {
        title: 'Automated 5-Star Review Funnel',
        desc: 'Directs satisfied customers to leave verified Google reviews with pre-formatted prompts.'
      },
      {
        title: 'Digital Points & Rewards Ledger',
        desc: 'Tracks customer spending, visit frequency, and unlocks tiered loyalty perks.'
      },
      {
        title: 'Merchant Analytics Dashboard',
        desc: 'Gives business owners live visibility into customer retention, top spenders, and review velocity.'
      },
      {
        title: 'SMS & WhatsApp Engagement',
        desc: 'Sends automated anniversary perks, win-back offers, and points reminders.'
      }
    ],
    techStack: ['React / TypeScript', 'Node.js', 'Prisma', 'Cloudinary', 'SMS Automation', 'Tailwind CSS'],
    metrics: [
      { label: 'Review Growth', value: '3.5x', desc: 'Increase in organic 5-star Google review volume' },
      { label: 'Retention Rate', value: '+42%', desc: 'Higher repeat customer visits within 60 days' },
      { label: 'Check-In Speed', value: '< 5 sec', desc: 'Lightning-fast onboarding without app store friction' }
    ],
    screenshot: '/envigo.png',
    placeholderIcon: 'Star'
  },
  {
    id: 'prosphinsa',
    name: 'Prosphinsa',
    liveUrl: 'https://prosphinsa.com',
    tagline: 'Intelligent Real Estate Investment & Underwriting Platform',
    category: 'FinTech & PropTech',
    industry: 'Real Estate & Private Equity',
    badge: 'Financial Modeling',
    colorTheme: {
      primary: 'from-amber-500 to-orange-700',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      accent: 'amber',
      iconBg: 'bg-amber-100 text-amber-600'
    },
    summary: 'A high-performance web platform for real estate investors, wholesalers, and syndicators to underwrite deals, analyze cash flows, calculate fix-and-flip margins, and generate institutional-grade reports.',
    challenge: 'Underwriting potential acquisitions required juggling multiple complex, fragile spreadsheets that were prone to calculation errors, impossible to use during field walkthroughs, and hard to present to lenders or equity partners.',
    solution: 'We engineered a sleek, cloud-based financial modeling platform that automatically computes cash-on-cash return, cap rates, debt amortization, rehab costs, and investment exit scenarios with real-time visual projections.',
    keyFeatures: [
      {
        title: 'Dynamic Underwriting Algorithms',
        desc: 'Instant calculation of Cap Rate, Cash-on-Cash Return, Net Operating Income, and IRR.'
      },
      {
        title: 'Fix & Flip vs. Rental (BRRRR) Models',
        desc: 'Compare exit strategies side-by-side with rehab cost estimators and holding expense modeling.'
      },
      {
        title: 'Mortgage & Amortization Engine',
        desc: 'Comprehensive debt schedule simulator accounting for interest rates, points, and balloon payments.'
      },
      {
        title: 'Executive PDF Pitch Summaries',
        desc: 'Export clean, professional investment prospectuses ready to send to private lenders and partners.'
      },
      {
        title: 'Deal Pipeline Tracking',
        desc: 'Organize opportunities through inspection, due diligence, and closing stages.'
      }
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Financial Modeling Algorithms', 'Recharts', 'Export Engine'],
    metrics: [
      { label: 'Underwrite Speed', value: '< 2 min', desc: 'From raw numbers to full investment thesis' },
      { label: 'Deal Throughput', value: '5x More Deals', desc: 'Analyzed weekly with zero spreadsheet formula bugs' },
      { label: 'Report Quality', value: 'Institutional', desc: 'Standardized underwriting acceptable to private lenders' }
    ],
    screenshot: '/prosphinsa.png',
    placeholderIcon: 'TrendingUp'
  },
  {
    id: 'voice-ordering',
    name: 'Synthpify Voice AI & POS Dispatch',
    tagline: '24/7 Human-Like Phone Reception & Automated Kitchen/POS Dispatch',
    category: 'Conversational AI & POS Sync',
    industry: 'Hospitality, Salons & Field Services',
    badge: 'Voice AI & Automation',
    colorTheme: {
      primary: 'from-purple-500 to-indigo-700',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      accent: 'purple',
      iconBg: 'bg-purple-100 text-purple-600'
    },
    summary: 'An autonomous conversational voice system that answers calls on the first ring, captures complex food orders or appointment bookings with natural tone, and syncs directly into POS and KDS workflows.',
    challenge: 'Restaurants and local service providers miss up to 67% of inbound phone calls during peak rush hours, sacrificing thousands in monthly revenue while burning out front-line staff.',
    solution: 'Integrated Vapi conversational agents with bespoke backend webhook pipelines (n8n, Clover POS, SMS dispatch) to achieve 100% call answer rates, zero missed orders, and direct ticket printing at the counter.',
    keyFeatures: [
      {
        title: 'Conversational Voice AI Agent',
        desc: 'Answers naturally in real-time, handles custom dietary requests, and matches your brand tone.'
      },
      {
        title: 'Live Menu & Knowledge Base Sync',
        desc: 'Instant updates to pricing, sold-out items, and operating hours without coding.'
      },
      {
        title: 'Clover & POS Ticket Dispatch',
        desc: 'Automatically routes orders to kitchen display systems or receipt printers without manual re-typing.'
      },
      {
        title: 'Instant SMS Order Confirmations',
        desc: 'Sends customers automatic pickup details, order summaries, and estimated prep times.'
      },
      {
        title: 'Zero-Friction Pay at Pickup',
        desc: 'Simplifies transactions and eliminates card payment liabilities over the phone.'
      }
    ],
    techStack: ['Vapi.ai', 'n8n Automation', 'Clover API', 'Node.js', 'React', 'Webhook Pipelines'],
    metrics: [
      { label: 'Answer Rate', value: '100%', desc: 'Every inbound call captured 24/7/365' },
      { label: 'Revenue Growth', value: '+35%', desc: 'Average increase from captured missed orders' },
      { label: 'Labor Relief', value: '25+ hrs/wk', desc: 'Staff freed from phone duty to focus on in-person guests' }
    ],
    screenshot: '/solution-ai-dashboard.png',
    placeholderIcon: 'PhoneCall'
  }
];
