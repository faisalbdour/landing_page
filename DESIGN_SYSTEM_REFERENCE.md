# TheTruePrompt Design System Reference

## Color Palette

### Primary Colors
```css
--darkest-green: #000000      /* Base background */
--dark-green: #0a0a0a         /* Secondary background */
--primary-green: #111111      /* Content areas */
--medium-green: #1a1a1a       /* Elevated surfaces */
```

### Accent Colors
```css
--accent-green: #52b788       /* Primary brand */
--pale-green: #6fcf97         /* Secondary brand */
--glow-green: #7ee8af         /* Highlights & emphasis */
```

### Text Colors
```css
--text-white: #ffffff         /* Headings */
--text-cream: #f5f5f0         /* Body text */
--text-light-gray: #c4c4c4    /* Secondary text */
--text-gray: #a8a8a8          /* Tertiary text */
```

### Functional Colors
```css
--border-dark: #1a1a1a        /* Borders */
--card-bg: #0f0f0f            /* Card backgrounds */
--glass-bg: rgba(15, 15, 15, 0.7)          /* Glass panels */
--glass-border: rgba(82, 183, 136, 0.15)   /* Glass borders */
```

---

## Gradient System

### Primary Gradients
```css
/* Strong emphasis */
--gradient-glow: linear-gradient(135deg, #52b788 0%, #7ee8af 50%, #6fcf97 100%);

/* Standard brand */
--gradient-primary: linear-gradient(135deg, #52b788 0%, #6fcf97 100%);

/* Subtle backgrounds */
--gradient-subtle: linear-gradient(145deg, rgba(82, 183, 136, 0.05), rgba(111, 207, 151, 0.02));
```

### Text Gradients
```css
/* Hero title */
background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #ffffff 100%);

/* Section titles */
background: linear-gradient(135deg, #ffffff 0%, #6fcf97 50%, #ffffff 100%);

/* Subtitles */
background: var(--gradient-glow);
```

---

## Typography Scale

### Desktop
```css
Hero Title:      3.5rem (56px) - Weight 800
Section Title:   3.5rem (56px) - Weight 800
Hero Subtitle:   1.65rem (26.4px) - Weight 700
Description:     1.15rem (18.4px) - Weight 400
Body:            1rem (16px) - Weight 400
Small:           0.95rem (15.2px) - Weight 500
Tiny:            0.8rem (12.8px) - Weight 700
```

### Mobile (480px)
```css
Hero Title:      2rem (32px) - Weight 800
Section Title:   2rem (32px) - Weight 800
Hero Subtitle:   1.1rem (17.6px) - Weight 700
Description:     1rem (16px) - Weight 400
```

### Letter Spacing
```css
Hero Title:      -1.5px
Section Title:   -1.5px
Hero Subtitle:   -0.3px
Buttons:         1.2px
Badges:          1.5px
```

---

## Spacing System

### Base Unit: 8px

```css
XXS: 0.5rem (8px)
XS:  1rem (16px)
S:   1.5rem (24px)
M:   2rem (32px)
L:   3rem (48px)
XL:  4rem (64px)
XXL: 6rem (96px)
```

### Component Padding
```css
Cards:           3rem (48px)
Stats:           2rem 1.5rem
Buttons:         1.25rem 3.5rem
Form Inputs:     1.1rem 1.4rem
Badge:           0.65rem 1.5rem
```

---

## Border Radius System

```css
Small:   8px   /* Nav items */
Medium:  12px  /* Inputs, small buttons */
Large:   16px  /* Stats cards */
XLarge:  20px  /* Service cards */
XXLarge: 24px  /* Video, major sections */
Pill:    50px  /* Badges */
```

---

## Shadow System

### Depth Levels

#### Level 1 - Subtle
```css
box-shadow: 0 4px 15px rgba(82, 183, 136, 0.15);
```

#### Level 2 - Card Default
```css
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
```

#### Level 3 - Elevated
```css
box-shadow:
    0 15px 40px rgba(82, 183, 136, 0.25),
    0 0 40px rgba(82, 183, 136, 0.1);
```

#### Level 4 - Hero Elements
```css
box-shadow:
    0 25px 70px rgba(82, 183, 136, 0.4),
    0 0 50px rgba(82, 183, 136, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
```

#### Level 5 - Maximum Impact
```css
box-shadow:
    0 30px 80px rgba(82, 183, 136, 0.35),
    0 0 60px rgba(82, 183, 136, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
```

### Focus Ring (Forms)
```css
box-shadow:
    inset 0 2px 6px rgba(0, 0, 0, 0.4),
    0 0 0 4px rgba(82, 183, 136, 0.15),
    0 0 30px rgba(82, 183, 136, 0.3);
```

---

## Animation Timing

### Duration
```css
Fast:     0.2s   /* Immediate feedback */
Standard: 0.3s   /* Most interactions */
Smooth:   0.4s   /* Premium feel */
Slow:     0.6s   /* Dramatic entrances */
```

### Easing Functions
```css
/* Primary (bouncy) */
cubic-bezier(0.175, 0.885, 0.32, 1.275)

/* Standard */
ease-out

/* Entrance */
ease-in-out
```

### Common Animations
```css
/* Hover lift */
transform: translateY(-8px);
transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

/* Focus lift */
transform: translateY(-1px);

/* Button press */
transform: translateY(-1px) scale(0.98);

/* 3D tilt */
transform: translateY(-12px) rotateX(2deg) rotateY(-2deg);
```

