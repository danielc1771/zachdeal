# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.3 PWA fitness platform that combines e-commerce with workout tracking and meal logging. The app sells digital fitness plans and supplements through Shopify while delivering an in-app experience for workout tracking, meal logging, and progress monitoring.

Key integrations:
- **Shopify** for product catalog and supplements
- **Stripe** for subscription billing and payments
- **Supabase** for authentication, user data, and workout tracking
- **TypeScript** with strict mode enabled

## Development Commands

```bash
npm run dev      # Start development server with Turbopack on port 3000
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint (no test commands configured - project uses manual testing)
```

## Architecture

### Tech Stack
- **Frontend**: Next.js 15.3.3 with App Router, Tailwind CSS, PWA capabilities
- **Authentication**: Supabase Auth with magic links and social login
- **Database**: PostgreSQL via Supabase with Row Level Security (RLS)
- **Payments**: Stripe subscriptions with webhook handling
- **Products**: Shopify Storefront API (read-only)
- **State Management**: React Context (Auth, Cart, Workout, Session)

### App Structure
```
src/app/
├── api/stripe/          # Payment processing endpoints
├── auth/               # Authentication pages and callbacks
├── dashboard/          # User fitness dashboard
├── supplements/        # Supplement product pages
├── programs/           # Fitness program pages
├── plans/             # Subscription plans
└── onboarding/        # User setup wizard
```

### Key Contexts
- `AuthContext` - User authentication and profile management with subscription status
- `CartContext` - Shopify cart management and checkout flow
- `WorkoutContext` - User workout plans and exercise tracking
- `SessionContext` - User session state and preferences

### Database Schema (Supabase)
Core tables:
- `profiles` - User profiles with Stripe integration (`stripe_customer_id`, `stripe_status`)
- `templates` - Workout templates and programs
- `workout_instances` - Generated user workouts with completion tracking
- `set_results` - Individual exercise set performance data
- `meal_instances` - Nutrition logging with macro tracking
- `user_xp` - Gamification and progress tracking

### Component Organization
Feature-based components in `/src/components/`:
- `auth/` - Authentication forms, modals, and user profile
- `cart/` - Shopping cart drawer with Shopify integration
- `dashboard/` - Workout metrics, today's overview, and progress tracking
- `products/` - Product displays, pricing, and add-to-cart functionality
- `ui/` - Reusable components using class-variance-authority

### Styling
Tailwind CSS with custom brand colors and responsive design:
- Brand colors: `bbd-black` (#000000), `bbd-charcoal` (#1A1B18), `bbd-ivory` (#EFEAE0), `bbd-orange` (#EE7F0E), `bbd-gold` (#FFC842)
- Custom fonts: Bebas Neue (display), Inter (body)
- Additional breakpoint: `xs` at 475px
- Uses class-variance-authority for component variants

## Key Integration Points

### Shopify Integration
- GraphQL Storefront API client in `/src/lib/shopify.ts`
- Product catalog for supplements and programs
- Cart management with checkout URL generation
- Collections: supplements, programs

### Stripe Integration
- Subscription-based billing model
- Checkout sessions at `/api/stripe/create-checkout-session`
- Webhook processing at `/api/stripe/webhook`
- Customer portal for subscription management

### Supabase Integration
- Client configuration in `/src/lib/supabaseClient.ts`
- Helper functions for common database operations
- Row Level Security policies based on subscription status
- Real-time subscriptions for workout updates

## User Flow

### Purchase & Onboarding
1. Browse Shopify product catalog
2. Stripe checkout for subscription plans
3. Webhook updates user subscription status
4. 3-step onboarding wizard (goals, equipment, health sync)
5. Generated workout plan creation

### Daily Experience
1. Dashboard with workout cards and metrics
2. Workout player with timer and set tracking
3. Meal logging with macro tracking
4. Progress visualization and XP system

## Environment Variables

Required:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=
```

## TypeScript Configuration

- Strict mode enabled
- Target: ES2017 with ESNext module resolution
- Path alias: `@/*` maps to `./src/*`
- Database types generated in `/types/supabase.ts`

## PWA Configuration

- Next.js 15.3.3 with App Router
- PWA capabilities via next-pwa package
- Image optimization configured for Shopify CDN domains
- Vercel Analytics integration for performance monitoring