const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    const cookies = JSON.parse(fs.readFileSync('/home/jmckenzie/clawd/.secrets/podio-cookies.json'));
    const outputDir = '/home/jmckenzie/clawd/docs/podio/images/stages/';
    
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      executablePath: '/usr/bin/google-chrome',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 900 });
    await page.setCookie(...cookies);
    
    // Add highlight CSS
    await page.addStyleTag({ content: `
      .highlight { 
        outline: 5px solid #e74c3c !important; 
        outline-offset: 3px !important; 
        box-shadow: 0 0 15px rgba(231,76,60,0.5) !important; 
      }
    `});
    
    console.log('Navigating to Stages app...');
    try {
      await page.goto('https://podio.com/precisionsiteservicescom/precision-projects/apps/stages', { 
        waitUntil: 'load',
        timeout: 90000
      });
    } catch (e) {
      console.log('Initial navigation completed with:', e.message);
    }
    
    // Wait for page to settle
    console.log('Waiting for page to load...');
    await page.waitForTimeout(8000);
    
    // Screenshot 1: stages-list-view.png
    console.log('Capturing: stages-list-view.png');
    await page.screenshot({ path: outputDir + 'stages-list-view.png', fullPage: false });
    console.log('✓ Saved: stages-list-view.png');
    
    // Try to find and click filter button
    console.log('Looking for filter button...');
    await page.waitForTimeout(2000);
    
    // Try multiple possible filter button selectors
    const filterClicked = await page.evaluate(() => {
      const selectors = [
        '.filter-button',
        '.filters-button', 
        '[data-test="filter-button"]',
        '.action-bar-filter',
        'button[title*="Filter"]',
        'button[aria-label*="Filter"]',
        '.filter-icon',
        '.toolbar-filter'
      ];
      
      for (const selector of selectors) {
        const btn = document.querySelector(selector);
        if (btn) {
          btn.click();
          return true;
        }
      }
      return false;
    });
    
    if (filterClicked) {
      console.log('Filter button clicked, waiting for panel...');
      await page.waitForTimeout(2000);
      
      // Screenshot 2: stages-filter-by-project.png
      console.log('Capturing: stages-filter-by-project.png');
      await page.screenshot({ path: outputDir + 'stages-filter-by-project.png', fullPage: false });
      console.log('✓ Saved: stages-filter-by-project.png');
      
      // Screenshot 3: stages-filter-by-type.png - highlight Stage Type filter
      console.log('Highlighting Stage Type filter...');
      await page.evaluate(() => {
        const labels = Array.from(document.querySelectorAll('.filter-label, .field-label, label, .facet-title'));
        const typeFilter = labels.find(el => 
          el.textContent.includes('Stage Type') || 
          el.textContent.includes('Type')
        );
        if (typeFilter) {
          const filterField = typeFilter.closest('.filter-field, .filter-component, .field-component, .facet');
          if (filterField) {
            filterField.classList.add('highlight');
            filterField.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
      await page.waitForTimeout(1000);
      
      console.log('Capturing: stages-filter-by-type.png');
      await page.screenshot({ path: outputDir + 'stages-filter-by-type.png', fullPage: false });
      console.log('✓ Saved: stages-filter-by-type.png');
    } else {
      console.log('⚠ Could not find filter button');
    }
    
    await browser.close();
    console.log('\n=== List view screenshots complete! ===');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
})();
