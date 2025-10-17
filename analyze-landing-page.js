const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Starting landing page analysis...');

  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  // Test different viewport sizes
  const viewports = [
    { name: 'desktop', width: 1920, height: 1080 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 667 }
  ];

  for (const viewport of viewports) {
    console.log(`Testing ${viewport.name} viewport (${viewport.width}x${viewport.height})...`);

    const page = await context.newPage();
    await page.setViewportSize({ width: viewport.width, height: viewport.height });

    // Navigate to local server
    await page.goto('http://127.0.0.1:8080/index.html');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Take full page screenshot
    await page.screenshot({
      path: path.join(screenshotsDir, `landing-page-${viewport.name}.png`),
      fullPage: true
    });

    console.log(`✓ Screenshot saved: landing-page-${viewport.name}.png`);

    await page.close();
  }

  // Additional analysis - take screenshots of specific sections
  const page = await context.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://127.0.0.1:8080/index.html');
  await page.waitForLoadState('networkidle');

  console.log('\nCapturing individual sections...');

  // Hero section
  const heroSection = await page.locator('.hero').first();
  await heroSection.screenshot({
    path: path.join(screenshotsDir, 'section-hero.png')
  });
  console.log('✓ Hero section captured');

  // Services section
  const servicesSection = await page.locator('.services').first();
  await servicesSection.screenshot({
    path: path.join(screenshotsDir, 'section-services.png')
  });
  console.log('✓ Services section captured');

  // CTA Form section
  const ctaSection = await page.locator('.final-cta').first();
  await ctaSection.screenshot({
    path: path.join(screenshotsDir, 'section-cta-form.png')
  });
  console.log('✓ CTA form section captured');

  await page.close();
  await browser.close();

  console.log('\n✅ Analysis complete! Screenshots saved in ./screenshots/');
  console.log('\nGenerated files:');
  console.log('- landing-page-desktop.png');
  console.log('- landing-page-tablet.png');
  console.log('- landing-page-mobile.png');
  console.log('- section-hero.png');
  console.log('- section-services.png');
  console.log('- section-cta-form.png');
})();
