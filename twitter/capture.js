const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 2000 } });
  await page.goto('file:///opt/workspace/claude-code-cheatsheet/twitter/banner.html');
  await page.waitForTimeout(2000);

  const b1 = await page.locator('#banner-1');
  await b1.screenshot({ path: '/opt/workspace/claude-code-cheatsheet/twitter/banner.png' });

  const b2 = await page.locator('#banner-2');
  await b2.screenshot({ path: '/opt/workspace/claude-code-cheatsheet/twitter/explainer.png' });

  await browser.close();
  console.log('Done: banner.png + explainer.png');
})();
