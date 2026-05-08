# Professional Portfolio | Rebira Oli Negassa

A high-performance, architecturally robust personal portfolio designed to reflect my engineering capabilities as a **Software Engineer** and **AI/ML Developer**. Built on modern web technologies, the portfolio features a custom dual-accent design system, physics-based animations, and a dedicated Intelligence Layer showcasing applied machine learning projects.

**Live Site:** [rebira-portfolio.vercel.app](https://rebira-portfolio.vercel.app)

---

## 🚀 Key Features

- **Architectural Redesign:** Upgraded to Next.js 16 (App Router) and React 19, heavily optimized for performance with Turbopack and zero client-side hydration errors.
- **Deep Space Design System:** A meticulously crafted dark mode interface utilizing a Deep Navy (`#080b12`) background with Cyan (`#00c2ff`) and Violet (`#8b5cf6`) glowing accents.
- **Advanced Typography:** A three-font system leveraging `next/font/google`:
  - **Syne:** For high-impact, bold headings.
  - **DM Sans:** For clean, readable body prose.
  - **JetBrains Mono:** For code blocks, technical labels, and stat figures.
- **Physics-Based Animations:** Powered by `framer-motion`, featuring:
  - An interactive **Orbital System** in the Hero section with rotating rings, pulsing cores, and glowing particles.
  - A custom, lag-free **dual-part interactive cursor** built with DOM refs to bypass React state bottlenecks.
  - Staggered entrance animations, hover states, and dynamic `useInView` scroll reveals.
- **Dedicated AI/ML Section:** A specific "Intelligence Layer" highlighting predictive models (e.g., FX Predictor), complete with categorized machine learning toolkits.

---

## 🛠️ Tech Stack

### Frameworks & Libraries
- **React 19**
- **Next.js 16.1**
- **Framer Motion** (v12)
- **React Icons**

### Styling & UI
- **Tailwind CSS v4**
- Vanilla CSS Variables (`globals.css` driving the design tokens)
- CSS `backdrop-filter` for glassmorphism

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rebiraolin/rebira-portfolio.git
   cd rebira-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📂 Repository Structure

```text
├── app/
│   ├── globals.css      # Core design tokens, theme variables, and custom cursor logic
│   ├── layout.tsx       # Root layout, font definitions, and site metadata
│   └── page.tsx         # Main portfolio assembly page
├── components/
│   ├── CursorEffect.tsx # Custom interactive mouse tracker
│   ├── Navbar.tsx       # Floating header with IntersectionObserver scroll tracking
│   ├── Hero.tsx         # Interactive orbital animation & phrase rotator
│   ├── About.tsx        # Statistical counters and bio
│   ├── Projects.tsx     # Full-stack engineering showcases
│   ├── AIML.tsx         # Dedicated machine learning project section
│   ├── Skills.tsx       # Categorized tech stack grid
│   ├── Experience.tsx   # Professional timeline
│   ├── Education.tsx    # Academic background
│   ├── Contact.tsx      # Dependency-free mailto: form logic
│   └── Footer.tsx       # Clean exit navigation
└── public/
    └── resume.pdf       # Downloadable CV
```

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---
*Engineered by Rebira Oli Negassa in Addis Ababa, Ethiopia.*
