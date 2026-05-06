# ApexDv NFT Marketplace Solutions 🚀

ApexDv is a modern, production-ready NFT marketplace and blockchain solutions platform built with Next.js. This project demonstrates a modular, scalable architecture with reusable React components, robust API integrations, and a pixel-perfect, responsive UI.

## 📊 Company Stats

- **1300+** Projects Completed
- **10505+** Happy Clients
- **17+** Awards Won
- **3** Global Offices (UK, USA, Bangladesh)

## ✨ Features

- 🖼️ **NFT Marketplace Templates:** Ready-to-launch, customizable NFT marketplace solutions for art, gaming, metaverse, sports, and more.
- 🛠️ **Modular Components:** 20+ reusable React components for rapid development and easy maintenance.
- 📱 **Responsive Design:** Fully responsive UI using Tailwind CSS, Bootstrap, and custom styles for seamless experience across devices.
- 🔗 **API Integrations:** Connects with external APIs and services for enhanced functionality.
- 💬 **Contact & Consultation:** Integrated forms for project inquiries and free consultations.
- ❓ **FAQ & Knowledge Base:** Comprehensive FAQ section to address client queries.
- 🌍 **Portfolio Showcase:** Interactive portfolio with detailed case studies and technology stacks.
- 🛡️ **Security:** Features like NDA, transparent pricing, and source code delivery for client trust.
- 🎨 **Interactive UI:** Hover effects, tabbed interfaces, carousels, and accordion sections.
- 📈 **Analytics Integration:** Google Tag Manager, Google Analytics, and Microsoft Clarity.

## 🏆 Project Achievements

- 🏗️ **Modular Architecture:** Implemented a component-based architecture with 20+ reusable UI components for maximum code reusability and maintainability.
- ⚡ **Performance Optimized:** Leveraged Next.js SSR/SSG for fast page loads, SEO optimization, and improved Core Web Vitals.
- 🎨 **Pixel-Perfect Design:** Crafted responsive layouts with Tailwind CSS and Material-UI ensuring consistency across all devices and screen sizes.
- 📂 **Scalable Structure:** Organized codebase with clear separation of concerns (components, pages, hooks, utils, API routes).
- 🔌 **API-First Approach:** Built extensible API routes for contact forms, messaging, and third-party integrations.
- 🖼️ **Multi-Portfolio System:** Created dynamic portfolio pages showcasing diverse blockchain projects (CoinZoom, Luna Market, Enjin, ParaSwap, etc.).
- 🚀 **Production-Ready:** Configured for seamless deployment on Vercel with optimized build settings and environment management.

## 🛠️ Technologies Used

### Core Framework

- **Next.js 12.2.3** - React framework for production with SSR/SSG
- **React 18.2.0** - Component-based UI library

### Styling & UI

- **Tailwind CSS 3.1.7** - Utility-first CSS framework
- **Material-UI (MUI) 5.9.1** - React component library
- **React Bootstrap 2.5.0** - Bootstrap components for React
- **CSS Modules** - Scoped component styling

### Carousels & Sliders

- **Swiper 8.3.2** - Modern touch slider
- **React Slick 0.29.0** - Carousel component

### API & Data

