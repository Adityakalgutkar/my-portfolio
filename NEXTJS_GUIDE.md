# Next.js Portfolio Guide for Frontend Developers

A comprehensive guide to understanding and working with this Next.js 15 portfolio project. Perfect for frontend developers new to Next.js.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Stack & Technology](#stack--technology)
3. [Project Structure](#project-structure)
4. [How It Works](#how-it-works)
5. [Getting Started](#getting-started)
6. [Next.js Concepts](#nextjs-concepts)
7. [Key Features](#key-features)
8. [Common Tasks](#common-tasks)
9. [Deployment](#deployment)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

**What is this?**

This is a professional portfolio website built with **Next.js 15**, **TypeScript**, and **TailwindCSS**. It showcases:
- Your freelance web development services
- Past projects and work samples
- Professional skills and technologies
- A functional contact form for client inquiries

**Key Features:**
- ✨ Smooth animations and transitions (Framer Motion + GSAP)
- 📧 Contact form with email integration (Resend)
- 📱 Mobile-first responsive design
- 🎨 Dark theme with custom CSS variables
- ⚡ Fast performance (Next.js 15 with Turbopack)
- ♿ Accessible UI components (Headless UI)
- 🔍 SEO-optimized with metadata

---

## Stack & Technology

### Languages
- **TypeScript** (91.6%) — Type-safe JavaScript
- **CSS** (8.3%) — Styling with Tailwind + custom animations
- **JavaScript** (0.1%) — Config files

### Core Framework
- **Next.js 15** with App Router (Server Components by default)
- **React 19** — Latest React features

### Key Dependencies

| Library | Purpose |
|---------|---------|
| **Tailwind CSS v4** | Utility-first CSS framework |
| **Framer Motion** | Smooth animations and transitions |
| **GSAP** | Advanced animation library |
| **Resend** | Email service for contact form |
| **react-hot-toast** | Toast notifications |
| **Headless UI** | Unstyled accessible components |
| **Lenis** | Smooth scrolling |
| **AOS** | Animate on scroll effects |

### Dev Tools
- **TypeScript** — Type checking
- **Prettier** — Code formatting with Tailwind plugin
- **PostCSS** — CSS processing with Tailwind
- **pnpm** — Package manager (faster, more efficient)

### Fonts
- **Plus Jakarta Sans** (from Google Fonts) — Primary font
- **JetBrains Mono** (from Google Fonts) — Monospace font

---

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx                    # Root layout (global setup)
│   ├── css/
│   │   ├── style.css                 # Global styles & animations
│   │   └── chess.css                 # Chess feature styles
│   ├── api/
│   │   └── contact/
│   │       └── route.ts              # Contact form API endpoint
│   ├── (default)/                    # Route group for main pages
│   │   ├── layout.tsx                # Default layout
│   │   └── page.tsx                  # Home page
│   └── (auth)/                       # Auth routes (placeholder)
│
├── components/
│   ├── ui/                           # Reusable UI components
│   │   ├── header.tsx                # Navigation & logo
│   │   ├── footer.tsx                # Footer
│   │   ├── section-label.tsx         # Section labels ("ABOUT", "CONTACT")
│   │   ├── tag-rotator.tsx           # Rotating tech tags animation
│   │   ├── terminal-card.tsx         # Terminal-style visual
│   │   ├── project-card.tsx          # Project showcase card
│   │   ├── service-card.tsx          # Service description card
│   │   ├── faq-item.tsx              # Expandable FAQ
│   │   ├── browser-mockup.tsx        # Browser window frame
│   │   └── tech-icon.tsx             # Tech stack icons
│   │
│   ├── hero-home.tsx                 # Hero section with CTA
│   ├── about.tsx                     # About section with skills
│   ├── services.tsx                  # Services offered
│   ├── featured-projects.tsx         # Project showcase
│   ├── contact.tsx                   # Contact form
│   ├── why-work-with-me.tsx          # Value proposition
│   ├── faq.tsx                       # FAQ section
│   ├── business-categories.tsx       # Business categories
│   ├── cta.tsx                       # Call-to-action
│   ├── banner.tsx                    # Banner/announcement
│   ├── accordion.tsx                 # Reusable accordion
│   └── chess/                        # Chess game components
│
├── lib/
│   ├── data.ts                       # All portfolio content
│   └── chess-data.ts                 # Chess game data
│
├── public/                           # Static assets
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript config
├── tailwind.config.ts                # Tailwind CSS config
├── postcss.config.js                 # PostCSS config
├── next.config.js                    # Next.js config
└── README.md                         # Original template README
```

### Directory Roles

| Directory | Purpose |
|-----------|---------|
| `app/` | All pages, layouts, and API routes (file-based routing) |
| `components/` | Reusable React components |
| `lib/` | Utility functions and data constants |
| `public/` | Static files (images, fonts, downloads) |

---

## How It Works

### The Page Flow

```
User visits https://yoursite.com
           ↓
   app/layout.tsx (root)
   - Load fonts
   - Setup analytics
   - Add Toaster for notifications
           ↓
   app/(default)/layout.tsx
   - Shared layout for default routes
           ↓
   app/(default)/page.tsx
   - Imports all components
   - Renders sections in order:
     Hero → About → Services → Projects → FAQ → Contact
           ↓
   Individual Components render
   - Fetch data from lib/data.ts
   - Server Components (static) render on server
   - Client Components (interactive) run in browser
```

### Component Types

#### **Server Components** (Default)
```tsx
// components/about.tsx
import { SKILLS } from "@/lib/data";

export default function About() {
  return (
    <section id="about">
      <div>
        {SKILLS.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}
```
- Rendered on the server
- Can access databases, APIs, secret keys
- Smaller bundle size
- No JavaScript sent to browser (just HTML)
- **Cannot** use hooks like `useState`, `useEffect`

#### **Client Components** (Interactive)
```tsx
// components/contact.tsx
"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", ... });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```
- Marked with `"use client"` at the top
- Can use React hooks
- Can use browser APIs (localStorage, window, etc.)
- Runs in the browser
- Larger bundle size

### API Routes

```typescript
// app/api/contact/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, project, message } = body;
    
    // Send email via Resend
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Project Inquiry from ${name}`,
      html: `<h2>New Contact Form Submission</h2>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Project:</strong> ${project}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
```

**Key Points:**
- Routes live in `app/api/`
- File name = route URL (e.g., `contact/route.ts` → `/api/contact`)
- Functions named after HTTP methods: `GET`, `POST`, `PUT`, `DELETE`
- Runs on the server (environment variables are safe)
- Always use `NextResponse` for responses

### Data Management

All portfolio content lives in `lib/data.ts`:

```typescript
// lib/data.ts
export const SKILLS = [
  "WordPress",
  "React",
  "Next.js",
  ...
];

export const PROJECTS = [
  {
    name: "Overstitch",
    type: "Shopify Fashion Store",
    stack: ["Shopify", "Liquid", "JavaScript"],
    desc: "...",
    url: "https://overstitch.store",
    color: "#C8FF57",
  },
  ...
];

export const FAQS = [
  {
    q: "What types of websites do you build?",
    a: "Business websites, e-commerce stores, ...",
  },
  ...
];
```

**Why this approach?**
- Single source of truth for all content
- Components pull from here automatically
- Update one file, all pages reflect changes
- No database needed (perfect for static content)
- Git history tracks content changes

### Styling System

```css
/* app/css/style.css */
@import 'tailwindcss';

/* CSS Variables define the color scheme */
:root {
  --background: #0C0C0C;
  --foreground: #F0EFEA;
  --primary: #C8FF57;
  --card: #141414;
  --border: #222222;
  /* ... more variables ... */
}

/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5%); }
}

@keyframes infinite-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}
```

**How Components Use These:**

```tsx
// Using Tailwind utility classes with CSS variables
<div className="bg-background text-foreground border-border">
  Background uses --background
  Text uses --foreground
  Border uses --border
</div>

// Using custom animations
<div className="animate-float">
  This element floats up and down
</div>
```

---

## Getting Started

### 1. Prerequisites

- **Node.js 18+** ([Download](https://nodejs.org/))
- **pnpm** (faster than npm):
  ```bash
  npm install -g pnpm
  ```

### 2. Installation

```bash
# Clone or download the repo
cd my-portfolio

# Install dependencies
pnpm install

# Create .env.local file for environment variables
echo "RESEND_API_KEY=your_key_here
CONTACT_EMAIL=your_email@example.com" > .env.local
```

### 3. Set Up Environment Variables

Create `.env.local` in the project root:

```env
# Email service (get from https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx

# Where contact form submissions go
CONTACT_EMAIL=kalgutkar789@gmail.com
```

### 4. Start Development Server

```bash
pnpm run dev
```

Output:
```
  ▲ Next.js 15.1.11
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 2.8s
```

Open http://localhost:3000 in your browser.

### 5. Make Changes

Edit any file in `components/`, `app/`, or `lib/`, and the site updates automatically:

```bash
# Example: Edit the hero section
# File: components/hero-home.tsx
# Change: Update the heading text

# Save the file → Browser auto-refreshes → Changes appear instantly
```

---

## Next.js Concepts

### **1. File-Based Routing**

Next.js automatically creates routes from your file structure:

```
app/page.tsx                   → /
app/about/page.tsx             → /about
app/projects/[id]/page.tsx     → /projects/123 (dynamic)
app/api/contact/route.ts       → POST /api/contact
```

### **2. Layout Nesting**

Layouts wrap pages automatically:

```
app/layout.tsx
    ↓ (wraps all pages)
app/(default)/layout.tsx
    ↓ (wraps pages in (default))
app/(default)/page.tsx
```

Result: Page loads with nested layouts applied.

### **3. Route Groups (Parentheses)**

Folders in parentheses don't appear in the URL:

```
app/(default)/page.tsx     → /             (not /(default))
app/(auth)/login.tsx       → /login        (not /(auth)/login)
```

Use for organizing related pages without affecting URLs.

### **4. Metadata & SEO**

```typescript
// app/(default)/page.tsx
export const metadata = {
  title: "Aditya Kalgutkar — Web Developer",
  description: "Freelance web developer specializing in WordPress, Shopify, React, and Next.js.",
};

// Generates:
// <title>Aditya Kalgutkar — Web Developer</title>
// <meta name="description" content="..." />
```

### **5. Server vs Client Components**

| Aspect | Server | Client |
|--------|--------|--------|
| Use Case | Static content, SEO | Interactive features |
| Can Use Hooks | ❌ | ✅ |
| Can Access DB/APIs | ✅ | ❌ (only via endpoints) |
| Bundle Size | Small | Larger |
| Where It Runs | Server | Browser |
| Default | Yes (App Router) | Only with `"use client"` |

**Example:**
```tsx
// Server Component (displays data)
export default function Skills() {
  return <div>{SKILLS.map(s => <div key={s}>{s}</div>)}</div>;
}

// Client Component (interactivity)
"use client";
export default function Form() {
  const [name, setName] = useState("");
  return <input onChange={(e) => setName(e.target.value)} />;
}
```

### **6. API Routes**

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  // Handle request on server (secure)
  return Response.json({ success: true });
}
```

Accessible at `POST /api/contact` from client:
```typescript
const res = await fetch("/api/contact", {
  method: "POST",
  body: JSON.stringify(formData),
});
```

### **7. Dynamic Routes**

```
app/projects/[id]/page.tsx
```

Becomes: `/projects/123`, `/projects/456`, etc.

```typescript
// app/projects/[id]/page.tsx
export default function ProjectPage({ params }) {
  const { id } = params;  // id = "123"
  return <div>Project {id}</div>;
}
```

### **8. Image Optimization**

```tsx
import Image from "next/image";

<Image
  src="/images/project.jpg"
  alt="Project"
  width={800}
  height={600}
/>
```

Benefits:
- Automatic resizing
- Lazy loading
- WebP conversion
- Performance optimization

---

## Key Features

### **1. Contact Form with Email Integration**

**Files Involved:**
- `components/contact.tsx` (Client Component)
- `app/api/contact/route.ts` (API Route)

**How It Works:**

```
User fills form
    ↓
Click "SEND MESSAGE"
    ↓
contact.tsx: setLoading(true)
    ↓
fetch("/api/contact", { method: "POST", body: {...} })
    ↓
route.ts: Receives POST request
    ↓
Send email via Resend API
    ↓
Return success/error response
    ↓
contact.tsx: Show toast notification
    ↓
User sees: "Thanks for reaching out!"
```

**Setup:**
1. Get API key from [Resend.com](https://resend.com)
2. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxx
   CONTACT_EMAIL=your@email.com
   ```
3. Form automatically works!

### **2. Rotating Tech Tags**

**File:** `components/ui/tag-rotator.tsx`

```typescript
"use client";

import { useEffect, useState } from "react";
import { TECH_TAGS } from "@/lib/data";

export default function TagRotator() {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    // Cycle through tags every 2 seconds
    const t = setInterval(
      () => setActive((a) => (a + 1) % TECH_TAGS.length),
      2000,
    );
    return () => clearInterval(t);
  }, []);
  
  return (
    <div className="flex gap-2">
      {TECH_TAGS.map((tag, i) => (
        <span
          key={tag}
          className={i === active ? "border-primary text-primary" : "border-border text-gray-400"}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
```

**Why Client Component?**
- Needs `useState` to track active tag
- Needs `useEffect` to set interval
- Browser must run this JavaScript

### **3. CSS Animations**

**File:** `app/css/style.css`

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5%); }
}

@keyframes infinite-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}
```

**Usage in Components:**
```tsx
<div className="animate-float">Floats up and down</div>
<div className="animate-infinite-scroll">Scrolls infinitely</div>
```

### **4. Responsive Design**

**Mobile-First Approach:**

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>

<div className="text-sm md:text-base lg:text-lg">
  {/* Smaller text on mobile, larger on desktop */}
</div>

<div className="flex flex-col lg:flex-row">
  {/* Stack vertically on mobile, horizontally on desktop */}
</div>
```

### **5. Toast Notifications**

**File:** `components/contact.tsx`

```typescript
import toast from "react-hot-toast";

if (res.ok) {
  toast.success("Thanks for reaching out!");
} else {
  toast.error("Something went wrong. Try again.");
}
```

The `Toaster` component (in root layout) displays these notifications.

---

## Common Tasks

### **Add a New Service**

```typescript
// lib/data.ts
export const SERVICES = [
  // ... existing services ...
  {
    num: "07",
    title: "Performance Audits",
    desc: "Deep dive into your site's performance and actionable recommendations.",
  },
];

// That's it! components/services.tsx automatically renders it
```

### **Add a New Project**

```typescript
// lib/data.ts
export const PROJECTS = [
  // ... existing projects ...
  {
    name: "My New Project",
    type: "Custom Web App",
    stack: ["React", "Next.js", "TypeScript"],
    desc: "A project I built for...",
    url: "https://example.com",
    color: "#FF0000",
  },
];
```

### **Change Color Scheme**

```css
/* app/css/style.css */
:root {
  --primary: #FF0000;        /* Change this */
  --background: #000000;     /* Or this */
  --foreground: #FFFFFF;     /* Or this */
  /* ... */
}

/* All components automatically use new colors! */
```

### **Update Contact Email**

```bash
# .env.local
CONTACT_EMAIL=newemail@example.com
```

Then redeploy or restart dev server.

### **Add a New Section**

1. Create component:
   ```tsx
   // components/testimonials.tsx
   export default function Testimonials() {
     return <section>...</section>;
   }
   ```

2. Import in home page:
   ```tsx
   // app/(default)/page.tsx
   import Testimonials from "@/components/testimonials";
   
   export default function Home() {
     return (
       <>
         <Hero />
         <About />
         <Testimonials />  {/* NEW */}
         <Contact />
       </>
     );
   }
   ```

3. Save → Site updates automatically! ✨

### **Modify Animation Timing**

```css
/* app/css/style.css */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10%); }  /* Increase float distance */
}
```

Or use Framer Motion in components:
```tsx
import { motion } from "framer-motion";

<motion.div
  animate={{ y: [-10, 10] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  Floating element
</motion.div>
```

---

## Deployment

### **Option 1: Vercel (Recommended)**

Vercel is made by the Next.js creators and offers best integration.

```bash
# 1. Push code to GitHub
git push origin main

# 2. Go to https://vercel.com/new
# 3. Select your repo
# 4. Add environment variables:
#    RESEND_API_KEY=...
#    CONTACT_EMAIL=...
# 5. Click Deploy

# Your site is live! 🚀
```

Automatic deploys on every push to `main`.

### **Option 2: Netlify**

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Build project
pnpm run build

# 3. Deploy
netlify deploy --prod --dir=.next
```

### **Option 3: Self-Hosted**

```bash
# Build for production
pnpm run build

# Start production server
pnpm start

# Server runs on http://localhost:3000
```

Then use PM2 or similar to keep it running:
```bash
npm install -g pm2
pm2 start "pnpm start" --name "portfolio"
```

### **Environment Variables in Production**

On Vercel/Netlify, add variables in the dashboard instead of `.env.local`:

```
RESEND_API_KEY = re_xxx...
CONTACT_EMAIL = your@email.com
```

---

## Troubleshooting

### **Problem: Changes not showing up**

**Solution:**
```bash
# Restart dev server
# Press Ctrl+C
# Run again:
pnpm run dev
```

### **Problem: "Cannot find module '@/components/...'"**

**Cause:** Path alias `@/` not configured.

**Solution:** Check `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### **Problem: Contact form not sending emails**

**Checklist:**
- [ ] `RESEND_API_KEY` in `.env.local`
- [ ] `CONTACT_EMAIL` in `.env.local`
- [ ] Dev server restarted after adding env vars
- [ ] Check Resend dashboard for errors
- [ ] Check browser console for errors (F12)

### **Problem: "Unescaped entity" warning in TypeScript**

**Solution:** Use `&apos;` or `'` in JSX strings:
```tsx
<div>It&apos;s working</div>  // ✓ Correct
<div>It's working</div>      // ✗ May cause warnings
```

### **Problem: Tailwind classes not applying**

**Cause:** Tailwind doesn't recognize the utility.

**Solution:**
- Make sure class name is complete: `bg-primary` not `bg-prim`
- Can't use dynamic class names: `` className={`bg-${color}`} `` won't work
- Use object spread instead:
  ```tsx
  const styles = { "bg-primary": true, "text-white": true };
  <div className={Object.entries(styles)
    .filter(([_, v]) => v)
    .map(([k]) => k)
    .join(" ")}>
  </div>
  ```

### **Problem: Can't install dependencies**

**Solution:**
```bash
# Clear cache
rm -rf node_modules pnpm-lock.yaml

# Reinstall
pnpm install

# If still fails, try:
pnpm install --force
```

---

## Additional Resources

### Learning Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn)
- [App Router Guide](https://nextjs.org/docs/app)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Tailwind Cheat Sheet](https://tailwindcss.com/docs/installation)

### React
- [React Documentation](https://react.dev)
- [React Hooks Guide](https://react.dev/reference/react/hooks)

### Animation Libraries
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GSAP Documentation](https://gsap.com/docs/)

### Email Service
- [Resend Documentation](https://resend.com/docs)

---

## Summary

This Next.js portfolio project demonstrates:

✅ **Modern Frontend Architecture**
- Server Components for performance
- Client Components for interactivity
- Proper separation of concerns

✅ **Best Practices**
- TypeScript for type safety
- TailwindCSS for rapid UI development
- Environment variables for secrets
- API routes for backend logic

✅ **Real-World Features**
- Contact form with email
- Responsive design
- Animations and micro-interactions
- SEO-optimized metadata

✅ **Developer Experience**
- Hot module reloading (instant updates)
- File-based routing (intuitive)
- Great documentation and community

---

## Questions?

For more help:
- 📖 Check [Next.js docs](https://nextjs.org/docs)
- 🤔 Search [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
- 💬 Ask on [GitHub Discussions](https://github.com/vercel/next.js/discussions)

Happy coding! 🚀
