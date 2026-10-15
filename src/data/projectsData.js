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
    summary: 'An end-to-end workforce scheduling, timekeeping, audit, and payroll calculation platform built for hospitality and retail teams to eliminate attendance fraud, automate complex wage disbursements, and reconcile daily cash/card operations.',
    challenge: 'Multi-location hospitality teams were burdened by manual punch cards, buddy-punching, disputed overtime, unapproved clock-out variances, and hours wasted calculating pooled tips and split check/cash wage disbursements at every pay period.',
    solution: 'We engineered a comprehensive, real-time web application featuring GPS/QR location clock-ins, an automated variance-audit dashboard (missed punches & grace period approvals), weekly timesheet matrices, multi-rate wage engines (cash/check/hybrid), and granular RBAC security matrices.',
    keyFeatures: [
      {
        title: 'Operations & Variance Audit Dashboard',
        desc: 'Live shift roster monitoring, daily cash & card POS reconciliation, and automatic alerts for missed punches and grace-period clock-out variances.'
      },
      {
        title: 'Multi-Tier Wage & Split Payment Engine',
        desc: 'Configurable hourly rates with support for Cash, Check, and Hybrid (split disbursement) compensation models plus pooled tip tracking.'
      },
      {
        title: 'Weekly Shift Schedule & Hours Worked Matrix',
        desc: 'Interactive calendar grid with day-by-day employee hour aggregation, raw punch drill-downs, and roster filters.'
      },
      {
        title: 'Granular Roles & Permissions Matrix',
        desc: 'Enterprise RBAC security defining view/edit rights across Analytics, Closing Sheets, Daily Checklists, and Cash Receivables.'
      },
      {
        title: 'Frictionless QR Code Clock-In / Out',
        desc: 'Staff scan on-site QR codes to verify physical presence, eliminating proxy punching.'
      },
      {
        title: 'One-Click Payroll & CSV Exports',
        desc: 'Generate audit-ready spreadsheets and CSVs formatted for payroll providers in seconds.'
      }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Express', 'JWT Authentication', 'RBAC Security Engine'],
    metrics: [
      { label: 'Time Saved', value: '10+ hrs/wk', desc: 'On manual payroll & shift reconciliation' },
      { label: 'Variance Detection', value: '100%', desc: 'Automated flags for missed punches & late clock-outs' },
      { label: 'Disbursement Accuracy', value: 'Zero Errors', desc: 'Flawless cash, check & pooled tip calculations' }
    ],
    screenshot: '/beanpilot.png',
    placeholderIcon: 'Users',
    gallery: [
      {
        id: 'dashboard',
        tabName: 'Admin Dashboard',
        title: 'Executive Dashboard & Variance Audit Alerts',
        category: 'Live Operations & Shift Auditing',
        urlPath: 'app.beanpilot.com/admin/dashboard',
        image: '/beanpilot-dashboard.png',
        desc: 'Central command for store managers and operators. Combines real-time active rosters, daily cash & card revenue reconciliation, and instant action queues for missed punches and late clock-outs.',
        highlights: [
          'Live roster monitor tracking active on-duty personnel vs. scheduled shift times',
          'Daily cash and card POS transaction totals tracking for instant register reconciliation',
          'Action Required: Missed Punches alert queue with auto-clock out detection & manager adjustment tools',
          'Action Required: Late Clock-Outs queue flagging variances exceeding grace periods with one-click approval'
        ]
      },
      {
        id: 'employees',
        tabName: 'Employee Directory',
        title: 'Employee Directory & Multi-Rate Wage Engine',
        category: 'Roster & Compensation Architecture',
        urlPath: 'app.beanpilot.com/employees',
        image: '/beanpilot-employees.png',
        desc: 'A comprehensive staff management console supporting full-time and part-time rosters, multi-rate compensation brackets, tip hour pooling, and hybrid wage structures.',
        highlights: [
          'Dual Full-Time and Part-Time grouping with instant Active / Inactive status management',
          'Support for Check Hourly Rate, Cash Hourly Rate, and Hybrid (split disbursement) compensation models',
          'Integrated Work & Tip Hours tracking with weekly or biweekly pay frequency toggles',
          'Bulk operational tooling including Bulk Clone Hours, CSV Roster Import, and one-click employee creation'
        ]
      },
      {
        id: 'hours',
        tabName: 'Hours Worked Matrix',
        title: 'Weekly Shift Schedule & Hours Worked Matrix',
        category: 'Timesheet Grid & Shift Verification',
        urlPath: 'app.beanpilot.com/hours-worked',
        image: '/beanpilot-hours.png',
        desc: 'An interactive, calendar-style weekly timesheet matrix giving managers total visibility into shift hours across days of the week, with double-click drill-downs into raw punch timestamps.',
        highlights: [
          'Interactive Monday–Sunday timesheet with instant row-by-row total hour sums',
          'Double-click drill-down capability into individual cell shift records, timestamps, and break intervals',
          'Visual variance color badges highlighting overtime and irregular hours',
          'Interactive sidebar roster filter to isolate full-time vs. part-time team members with bulk clear controls'
        ]
      },
      {
        id: 'permissions',
        tabName: 'Permissions Matrix',
        title: 'Security Governance & Permissions Matrix',
        category: 'Security & Access Governance',
        urlPath: 'app.beanpilot.com/users-roles/permissions',
        image: '/beanpilot-permissions.png',
        desc: 'Enterprise security layer allowing business owners to create custom administrative tiers (Administrator, Partner, Shift Lead) and define precise view/edit capabilities across sensitive modules.',
        highlights: [
          'Granular module-level permission checkboxes covering Analytics, Closing Sheets, Checklists, and Receivables',
          'Separation of sensitive cash handling, closing verification, and managerial financial reports',
          'Custom role creation engine for dynamic organization scaling across multi-location partners',
          'Enforces zero-trust data access preventing unauthorized wage or closing sheet tampering'
        ]
      }
    ]
  },
  {
    id: 'engivo',
    name: 'Engivo',
    liveUrl: 'https://engivo-1.onrender.com/',
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
    summary: 'A complete customer loyalty, retention, and reputation ecosystem featuring a zero-download customer web application (for QR check-ins, reward points, and automated 5-star Google reviews) paired with a mobile-first merchant admin suite for cashier scanning, points ledger audits, push broadcasts, and real-time branding customization.',
    adminUrl: 'https://engivo-admin.onrender.com',
    challenge: 'Local retail and dining businesses struggled with inconsistent Google reviews, losing prospective walk-ins to competitors. Traditional loyalty systems required cumbersome app store downloads, expensive barcode scanner hardware at checkout, and charged prohibitive monthly subscription fees while offering zero operational control to store managers.',
    solution: 'We engineered a seamless two-sided platform: an instant customer web app (accessible via counter QR codes) that guides happy customers to leave 5-star Google reviews, plus a dedicated mobile-first merchant admin portal (engivo-admin.onrender.com) equipped with an in-browser camera scanner, live member ledger, web push broadcast engine, Cloudinary theme customizer, and digital menu management.',
    keyFeatures: [
      {
        title: 'Zero-Download Customer Loyalty PWA',
        desc: 'Patrons scan table/counter QR codes and enroll in under 5 seconds with zero app store friction.'
      },
      {
        title: 'Merchant Admin Portal (engivo-admin.onrender.com)',
        desc: 'Mobile-first management suite for store managers and cashiers to audit points, launch promos, and edit branding.'
      },
      {
        title: 'In-Browser Countertop Camera QR Scanner',
        desc: 'Cashiers scan customer loyalty QR codes directly using any phone or tablet camera with no dedicated hardware scanners needed.'
      },
      {
        title: 'Live Member Points Ledger & Search',
        desc: 'Real-time transaction feed, instant name/email search, points balance tracking, and audit histories.'
      },
      {
        title: 'Direct-to-Device Push Broadcast Engine',
        desc: 'Send instant promotional announcements, flash discounts, and VIP notifications straight to customer screens.'
      },
      {
        title: 'Cloudinary CDN Theme & Branding Editor',
        desc: 'Upload custom restaurant hero banners and logos with instant real-time sync across the customer web app.'
      },
      {
        title: 'Automated 5-Star Google Review Funnel',
        desc: 'Directs satisfied customers to leave verified Google reviews with pre-formatted prompts to drive organic walk-ins.'
      },
      {
        title: 'Digital Menu & 22-Point RBAC Security',
        desc: 'Manage section items, pricing, and live publish states with granular roles (Staff vs. Corporate Admin).'
      }
    ],
    techStack: ['React / TypeScript', 'Node.js', 'Prisma', 'Cloudinary CDN', 'Web Push API', 'QR Video Stream API', 'Tailwind CSS', 'Render Cloud'],
    metrics: [
      { label: 'Review Growth', value: '3.5x', desc: 'Increase in organic 5-star Google review volume' },
      { label: 'Check-In Speed', value: '< 5 sec', desc: 'Lightning-fast onboarding without app store friction' },
      { label: 'Hardware Cost', value: '$0 Hardware', desc: 'Camera QR scanning runs directly in mobile browsers' }
    ],
    screenshot: '/engivo.png',
    placeholderIcon: 'Star',
    gallery: [
      {
        id: 'customer-app',
        tabName: 'Customer App',
        title: 'Customer Loyalty, Rewards & Google Review Funnel',
        category: 'End-User Experience (PWA)',
        urlPath: 'engivo-1.onrender.com',
        image: '/engivo-customer-app.png',
        desc: 'Zero-download customer web application accessible via counter or table QR codes. Greets returning patrons, tracks live points progress towards rewards, provides instant digital loyalty cards, and automatically prompts happy customers to leave 5-star Google reviews.',
        highlights: [
          'Instant QR onboarding with personalized customer greeting ("Welcome back, John!")',
          'Dynamic points progress bar and reward unlock milestones (e.g. 300 / 500 pts)',
          'One-click "Show My QR Card" for cashier counter scanning',
          'Automated Google 5-star review acceleration funnel driving organic search visibility'
        ]
      },
      {
        id: 'corporate',
        tabName: 'Corporate Hub',
        title: 'Corporate Hub & Multi-Unit Analytics',
        category: 'Brand Governance & Analytics',
        urlPath: 'engivo-admin.onrender.com',
        image: '/engivo-admin-corporate.png',
        desc: 'Global multi-unit brand governance portal providing corporate management with real-time visibility across branch locations (e.g. Slimak), active loyalty members, and points issuance economics (+2,700 bonus pts / +78 earned pts).',
        highlights: [
          'Multi-store branch network tracking (active store branches)',
          'Live member enrollment totals (active vs. inactive customer tracking)',
          'Points issuance tracking across earned customer spend vs. promotional bonus awards',
          'Corporate rewards program governance and cross-location sync'
        ]
      },
      {
        id: 'members',
        tabName: 'Member Ledger',
        title: 'Members Directory & Real-Time Points Ledger',
        category: 'Customer Directory & Activity',
        urlPath: 'engivo-admin.onrender.com/members',
        image: '/engivo-admin-members.png',
        desc: 'Real-time customer directory and points ledger for store operators. Displays live daily transaction activity, instant name/email search, member filter tabs, balances (e.g. 300 pts), and audit histories.',
        highlights: [
          'Live daily transaction feed (earn transactions, bonus awards, reward redemptions)',
          'Fast search & filter tags: All members, Has Points, Enrolled today',
          'Individual customer balance ledgers with transaction history drill-down',
          'Instant member account management & fraud protection controls'
        ]
      },
      {
        id: 'scanner',
        tabName: 'QR Scanner',
        title: 'Countertop Camera QR Code Reader',
        category: 'Point-of-Sale Loyalty Checkout',
        urlPath: 'engivo-admin.onrender.com/scanner',
        image: '/engivo-admin-scanner.png',
        desc: 'Mobile-first in-browser camera scanner allowing cashiers and servers to instantly scan customer loyalty QR codes directly from a phone or tablet at the register without buying expensive hardware scanners.',
        highlights: [
          'Zero-hardware camera scanner running directly in the browser',
          'Target bracket viewfinder with animated laser scan detection',
          'Instant customer profile lookup & point crediting upon scan',
          'Works on any iOS / Android staff device at the counter'
        ]
      },
      {
        id: 'promotions',
        tabName: 'Push Broadcasts',
        title: 'Member Promotions & Real-Time Push Broadcasts',
        category: 'Marketing & Retention Automation',
        urlPath: 'engivo-admin.onrender.com/promotions',
        image: '/engivo-admin-promotions.png',
        desc: 'Direct-to-device push notification broadcast engine. Store managers can broadcast promotional drops, flash deals, and VIP incentives directly to customer phones with real-time delivery telemetry.',
        highlights: [
          'Broadcast instant web push notifications directly to customer lock-screens',
          'Live audience telemetry: Target Subscribers, Total Enrolled Network Devices',
          'Historical broadcast campaign tracker and delivery auditing',
          'Eliminates third-party SMS fees by leveraging native web push standards'
        ]
      },
      {
        id: 'menus',
        tabName: 'Menu Manager',
        title: 'Digital Menu & Catalog Manager',
        category: 'Product & Menu Operations',
        urlPath: 'engivo-admin.onrender.com/menus',
        image: '/engivo-admin-menus.png',
        desc: 'Centralized catalog and digital menu manager for restaurants and retail. Allows operators to organize multi-section menus, edit item pricing, and instantly publish or unpublish items in real time.',
        highlights: [
          'Multi-section menu hierarchy (e.g. 5 Sections, 35 Items for Slimak location)',
          'Instant One-Click Publish and Unpublish controls for live customer menus',
          'Interactive visual item and section catalog editor',
          'Direct sync with customer-facing web ordering and digital menus'
        ]
      },
      {
        id: 'theme',
        tabName: 'Theme Editor',
        title: 'Real-Time App Theme & Cloudinary Asset Editor',
        category: 'White-Label Branding & Media',
        urlPath: 'engivo-admin.onrender.com/theme',
        image: '/engivo-admin-theme.png',
        desc: 'No-code branding customization suite powered by Cloudinary. Store owners can customize the look and feel of their customer-facing app in real time by uploading custom venue banners and store logos.',
        highlights: [
          'Direct Cloudinary CDN upload pipeline for high-res hero banners and store logos',
          'Instant real-time sync with customer web app without redeploying code',
          'Automatic image optimization, compression, and responsive CDN formatting',
          'Location-specific white-label branding controls'
        ]
      },
      {
        id: 'roles',
        tabName: 'Roles & RBAC',
        title: 'Staff Roles & Granular Permissions Governance',
        category: 'Security & Access Control',
        urlPath: 'engivo-admin.onrender.com/roles',
        image: '/engivo-admin-roles.png',
        desc: 'Role-based access control engine with 22 granular permission toggles, cleanly separating frontline cashier capabilities (scanner only) from corporate administrators (analytics, menus, billing).',
        highlights: [
          'Dual-tier default system roles: Staff / Cashier (0% sensitive access) vs Corporate Admin (100%)',
          '22 granular permission toggles covering Scanner, Members, Menus, Theme, and Analytics',
          'Custom role builder for regional managers, shift leads, and franchise partners',
          'Prevents unauthorized menu pricing changes or points ledger tampering'
        ]
      }
    ]
  },
  {
    id: 'propshinsa',
    name: 'Propshinsa',
    liveUrl: 'https://propshinsa.com/',
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
    screenshot: '/propshinsa.png',
    placeholderIcon: 'TrendingUp',
    gallery: [
      {
        id: 'dashboard',
        tabName: 'Investment Dashboard',
        title: 'Portfolio Investment Dashboard & Deal Pipeline',
        category: 'Portfolio Management & KPI Intelligence',
        urlPath: 'propshinsa.com/dashboard',
        image: '/propshinsa-dashboard.png',
        desc: 'Central command for real estate investors and syndicators. Surfaces aggregate portfolio valuation, equity accrual, monthly net cash flows, target cap rate benchmarks, and active deal underwriting status across the acquisition pipeline.',
        highlights: [
          'High-level portfolio KPIs: Total Portfolio Value ($14.5M+), Total Asset Equity ($4.5M+), and Monthly Cash Flow ($17.7K+)',
          'Acquisition funnel tracker monitoring counts for New Leads (57), Analyzing (1), Offers Sent (2), and Under Contract (1)',
          'Active Property Analyses data table with inline multi-select, Strategy indicators, AI Audit tags, Cap Rates, Cash-on-Cash ROI, and Action menus',
          'Institutional Investment Summary sidebar featuring average cap rate gauges and algorithmic Risk Profile distribution (Avoid, Moderate Risk, High Risk, Worth Pursuing)'
        ]
      },
      {
        id: 'rental-analysis',
        tabName: 'Rental Strategy',
        title: 'Long-Term Rental Financial Modeling & Cash Flow Breakdown',
        category: 'Cash Flow & Debt Underwriting',
        urlPath: 'propshinsa.com/property/2171-12th-st-sw/rental',
        image: '/propshinsa-rental-analysis.png',
        desc: 'In-depth rental investment analyzer modeling gross rents, operating expenses, debt service coverage, and net cash flow with real-time sensitivity analysis and instant cap rate recalculation.',
        highlights: [
          'Dynamic rental math engine calculating Cap Rate (3.0%), All-in Cap Rate (2.8%), DSCR (0.40), and Cash-on-Cash Return ROI (-45.8%)',
          'Granular upfront cash-to-close ledger detailing down payment, rehab budget ($8,000), origination fees, closing fees, title fees, and broker commissions',
          'Monthly cash flow waterfall breaking down Gross Rent ($1,200), Vacancy Loss (-$96), Operating Expenses (-$838), and Debt Service P&I (-$663)',
          'Integrated Cap Rate Strategy Signal and local rental market comp analysis verifying fair market single-unit benchmarks against active property rates'
        ]
      },
      {
        id: 'fix-and-flip',
        tabName: 'Fix & Flip Audit',
        title: 'Fix & Flip Profitability & AI Deal Audit Engine',
        category: 'Automated Risk Assessment & Flipping',
        urlPath: 'propshinsa.com/property/2171-12th-st-sw/fix-and-flip',
        image: '/propshinsa-fix-flip-audit.png',
        desc: 'Rapid exit-strategy comparison engine contrasting rental cash flows against fix-and-flip margins, powered by an AI Deal Audit that cross-references financial viability, neighborhood safety, and macroeconomic trends.',
        highlights: [
          'Fix & Flip profitability model calculating Net Profit (-$21,267), ROI (-17.9%), Annualized ROI (-32.5%), and total Cash Needed ($119,017)',
          'Capital expenditure breakdown detailing purchase closing costs ($3,000), holding costs ($3,117), financing expense, and rehab contingencies',
          'Algorithmic AI Deal Audit decision badge (AVOID / PURSUE) synthesizing debt coverage, negative cash flows, and neighborhood risk scores',
          'Multi-factor risk evaluation tracking property safety ratings (30/100) and localized YoY rent growth trends (-4.35%)'
        ]
      },
      {
        id: 'pricing-plans',
        tabName: 'SaaS Tiers & Credits',
        title: 'Subscription Tiers & AI Underwriting Credit Matrix',
        category: 'SaaS Monetization & Credit Engine',
        urlPath: 'propshinsa.com/pricing',
        image: '/propshinsa-pricing-plans.png',
        desc: 'Tiered subscription engine supporting individual hobbyist investors through full-scale investment syndicates, equipped with real-time AI credit quotas, monthly/annual billing cycles, and feature access gates.',
        highlights: [
          'Flexible billing cycles with annual subscription discount toggle (~20% savings)',
          'Tiered packaging spanning Free ($0/mo), Starter ($8/mo), Experienced ($19/mo), and institutional Pro ($29/mo)',
          'Granular resource quotas regulating AI Underwriting Credits, active property pipeline limits (up to 300 properties), and advanced strategy tools',
          'Self-serve subscription lifecycle management with instant upgrades, prorated billing, and current credit balance monitoring'
        ]
      },
      {
        id: 'property-intake',
        tabName: 'Property Intake',
        title: 'Omni-Channel Property Intake & Data Ingestion Engine',
        category: 'Multi-Source Data Extraction',
        urlPath: 'propshinsa.com/properties/add',
        image: '/propshinsa-add-property.png',
        desc: 'A flexible, multi-modal intake system allowing investors to ingest property leads from URLs, MLS PDF brochures, parcel records, or GPS coordinates directly in the field.',
        highlights: [
          'Listing URL scraper supporting one-click extraction from Zillow, Redfin, and major broker portals',
          'Document & MLS OCR parser extracting financials, lot dimensions, and bedroom/bathroom counts from uploaded PDF flyers and images',
          'County Assessor APN (Assessor Parcel Number) lookup resolving tax records, deed history, and structural metadata',
          'Field-ready geolocation inputs supporting raw GPS coordinates, address geocoding, and mobile Device GPS intake'
        ]
      }
    ]
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
