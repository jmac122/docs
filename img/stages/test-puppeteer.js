const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting test...');
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/usr/bin/google-chrome',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-features=UkmDatabase',
      '--disable-gpu',
      '--single-process'
    ],
    dumpio: true
  });
  console.log('Browser launched');
  const page = await browser.newPage();
  console.log('New page created');
  await page.goto('https://www.google.com', { waitUntil: 'load', timeout: 30000 });
  console.log('Navigation complete');
  await browser.close();
  console.log('Test successful!');
})();
