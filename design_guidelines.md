# Design Guidelines: Shri Jagdambe Jewellers Website

## Design Approach: Luxury E-Commerce Reference-Based
Drawing inspiration from premium jewellery brands (Tiffany & Co, Cartier, Tanishq, BlueStone) with emphasis on trust, elegance, and visual richness.

## Core Design Principles
- **Opulence & Trust**: Luxurious aesthetics that convey authenticity and heritage
- **Visual Hierarchy**: Product imagery takes center stage with elegant supporting typography
- **Smooth Interactions**: Refined animations that enhance without overwhelming
- **Accessibility**: Maintain readability across golden/dark backgrounds

## Color Palette

### Primary Colors (Light Mode)
- **Pure Gold**: 45 85% 55% (primary brand, accents, buttons)
- **Champagne Gold**: 40 35% 75% (soft backgrounds, cards)
- **Rich Brown**: 25 45% 35% (premium text, headings)
- **Ivory White**: 45 15% 97% (main background)

### Accent & Supporting
- **Deep Bronze**: 30 50% 25% (footer, dark sections)
- **Rose Gold**: 15 55% 70% (highlights, special offers)
- **Charcoal**: 0 0% 20% (body text)
- **White**: 0 0% 100% (cards, overlays)

### Functional Colors
- **Success**: 142 71% 45% (available, in-stock)
- **Alert**: 38 92% 50% (price alerts, live updates)
- **Info**: 210 100% 40% (details, information)

## Typography

### Font Families
- **Display/Headings**: 'Playfair Display', serif (elegant, luxury feel)
- **Body Text**: 'Inter', sans-serif (clean readability)
- **Accent/Price**: 'Cormorant Garamond', serif (refined numbers)

### Type Scale
- Hero Headline: text-6xl font-bold (Mr. Sandeep Verma name, main tagline)
- Section Headers: text-4xl font-semibold
- Category Titles: text-2xl font-medium
- Product Names: text-xl font-medium
- Body Text: text-base
- Price Tags: text-lg font-semibold
- Small Details: text-sm

## Layout System

### Spacing Units (Tailwind)
Consistent spacing using: **4, 6, 8, 12, 16, 20, 24** units
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Card gaps: gap-6 to gap-8
- Container max-width: max-w-7xl

### Grid Systems
- Product Categories: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Product Cards (within category): grid-cols-2 md:grid-cols-3 lg:grid-cols-5
- Feature Sections: Asymmetric 2-column (60/40 split)

## Component Library

### Header Section
- Fixed top bar with golden gradient background (45 85% 55% to 40 75% 60%)
- Left: "Shri Jagdambe Jewellers" logo/text (Playfair Display, text-3xl)
- Center: Navigation (Gold Chains, Rings, Necklaces, Earrings, Gemstones, Diamonds, Contact)
- Right: Owner details - "Mr. Sandeep Verma | +91-9643265151" with phone icon
- Subtle shadow and blur backdrop

### Live Price Alert Banner
- Sticky notification below header with gentle pulse animation
- Split design: Gold Price | Silver Price with live update indicator
- Background: 38 92% 50% with 90% opacity
- Auto-refresh every 60 seconds with smooth transition
- "Live Market Rates" badge with shimmer effect

### Hero Section
- Full-width with parallax scrolling effect
- **Large Hero Image**: Elegant jewellery showcase (mixed gold/diamond pieces on luxurious display)
- Overlay: Gradient (0 0% 0% at 40% opacity to transparent)
- Center-aligned inspirational tagline: "Make Your Wish Come True in Your Dream Designed Jewellery"
- CTA buttons with golden background and white text
- Floating decorative elements (subtle gold particles animation)

### Animated Category Cards
- Hover effect: Lift with shadow (translateY -4px, shadow-2xl)
- Card structure: Image top, gradient overlay, category name, item count
- Golden border that glows on hover (border-2 with glow effect)
- Smooth scale transition (hover:scale-105)
- Rounded corners: rounded-2xl

### Product Display Cards (10+ per category)
- Image with aspect ratio 4:3, object-cover
- Overlay gradient bottom for text readability
- Product name, brief description
- Price indicator: "From ₹X/gram" in golden badge
- Star rating (5-star system) with filled golden stars
- "More Details" button with expand animation

### Expandable Details Section
- Accordion-style expansion with smooth height transition
- Detailed specifications grid (Weight, Purity, Making Charges)
- Customer feedback carousel with 3-5 testimonials per product
- Review cards with customer name, rating, photo, comment
- Image gallery (additional product angles)
- "Inquiry" button in golden with white text

### Contact Form Section
- 2-column layout (Form | Contact Info/Map)
- Fields: Name, Query/Subject dropdown, Message textarea
- Golden accent borders on focus
- Submit button with shimmer animation
- Contact info card with owner details, address, business hours
- Decorative golden pattern background

### Footer
- Rich brown background (25 45% 35%)
- 4-column layout: About, Categories, Quick Links, Social
- Newsletter signup with golden input field
- Trust badges: "Certified Jeweller", "100% Authentic", "Trusted Since [Year]"
- Copyright and policies in subtle text

## Animations & Interactions

### Micro-interactions
- Button hover: Slight scale + golden glow
- Card hover: Lift + shadow enhancement + border glow
- Price updates: Number counter with easing
- Form validation: Shake effect for errors

### Page Animations
- Scroll-triggered fade-ins with stagger (framer-motion)
- Parallax hero with subtle movement
- Category cards enter with sequential delays (100ms apart)
- Shimmer effect on golden elements
- Smooth page transitions between sections

### Special Effects
- Golden particle float animation on hero
- Price ticker with sliding numbers
- Product image zoom on hover (scale 1.1)
- Testimonial carousel auto-play with fade transitions

## Images Strategy

### Hero Section
- **Primary Hero Image**: Wide luxury jewellery display showcasing mixed collection (gold necklaces, diamond rings, gemstone pieces) on velvet/silk backdrop with studio lighting
- Dimensions: 1920x800px minimum
- Style: Professional product photography with warm golden lighting

### Product Category Images
- Each category card: Feature image of best-selling design from that category
- Consistent white/neutral background for product focus
- High resolution: 600x600px minimum

### Product Detail Images
- 4-5 angles per product (front, side, top, worn, close-up)
- Consistent lighting and background
- Lifestyle images showing jewelry worn by models

### Customer Testimonial Images
- Real customer photos (with permission) or professional avatars
- Circular crop: 80x80px
- Warm, authentic feel

### Background Patterns
- Subtle golden damask pattern for section dividers
- Ornamental borders for premium sections
- Textured backgrounds for trust sections

## Responsive Behavior
- Mobile: Single column, stacked navigation (hamburger), simplified hero
- Tablet: 2-column grids, adjusted spacing (py-12)
- Desktop: Full multi-column layouts, rich animations, parallax effects

## Trust & Credibility Elements
- Owner credentials prominently displayed in header
- "Certified & Trusted" badges near price alerts
- Customer review count and average rating per product
- "Secure Shopping" indicators in footer
- Business registration/certification badges

This design creates a luxurious, trustworthy, and engaging experience that showcases Shri Jagdambe Jewellers' premium collection while building customer confidence through elegant design and rich interactions.