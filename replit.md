# Shri Jagdambe Jewellers - E-Commerce Platform

## Overview

Shri Jagdambe Jewellers is a luxury jewelry e-commerce website specializing in gold, diamond, and gemstone jewelry. The platform features an elegant product showcase with categories, detailed product views, live metal price tracking, customer reviews, and contact inquiry functionality. Built with a modern tech stack, it emphasizes visual richness, trust, and accessibility while maintaining a premium brand aesthetic inspired by high-end jewelry retailers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing

**UI Component System**
- shadcn/ui component library (New York style) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management
- Custom design system following luxury e-commerce patterns (inspired by Tiffany & Co, Cartier, Tanishq)

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management with automatic caching and refetching
- React Hook Form with Zod validation for form handling
- Custom hooks for mobile detection and toast notifications

**Design Tokens**
- Gold-themed color palette with HSL values (Pure Gold, Champagne Gold, Rose Gold, Deep Bronze)
- Typography using Playfair Display (headings), Inter (body), and Cormorant Garamond (accents)
- Consistent spacing system using Tailwind's 4-24 unit scale
- Custom animations for hover effects, floating elements, and smooth transitions

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for REST API endpoints
- Custom middleware for request logging and error handling
- Session-based architecture prepared for future authentication

**API Design**
- RESTful endpoints organized by resource:
  - `/api/categories` - Category listing and details
  - `/api/products` - Product catalog with category filtering
  - `/api/reviews` - Product review system
  - `/api/contact` - Contact inquiry submissions
  - `/api/metal-prices` - Live metal price tracking
- JSON request/response format with Zod schema validation
- Error responses with appropriate HTTP status codes

**Data Layer**
- Drizzle ORM for type-safe database queries
- In-memory storage implementation (MemStorage) for development/demo
- Schema-first approach with shared TypeScript types between frontend and backend
- Database schema supports PostgreSQL dialect (via Neon serverless)

### Data Storage Solutions

**Database Schema**
- **categories**: Product categories with image, description, and item count
- **products**: Jewelry items with pricing (per gram), weight, purity, specifications, images
- **reviews**: Customer reviews with ratings and timestamps
- **contactInquiries**: Contact form submissions with query categorization
- **metalPrices**: Live market rates for gold and silver

**Storage Pattern**
- Abstract IStorage interface allows swapping between in-memory and database implementations
- All tables use varchar primary keys (UUIDs)
- Decimal types for precise monetary calculations
- Array fields for multiple product images
- Timestamp tracking for time-sensitive data

### External Dependencies

**Third-party Libraries**
- **Neon Database (@neondatabase/serverless)**: Serverless PostgreSQL database
- **Drizzle ORM**: Type-safe ORM with PostgreSQL support
- **Radix UI**: Headless component primitives for accessibility
- **Embla Carousel**: Touch-friendly carousel for product galleries
- **date-fns**: Date formatting and manipulation
- **Lucide React**: Icon system

**Development Tools**
- **Replit Plugins**: Development banner, runtime error overlay, cartographer
- **ESBuild**: Server-side bundling for production
- **TSX**: TypeScript execution for development server

**Font Resources**
- Google Fonts: Playfair Display, Inter, Cormorant Garamond (loaded via CDN)

### Design Philosophy

The application follows a luxury e-commerce reference-based design approach prioritizing:
- **Visual Hierarchy**: Product imagery as the primary focus with elegant typography
- **Trust & Opulence**: Premium aesthetics conveying authenticity and heritage
- **Smooth Interactions**: Refined animations (hover elevate, scale effects, floating backgrounds)
- **Accessibility**: Readable contrast ratios across golden/dark backgrounds
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop