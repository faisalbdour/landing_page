# TheTruePrompt Landing Page Project

## Project Overview
TheTruePrompt is a high-converting landing page for a coaching business automation service. The project focuses on lead generation through a modern, animated website that converts visitors into strategy call bookings.

## Architecture
- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript
- **Styling**: Custom CSS with CSS Grid/Flexbox, CSS Variables, and modern animations
- **Testing**: Playwright for automated testing
- **Build Tools**: Node.js with npm scripts
- **Deployment**: Static site (ready for any hosting platform)

## Tech Stack Details
- **HTML**: Semantic markup with accessibility considerations
- **CSS**: Modern CSS features (CSS Grid, Flexbox, CSS Variables, animations, media queries)
- **JavaScript**: ES6+ features, Intersection Observer API, async/await
- **Testing**: Playwright for cross-browser testing
- **Package Manager**: npm

## File Structure
```
├── index.html              # Main landing page
├── styles.css              # All styles and animations
├── package.json            # Dependencies and scripts
├── playwright.config.ts    # Playwright configuration
├── tests/                  # Test files
├── screenshots/            # Test screenshots
└── node_modules/          # Dependencies (auto-generated)
```

## Development Commands
- `npm install`: Install dependencies
- `npx playwright install`: Install Playwright browsers
- `npx playwright test`: Run all tests
- `npx playwright test --headed`: Run tests in headed mode
- `npx playwright test --ui`: Run tests in UI mode
- `node analyze-landing-page.js`: Analyze landing page performance

## File Boundaries
- **Safe to edit**: `index.html`, `styles.css`, `tests/`, `analyze-landing-page.js`
- **Configuration files**: `package.json`, `playwright.config.ts` (edit with caution)
- **Never touch**: `node_modules/`, `package-lock.json` (auto-generated)
- **Generated files**: `screenshots/` directory contents

## Coding Standards

### HTML Standards
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<nav>`)
- Include proper meta tags for SEO and viewport
- Use descriptive alt text for images
- Implement proper heading hierarchy (h1, h2, h3)
- Include ARIA labels where necessary

### CSS Standards
- Use CSS custom properties (variables) for consistent theming
- Follow BEM methodology for class naming where applicable
- Use modern CSS features (Grid, Flexbox, CSS Variables)
- Implement responsive design with mobile-first approach
- Use meaningful animation names and consistent timing functions

### JavaScript Standards
- Use modern ES6+ features (const/let, arrow functions, async/await)
- Implement proper error handling with try/catch blocks
- Use meaningful variable and function names
- Add comments for complex logic
- Follow the existing animation and interaction patterns

## Key Features & Components

### Landing Page Sections
1. **Header/Navigation**: Logo and main navigation with CTA
2. **Hero Section**: Main headline, description, CTA button, and animated stats
3. **VSL Section**: Video demonstration area with placeholder
4. **Services Section**: Four main service offerings with icons
5. **Guarantee Section**: 30-day money-back guarantee
6. **Final CTA**: Lead capture form with contact information
7. **Footer**: Brand information and links

### Interactive Elements
- Smooth scroll navigation
- Scroll-triggered animations using Intersection Observer
- 3D hover effects on service cards
- Custom cursor effects (desktop only)
- Form submission with loading states
- Animated statistics counters
- Parallax effects on floating shapes

### Animations & Effects
- Fade-in animations on scroll
- 3D floating shapes with parallax
- Service card tilt effects on hover
- Pulsing CTA buttons
- Custom cursor with hover states
- Animated number counters

## Performance Considerations
- Optimize images for web (WebP format preferred)
- Minimize CSS and JavaScript for production
- Use efficient selectors and avoid expensive animations
- Implement lazy loading for images
- Consider critical CSS inlining for above-the-fold content

## Testing Strategy
- Use Playwright for cross-browser testing
- Test responsive design on multiple screen sizes
- Verify form submission functionality
- Check animation performance and smoothness
- Validate accessibility with screen readers

## Deployment Checklist
- [ ] Optimize all images
- [ ] Minify CSS and JavaScript
- [ ] Test form submission endpoint
- [ ] Verify all animations work smoothly
- [ ] Check responsive design on all devices
- [ ] Validate HTML and CSS
- [ ] Run Playwright tests
- [ ] Set up analytics tracking

## Known Issues & Considerations
- Video placeholder needs to be replaced with actual video URL
- Form submission currently uses mock endpoint (needs real backend integration)
- Custom cursor effects are disabled on mobile devices
- Some animations may need performance optimization on older devices

## Business Context
- **Target Audience**: Coaches and consultants looking to automate their business
- **Primary Goal**: Convert visitors into strategy call bookings
- **Key Metrics**: Form submissions, time on page, scroll depth
- **Value Proposition**: Save 15+ hours weekly through intelligent automation

## Code Examples

### Good: Proper CSS Variable Usage
```css
:root {
    --primary-green: #52b788;
    --text-white: #ffffff;
}

.cta-button {
    background-color: var(--primary-green);
    color: var(--text-white);
}
```

### Good: Modern JavaScript with Error Handling
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
```

### Good: Semantic HTML Structure
```html
<section class="hero" role="banner">
    <h1 class="hero-title">The Definitive Automation Partner</h1>
    <p class="hero-subtitle">Save 15+ hours every week</p>
    <a href="#cta" class="cta-button" aria-label="Book your strategy call">
        BOOK YOUR STRATEGY CALL
    </a>
</section>
```

## Rules & Guidelines
1. **Always maintain the existing design aesthetic** - dark theme with green accents
2. **Preserve all animations and interactions** - they're crucial for user engagement
3. **Keep the form functionality intact** - it's the primary conversion point
4. **Test any changes across different browsers** using Playwright
5. **Maintain responsive design** - mobile experience is critical
6. **Use existing CSS variables** for colors and spacing consistency
7. **Follow the established animation patterns** for new elements
8. **Ensure all interactive elements have proper hover states**

## Future Enhancements
- A/B testing implementation
- Advanced analytics integration
- Dynamic content personalization
- Progressive Web App features
- Advanced form validation and error handling
