# PawGuard: Pet Protection ♡

> PawGuard is a modern pet insurance platform tailored for the Peruvian market, built with React 18, Vite, and TypeScript. The application provides a seamless digital experience for pet owners through an intuitive multi-step onboarding system, real-time profile management, and interactive veterinary service mapping. Designed with a mobile-first approach and powered by Supabase.

## Project Links

- **Live Demo:** https://pawguard-pet-insurance.vercel.app/

## Reviewer Access

> **Note:** For quick testing purposes, users can use their **DNI number** as the password after completing the registration and checkout flow.

## Tech Stack

| Category             | Technology                    |
| -------------------- | ----------------------------- |
| **Framework**        | React 18 + Vite               |
| **Language**         | TypeScript                    |
| **Backend / Auth**   | Supabase (PostgreSQL)         |
| **Global State**     | Zustand                       |
| **Styling**          | TailwindCSS                   |
| **Icons**            | Phosphor Icons                |
| **Maps**             | React Leaflet (OpenStreetMap) |

## Prerequisites

- **Node.js** 18+
- **npm** 9+
- **Supabase Account** (for environment variables)

## Quick Start

1. **Clone the project and configure environment variables**

   Create a `.env` file in the project root with your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your_url
   VITE_SUPABASE_ANON_KEY=your_key
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

## Architecture

The project follows a **Feature-Based Architecture**, organizing business logic into independent modules to ensure scalability, maintainability, and clean separation of concerns.

```bash
src/
├── app/        # Main application pages and entry views
├── assets/     # Static assets, images, and branding
├── common/     # Shared UI components, hooks, layouts, stores, and utilities
├── features/   # Domain modules (auth, checkout, profile, clinics)
└── router/     # Routing configuration (React Router DOM)
```

## Extended Project Structure

```bash
src/
├── app/
├── assets/
├── common/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── providers/
│   ├── services/
│   ├── store/
│   ├── types/
│   └── utils/
├── features/
│   ├── auth/
│   ├── checkout/
│   ├── clinics/
│   ├── home/
│   └── profile/
├── router/
├── styles/
├── types/
├── App.tsx
└── main.tsx
```

## Key Features

- **Smart Onboarding System:** Multi-step registration flow (Owner → Pet → Plan → Payment) with proactive validation and persistent global state management using Zustand, ensuring progress is preserved even after page reloads.

- **Dynamic User Dashboard:** Centralized dashboard that synchronizes owner information, pet profiles, and active insurance plans directly from the Supabase database in real time.

- **Security-First Architecture:** Protected routes, authentication-based access control, Supabase RLS (Row Level Security) policies, and automatic session handling to guarantee user data privacy.

- **Hybrid Veterinary Service Map:** Interactive clinic locator powered by React Leaflet and OpenStreetMap, supporting a hybrid service model with affiliated veterinary clinics and external reimbursement management via email.

- **Responsive Experience:** Fully responsive mobile-first interface with a clean and modern visual identity, soft curves, and custom UI components optimized for readability and accessibility.

- **Self-Service Security Module:** Dedicated account security section allowing users to update credentials with integrated Supabase authentication validation.

- **Localized Experience for Peru:** The platform is entirely in Spanish and adapted for Peruvian users, including district-based location handling and pricing displayed in **Peruvian Soles (S/.)**.

## Commit Convention (Conventional Commits)

To maintain a clean and professional Git history, the following commit prefixes are used:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` UI or formatting changes without logic modifications
- `refactor:` Code improvements without adding features or fixing bugs

## Engineering Standards

- **Feature-Based Architecture:** Code is structured by business domains (Auth, Checkout, Profile, Clinics), improving scalability and maintainability.

- **Clean Code & SRP:** Strong application of the Single Responsibility Principle across hooks, services, and reusable components.

- **TypeScript Ready:** Static typing ensures data consistency and safer development workflows across the application.

- **Reusable UI System:** Shared UI components and layouts reduce duplication and improve consistency throughout the platform.

- **Conventional Commits:** Git history follows industry-standard commit conventions for better collaboration and traceability.

## Resources

- [React 18 Docs](https://react.dev) — Core library for building the user interface.
- [Vite Guide](https://vitejs.dev) — Build tool and development server.
- [Supabase Docs](https://supabase.com) — Backend as a Service for authentication and database management.
- [Zustand Docs](https://pmnd.rs) — Lightweight global state management.
- [TailwindCSS](https://tailwindcss.com) — Utility-first CSS framework.
- [Phosphor Icons](https://phosphoricons.com) — Consistent and minimal icon library.
- [React Leaflet](https://react-leaflet.js.org) — Interactive OpenStreetMap integration for React.
- [React Router](https://reactrouter.com) — Navigation and protected route handling.

---

*Built with ♡ by [Elynzx](https://github.com/elynzx)*
