# Component Reference Guide

Complete documentation for all reusable pixel animation components in the portfolio.

---

## 🎯 Animation Components

### PixelText

**Letter-by-letter pixel reveal animation**

Text appears as pixel blocks with staggered timing, then resolves to crisp modern text.

```jsx
import PixelText from './components/PixelText';

<PixelText delay={0.5} stagger={0.04} className="text-4xl">
  Hello World
</PixelText>
```

**Props:**
- `children` (string) — Text to animate
- `delay` (number) — Initial delay before animation starts (default: 0)
- `stagger` (number) — Delay between each letter (default: 0.04)
- `className` (string) — Additional CSS classes
- `once` (boolean) — Animate only once (default: true)

**Use Cases:**
- Hero section headings
- Section titles
- Important call-to-action text

---

### PixelBorder

**Animated SVG border that draws on mount**

Border draws pixel-by-pixel, corners first, then edges. Inspired by SNES RPG menus.

```jsx
import PixelBorder from './components/PixelBorder';

<PixelBorder delay={0.3} color="var(--accent-cyan)">
  <div className="p-8">
    Your content here
  </div>
</PixelBorder>
```

**Props:**
- `children` (ReactNode) — Content to wrap
- `className` (string) — Additional CSS classes
- `delay` (number) — Animation start delay (default: 0)
- `color` (string) — Border color (default: 'var(--accent-cyan)')

**Use Cases:**
- Card containers
- Featured content boxes
- Section wrappers

---

### PixelAssemble

**Components assemble from scattered pixels**

Elements animate from random scattered positions into place. Inspired by Dead Cells UI transitions.

```jsx
import PixelAssemble from './components/PixelAssemble';

<PixelAssemble delay={0.2} stagger={0.03}>
  <div className="card">
    Content that assembles from pixels
  </div>
</PixelAssemble>
```

**Props:**
- `children` (ReactNode) — Element to animate
- `className` (string) — Additional CSS classes
- `delay` (number) — Animation start delay (default: 0)
- `stagger` (number) — Per-element stagger (default: 0.03)

**Use Cases:**
- Skill tags
- Grid items
- List elements

---

### PixelGlitch

**Micro horizontal jitter + RGB offset on hover**

Very short glitch effect (120-180ms) triggered on hover. Inspired by Itch.io game cards.

```jsx
import PixelGlitch from './components/PixelGlitch';

<PixelGlitch className="cursor-pointer">
  <div className="project-card">
    Hover me for glitch effect
  </div>
</PixelGlitch>
```

**Props:**
- `children` (ReactNode) — Element to apply glitch effect
- `className` (string) — Additional CSS classes

**Use Cases:**
- Project cards
- Interactive buttons
- Hoverable elements

---

### PixelLoader

**8x8 sprite-based loader with strict FPS feel**

Pure frame-by-frame animation at 8-12 FPS, no easing.

```jsx
import PixelLoader from './components/PixelLoader';

<PixelLoader size={16} color="var(--accent-cyan)" />
```

**Props:**
- `size` (number) — Loader size in pixels (default: 16)
- `color` (string) — Loader color (default: 'var(--accent-cyan)')

**Use Cases:**
- Loading states
- Processing indicators
- Decorative animated elements

---

### PixelDegrade

**Scroll-triggered pixel degradation effect**

Content briefly pixelates on scroll entry, then sharpens into modern clarity. Feels like a signal locking in.

```jsx
import PixelDegrade from './components/PixelDegrade';

<PixelDegrade delay={0.3}>
  <section>
    Content that pixelates then clarifies
  </section>
</PixelDegrade>
```

**Props:**
- `children` (ReactNode) — Content to animate
- `className` (string) — Additional CSS classes
- `delay` (number) — Animation start delay (default: 0)

**Use Cases:**
- Section entrances
- Content reveals
- Scroll-triggered animations

---

### PixelCursor

**Custom 16x16 pixel cursor that follows mouse**

Replaces default cursor with pixel-perfect square cursor. Snaps to 4px grid for retro feel.

```jsx
import PixelCursor from './components/PixelCursor';

// In App.jsx
<PixelCursor />
```

**Props:**
- None (self-contained component)