---

## Component Patterns

### Glass Card
```css
.glass-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    backdrop-filter: blur(20px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
```

### Gradient Button
```css
.gradient-button {
    background: var(--gradient-glow);
    color: var(--darkest-green);
    padding: 1.25rem 3.5rem;
    border-radius: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    box-shadow:
        0 8px 25px rgba(82, 183, 136, 0.4),
        0 0 40px rgba(82, 183, 136, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

### Gradient Text
```css
.gradient-text {
    background: var(--gradient-glow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

### Glow Border
```css
.glow-border {
    border: 2px solid var(--accent-green);
    box-shadow: 0 0 20px rgba(82, 183, 136, 0.3);
}
```

---

## Interaction States

### Buttons
```css
/* Default */
background: var(--gradient-glow);
box-shadow: 0 8px 25px rgba(82, 183, 136, 0.4);

/* Hover */
transform: translateY(-4px) scale(1.03);
box-shadow: 0 12px 35px rgba(82, 183, 136, 0.6);

/* Active */
transform: translateY(-1px) scale(0.98);

/* Disabled */
opacity: 0.5;
cursor: not-allowed;
```

### Cards
```css
/* Default */
border: 2px solid rgba(82, 183, 136, 0.2);

/* Hover */
border-color: var(--accent-green);
transform: translateY(-12px);
box-shadow: 0 25px 70px rgba(82, 183, 136, 0.4);
```

### Form Inputs
```css
/* Default */
border: 2px solid rgba(82, 183, 136, 0.2);

/* Focus */
border-color: var(--accent-green);
box-shadow:
    0 0 0 4px rgba(82, 183, 136, 0.15),
    0 0 30px rgba(82, 183, 136, 0.3);
transform: translateY(-1px);

/* Error */
border-color: #ff6b6b;
box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.15);
```

---

## Accessibility

### Contrast Ratios
```
White on Black: 21:1 ✓
Text Gray on Black: 7.5:1 ✓
Accent Green on Black: 4.8:1 ✓
Pale Green on Black: 5.5:1 ✓
```

### Focus Indicators
- 4px glow ring on all interactive elements
- Accent green color (#52b788)
- 0.15 opacity for subtle appearance
- Always visible, never removed

### Touch Targets
- Minimum 44px height for all buttons
- Adequate spacing between interactive elements
- Large padding on mobile (1.1rem minimum)

---

## Responsive Breakpoints

```css
/* Desktop First */
Desktop:  Default (1920px comfortable)
Laptop:   1440px
Tablet:   968px
Mobile:   768px
Small:    480px
Tiny:     320px
```

### Media Query Strategy
```css
@media (max-width: 968px) { /* Tablet */ }
@media (max-width: 768px) { /* Mobile */ }
@media (max-width: 480px) { /* Small */ }
```

---

## Best Practices

### DO ✅
- Use CSS variables for all colors
- Apply gradients to text for emphasis
- Layer shadows for depth
- Use transform for animations
- Maintain consistent border-radius
- Add subtle hover states
- Use backdrop-filter sparingly

### DON'T ❌
- Use hard-coded color values
- Overuse animations (keep subtle)
- Forget mobile optimizations
- Remove focus indicators
- Use heavy images for effects
- Ignore browser compatibility
- Overload with gradients

---

## Performance Tips

1. **Hardware Acceleration**: Use `transform` and `opacity` for animations
2. **Selective Blur**: `backdrop-filter` only on key elements
3. **Minimal Repaints**: Avoid animating `width`, `height`, `top`, `left`
4. **Lazy Loading**: Implement for images and heavy components
5. **CSS Grid/Flexbox**: For efficient layouts

---

## Quick Copy-Paste Snippets

### Premium Card
```css
background: linear-gradient(145deg, rgba(15, 15, 15, 0.8), rgba(17, 17, 17, 0.9));
border: 2px solid rgba(82, 183, 136, 0.2);
border-radius: 24px;
padding: 3rem;
backdrop-filter: blur(10px);
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Gradient Heading
```css
font-size: 3.5rem;
font-weight: 800;
background: linear-gradient(135deg, #ffffff 0%, #6fcf97 50%, #ffffff 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
letter-spacing: -1.5px;
line-height: 1.2;
```

### Glow Button
```css
background: linear-gradient(135deg, #52b788 0%, #7ee8af 50%, #6fcf97 100%);
color: #000000;
padding: 1.25rem 3.5rem;
border-radius: 12px;
font-weight: 700;
letter-spacing: 1.2px;
box-shadow:
    0 8px 25px rgba(82, 183, 136, 0.4),
    0 0 40px rgba(82, 183, 136, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

---

## Figma Design Tokens Export

For design consistency across tools:

```json
{
  "colors": {
    "accent-green": "#52b788",
    "pale-green": "#6fcf97",
    "glow-green": "#7ee8af"
  },
  "spacing": {
    "xs": "8px",
    "s": "16px",
    "m": "24px",
    "l": "32px",
    "xl": "48px"
  },
  "borderRadius": {
    "small": "8px",
    "medium": "12px",
    "large": "16px",
    "xlarge": "24px",
    "pill": "50px"
  }
}
```

---

This design system ensures consistency, scalability, and maintainability across the entire landing page. Use these references when adding new components or features.
