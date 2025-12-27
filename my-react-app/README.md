# Ferhaten Yani — Portfolio

A distinctive personal portfolio blending **Hybrid: Pixel + Modern** aesthetics. This production-ready website showcases design work and development skills through a unique visual language where retro pixel animations meet contemporary UI design.

## 🎨 Design Philosophy

**Modern First, Pixel Second**

- High-resolution modern UI with clean typography
- Pixel art used as motion language and visual accent
- Frame-based, step-based animations (no smooth easing for pixel motion)
- Inspired by indie games (Dead Cells, Hyper Light Drifter) and retro UI patterns

## ✨ Features

### Pixel Animation Language

- **Pixel Text Reveal** — Letter-by-letter pixel block reveal with staggered timing
- **Pixel Assemble/Dissolve** — Components enter from scattered pixels, exit into noise
- **Pixel Hover Glitch** — Micro horizontal jitter + RGB offset (120-180ms)
- **Pixel Border Draw** — SVG borders draw pixel-by-pixel (corners first, then edges)
- **Pixel Loaders** — Sprite-based loaders with strict 8-12 FPS feel
- **Scroll-Triggered Degradation** — Content pixelates on entry, sharpens into clarity

### Sections

1. **Hero** — Animated name reveal with pixel text effects and gradient background
2. **About** — Clean modern layout with pixel borders and elegant bio
3. **Projects** — Two featured full-stack projects (User App + Admin App each)
4. **Skills** — Pixel-assembled skill tags organized by category
5. **Contact** — Email form + social links (GitHub, LinkedIn, Upwork, Email)

### Theme System

- **Dark Mode** (default) — Deep midnight blues, electric cyan, neon pink
- **Light Mode** — Clean whites with adjusted accent colors
- Seamless theme switching with persistent localStorage

### Custom Features

- **Pixel Cursor** — 16x16 custom cursor with grid-snapping
- **Scanline Effect** — Subtle CRT-style scanlines
- **Grain Texture** — SVG noise overlay for atmosphere
- **Custom Scrollbar** — Branded with accent colors

## 🛠 Tech Stack

- **React** — Component-based UI
- **Vite** — Lightning-fast dev server and build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Advanced animation library
- **React Icons** — Icon library for social links
- **Google Fonts** — Outfit, Space Grotesk, JetBrains Mono

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Project Structure

```
my-react-app/
├── src/
│   ├── components/          # Reusable pixel animation components
│   │   ├── PixelText.jsx
│   │   ├── PixelBorder.jsx
│   │   ├── PixelAssemble.jsx
│   │   ├── PixelGlitch.jsx
│   │   ├── PixelLoader.jsx
│   │   ├── PixelDegrade.jsx
│   │   ├── PixelCursor.jsx
│   │   └── ThemeToggle.jsx
│   ├── sections/            # Main portfolio sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles + animations
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Project dependencies
```

## 🎨 Design System

### Color Palette

**Dark Mode:**
- Primary BG: `#0a0e17`
- Secondary BG: `#12182b`
- Accent Cyan: `#00f0ff`
- Accent Pink: `#ff006e`
- Accent Amber: `#ffba08`

**Light Mode:**
- Primary BG: `#f5f7fa`
- Secondary BG: `#ffffff`
- Adjusted accent colors for optimal contrast

### Typography

- **Headings:** Space Grotesk (700)
- **Body:** Outfit (300-800)
- **Monospace/Pixel:** JetBrains Mono (400-700)

### Animation Principles

1. **Frame-based motion** for pixel elements
2. **Smooth easing** for modern UI components
3. **Subtle and purposeful** — animations serve UX, not distraction
4. **Performance-first** — CSS over canvas, controlled triggers

## 🔧 Customization

### Update Personal Information

**Hero Section** ([src/sections/Hero.jsx](src/sections/Hero.jsx)):
- Update name, role, and tagline

**About Section** ([src/sections/About.jsx](src/sections/About.jsx)):
- Replace bio paragraphs with your story

**Projects Section** ([src/sections/Projects.jsx](src/sections/Projects.jsx)):
- Replace placeholder projects with your actual work
- Update links for demos, GitHub repos, and Figma designs

**Skills Section** ([src/sections/Skills.jsx](src/sections/Skills.jsx)):
- Update skill categories and technologies

**Contact Section** ([src/sections/Contact.jsx](src/sections/Contact.jsx)):
- Add your social media links
- Configure EmailJS for form submissions

### EmailJS Integration

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
4. Update [src/sections/Contact.jsx](src/sections/Contact.jsx:47) with your credentials

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy dist/ folder via Netlify dashboard or CLI
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 📝 Performance

- **Bundle Size:** ~348 KB (gzipped: ~110 KB)
- **CSS Size:** ~26 KB (gzipped: ~6 KB)
- **Lazy Loading:** Scroll-triggered animations via `whileInView`
- **Optimized Fonts:** Preconnect to Google Fonts CDN
- **No Heavy Dependencies:** Pure CSS + Framer Motion, no canvas overhead

## 🎓 Learning Resources

This project demonstrates:

- Advanced Framer Motion patterns
- CSS custom properties for theming
- Component composition in React
- Hybrid design aesthetics
- Performance-optimized animations

## 📄 License

This portfolio is a personal project. Feel free to use it as inspiration, but please don't copy it directly. Create your own unique version!

## 🙌 Credits

**Design & Development:** Ferhaten Yani

**Inspiration:**
- Dead Cells (UI transitions)
- Hyper Light Drifter (pixel borders)
- Itch.io (glitch effects)
- SNES RPG menus (border animations)

---

**Built with precision and passion** ✨

For questions or collaboration: [Add your contact info]