**Features:**
- Grid-snapping (4px increments)
- Automatically detects interactive elements
- Changes size/color on hover
- Smooth spring animation with pixel feel

**Use Cases:**
- Global cursor replacement
- Portfolio/creative sites
- Retro-themed interfaces

---

### ThemeToggle

**Dark/Light mode switcher with pixel transition**

Toggles between dark and light themes with persistent localStorage.

```jsx
import ThemeToggle from './components/ThemeToggle';

// In App.jsx (fixed position)
<ThemeToggle />
```

**Props:**
- None (self-contained component)

**Features:**
- Persistent theme via localStorage
- Smooth transitions
- Pixel border hover effects
- Sun/Moon emoji indicators

**Use Cases:**
- Global theme switching
- User preference control

---

## 🎨 Usage Tips

### Combining Animations

You can nest components for complex effects:

```jsx
<PixelDegrade delay={0.2}>
  <PixelBorder delay={0.4}>
    <PixelGlitch>
      <div className="card">
        <PixelText delay={0.6}>
          Multiple Effects
        </PixelText>
      </div>
    </PixelGlitch>
  </PixelBorder>
</PixelDegrade>
```

### Performance Best Practices

1. **Use `viewport={{ once: true }}`** — Animations trigger only once when scrolled into view
2. **Stagger delays strategically** — Don't animate everything at once
3. **Limit concurrent animations** — Max 3-4 animated elements visible at once
4. **Prefer CSS over JS** — Use CSS keyframes for simple animations

### Timing Guidelines

- **Pixel Text Reveal:** 30-60ms per character
- **Pixel Glitch:** 120-180ms total duration
- **Border Draw:** 0.8-1.2s for full draw
- **Scroll Triggers:** 0.5-0.8s for degradation effects

### Color Coordination

Use CSS variables for consistent theming:

```jsx
// Cyan accent
color="var(--accent-cyan)"

// Pink accent
color="var(--accent-pink)"

// Amber accent
color="var(--accent-amber)"
```

---

## 📝 Animation Principles

### Frame-Based Motion (Pixel Elements)

- No smooth easing
- Use `steps()` or discrete keyframes
- Strict FPS timing (8-12 FPS)
- Grid-snapping movements

### Modern Motion (UI Elements)

- Smooth easing curves
- Spring animations via Framer Motion
- Natural acceleration/deceleration
- Fluid transitions

### When to Use Each Style

**Pixel Animations:**
- Text reveals
- Loaders/spinners
- Decorative accents
- Hover effects
- Retro callbacks

**Modern Animations:**
- Card movements
- Smooth scrolling
- Page transitions
- Button interactions
- Form feedback

---

## 🔧 Customization Examples

### Custom Pixel Text Color

```jsx
<PixelText className="text-[var(--accent-pink)]">
  Custom Color Text
</PixelText>
```

### Faster Border Animation

```jsx
<PixelBorder delay={0} color="var(--accent-amber)">
  {/* Draws immediately with amber color */}
</PixelBorder>
```

### Multiple Glitch Elements

```jsx
{items.map((item, i) => (
  <PixelGlitch key={i}>
    <Card data={item} />
  </PixelGlitch>
))}
```

### Delayed Scroll Reveals

```jsx
{sections.map((section, i) => (
  <PixelDegrade key={i} delay={i * 0.2}>
    <Section {...section} />
  </PixelDegrade>
))}
```

---

## 🚀 Advanced Patterns

### Staggered Grid Animation

```jsx
<div className="grid grid-cols-3 gap-4">
  {items.map((item, i) => (
    <PixelAssemble key={i} delay={0.1 + i * 0.05}>
      <GridItem {...item} />
    </PixelAssemble>
  ))}
</div>
```

### Sequential Reveals

```jsx
<PixelDegrade delay={0}>
  <PixelText delay={0.3}>
    Title
  </PixelText>
  <PixelBorder delay={0.8}>
    <Content />
  </PixelBorder>
</PixelDegrade>
```

### Interactive Hover States

```jsx
<PixelGlitch>
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button />
  </motion.div>
</PixelGlitch>
```

---

**For more examples, see the section components in [src/sections/](src/sections/)**