- **Axios 0.27.2** - HTTP client (Base URL: https://api.apexdv.com)

### Analytics & Tracking

- **Google Tag Manager** - Tag management system
- **Google Analytics (G-CSW4PR3BDJ)** - Web analytics
- **Microsoft Clarity** - User behavior analytics

### Development Tools

- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing

## 📂 Folder Structure

```
ZApexDV/
├── pages/                  # Next.js pages (routing)
│   ├── _app.js            # App wrapper with global providers
│   ├── _document.js       # Custom document with analytics
│   ├── index.js           # Home page
│   ├── about-us.js        # About page
│   ├── services.js        # Services page
│   ├── portfolio.js       # Portfolio overview
│   ├── contact.js         # Contact page
│   ├── blog.js            # Blog listing
│   ├── thank-you.js       # Form success page
│   └── portfolio-*.js     # Individual portfolio pages
│
├── components/            # Reusable React components
│   ├── shared/           # Shared components
│   │   ├── Navbar/       # Navigation with mobile drawer
│   │   ├── Footer/       # Footer component
│   │   └── Quote/        # Quote modal form
│   ├── Home/             # Home page sections
│   │   ├── HeroSec/      # Hero section
│   │   ├── ProjectView/  # Stats display
│   │   ├── WhoWeAre/     # Services overview
│   │   ├── Technologies/ # Tech stack showcase
│   │   ├── WhyChooseUs/  # Company strengths
│   │   ├── RecentWorks/  # Portfolio carousel
│   │   ├── ClientReviews/# Testimonials slider
│   │   └── Foot/         # Pre-footer section
│   ├── Services/         # Service page components (20+ sections)
│   ├── Portfolio/        # Portfolio page sections
│   ├── About/            # About page components
│   ├── ContactUs/        # Contact form & offices
│   ├── Blog/             # Blog components
│   ├── Card/             # Reusable card components
│   └── PortfolioDetails/ # Individual portfolio details
│
├── public/               # Static assets
│   └── images/          # Organized by page/section
│
├── styles/              # Styling files
│   ├── globals.css      # Global styles & Tailwind imports
│   └── *.module.css     # Component-scoped styles
│
├── api/                 # API utility functions
│   ├── hello.js        # Example API route
│   └── message.js      # Contact form handler
│
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── config files        # Next.js, Tailwind, PostCSS configs
```

## 📄 Pages Overview

### Main Pages

- **Home (`/`)** - Hero, services, technologies, portfolio, testimonials
- **Services (`/services`)** - Comprehensive NFT development services (20+ sections)
- **Portfolio (`/portfolio`)** - Blockchain solutions showcase
- **About Us (`/about-us`)** - Company history (2016-2022), team, awards
- **Contact (`/contact`)** - Multi-location contact information and form
- **Blog (`/blog`)** - Blog listing and articles

### Portfolio Detail Pages

- `/portfolio-aota` - Aliens on the Ave NFT collection
- `/portfolio-coinzoom` - Cryptocurrency exchange platform
- `/portfolio-luna` - Luna Market NFT marketplace
- `/portfolio-enjin` - Enjin blockchain gaming platform
- `/portfolio-homebase` - Fractional real estate NFTs
- `/portfolio-horizen` - Horizen blockchain solutions
- `/portfolio-impostors` - Impostors NFT game
- `/portfolio-cryptomium` - Cryptomium platform
- `/portfolio-paraswap` - ParaSwap DeFi aggregator
- `/portfolio-paritex` - Paritex exchange
- `/portfolio-galaxy` - Project Galaxy
- `/portfolio-coinzoom-blocknative` - Blocknative integration

## 🎨 Key Components

### Shared Components

- **Navbar** - Responsive navigation with mobile drawer, active route highlighting
- **Footer** - Simple copyright footer
- **Quote** - Modal popup for free consultation booking

### Home Components

- **HeroSec** - Main hero with CTA buttons and trusted brands
- **ProjectView** - Stats counter (Projects, Clients, Awards)
- **WhoWeAre** - Service cards with hover effects
- **Technologies** - Tabbed tech stack showcase
- **WhyChooseUs** - Company strengths with visual cards
- **RecentWorks** - Interactive portfolio preview with tabs
- **ClientReviews** - Testimonial slider with 5-star ratings
- **FeaturedOn** - Media mentions and publications

### Service Components (20+ Sections)

- ServiceBanner, NFT Development Service
- NFT Solutions, Platforms, Technology Stack
- Benefits, Industry Applications, Process
- Hiring Guide, Networks, Coding Standards
- FAQ Accordion sections

### Portfolio Components

- Hero, Experience, Expertise, Technologies
- Recent Works with image hover previews
- Detailed project pages with reviews and results

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd ZApexDV

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### API Configuration

The application connects to the ApexDv API:

- Base URL: `https://api.apexdv.com`
- Configured in `pages/_app.js`

### Analytics

Analytics tracking codes are configured in `pages/_document.js`:

- Google Tag Manager ID: `GTM-MV347R8`
- Google Analytics ID: `G-CSW4PR3BDJ`
- Microsoft Clarity ID: `cfrdibon20`

### Styling

- **Brand Color:** `#1CAF83` (Mountain Meadow Green)
- **Fonts:**
  - Rubik (body text)
  - Teko (headings)
  - Kdam Thmor Pro, Montserrat

## 📞 Contact Information

### Global Offices

**UK Office**

- 71-75 Shelton Street, Covent Garden
- London, United Kingdom, WC2H 9JQ
- Phone: +44 7361 608597

**USA Office**

- 27 Colonial Village Shelton
- Connecticut, 06484
- Phone: +1 203-892-6285

**Bangladesh Office**

- 2 Lalbag Road, Suite 6

**Email:** info@apexdv.com

### Social Media

- [Facebook](https://www.facebook.com/apexdvltd)
- [Twitter](https://twitter.com/apexdv_nft)
- [LinkedIn](https://www.linkedin.com/company/apexdv/)
- [Instagram](https://www.instagram.com/apexdv.nft/)

## 🎯 Services Offered

### NFT Development

- NFT Marketplace Development
- NFT Minting Platform Development
- NFT Staking Platform Development
- NFT Auction Portal Development
- NFT Loan Platform Development
- NFT Games Development
- NFT Art Gallery Development
- NFT Wallet App Development

### Blockchain Solutions

- Smart Contract Development
- Core Blockchain Development
- Enterprise Blockchain Consulting
- Cross-chain NFT Platform Development
- Metaverse Development
- DeFi Applications
- Cloud Storage on Blockchain

### Web & App Development

- Web Design and Development
- iOS & Android Development
- Flutter Cross-platform Development
- React Web Applications
- Python Development

### Exchange & Wallet

- Exchange Wallet Development
- Multi-chain Wallet Solutions
- Secure Transaction Systems

## 📈 Project Highlights

- **Comprehensive Service Portfolio:** Over 20 specialized NFT and blockchain services
- **Global Client Base:** Serving clients across USA, UK, Europe, and Asia
- **Proven Track Record:** 1300+ successful projects delivered
- **Expert Team:** Multidisciplinary team specializing in blockchain, design, and development
- **Company Evolution:** 6+ years of growth (2016-2022) from web development to NFT solutions
- **Industry Recognition:** 17+ awards in blockchain and software development

## 🔐 Security & Trust

- NDA signing for all projects
- Transparent pricing models
- Source code delivery
- Secure API integrations
- Best coding standards and practices

## 📱 Featured Projects

Notable clients and projects:

- **CoinZoom** - Cryptocurrency exchange bridging traditional and digital finance
- **Luna Market** - NFT marketplace transforming digital ownership
- **Enjin** - Blockchain gaming ecosystem
- **Blocknative** - Transaction orchestration platform
- **Homebase** - Fractional real estate NFT platform
- **AOTA (Aliens on the Ave)** - 7146 unique NFT collection on Ethereum
- **Impostors** - AAA social gaming metaverse
- **ParaSwap** - DeFi aggregator platform

## 📄 License

© 2022 ApexDV. All rights reserved.

## 🤝 Contributing

This is a production project for ApexDv. For inquiries about collaboration or services, please contact through official channels.

---

**Built with ❤️ by the ApexDv Team**
