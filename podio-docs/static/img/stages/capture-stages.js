const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const cookies = JSON.parse(fs.readFileSync('/home/jmckenzie/clawd/.secrets/podio-cookies.json'));
  const outputDir = '/home/jmckenzie/clawd/docs/podio/images/stages/';
  
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
  await page.goto('https://podio.com/precisionsiteservicescom/precision-projects/apps/stages', { 
    waitUntil: 'networkidle0',
    timeout: 60000
  });
  
  // Wait for content to load
  await page.waitForTimeout(2000);
  
  // Screenshot 1: stages-list-view.png
  console.log('Capturing: stages-list-view.png');
  await page.screenshot({ path: outputDir + 'stages-list-view.png' });
  
  // Screenshot 2: stages-filter-by-project.png
  console.log('Capturing: stages-filter-by-project.png');
  // Click filter button
  await page.waitForSelector('.filter-button, .filters-button, [data-test="filter-button"], .action-bar-filter', { timeout: 10000 });
  const filterBtn = await page.$('.filter-button, .filters-button, [data-test="filter-button"], .action-bar-filter');
  if (filterBtn) {
    await filterBtn.click();
    await page.waitForTimeout(1000);
  }
  await page.screenshot({ path: outputDir + 'stages-filter-by-project.png' });
  
  // Screenshot 3: stages-filter-by-type.png
  console.log('Capturing: stages-filter-by-type.png');
  // Look for Stage Type filter
  await page.evaluate(() => {
    const labels = Array.from(document.querySelectorAll('.filter-label, .field-label, label'));
    const typeFilter = labels.find(el => el.textContent.includes('Stage Type') || el.textContent.includes('Type'));
    if (typeFilter) {
      const filterField = typeFilter.closest('.filter-field, .filter-component, .field-component');
      if (filterField) filterField.classList.add('highlight');
    }
  });
  await page.screenshot({ path: outputDir + 'stages-filter-by-type.png' });
  
  // Close filter panel if needed
  const closeBtn = await page.$('.filter-close, .close-button, [data-test="close-filter"]');
  if (closeBtn) await closeBtn.click();
  await page.waitForTimeout(500);
  
  // Click into first stage item
  console.log('Opening first stage detail page...');
  await page.waitForSelector('.item-list-item, .app-item, [data-test="app-item"]', { timeout: 10000 });
  const firstItem = await page.$('.item-list-item, .app-item, [data-test="app-item"]');
  if (firstItem) {
    await firstItem.click();
    await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 30000 });
    await page.waitForTimeout(2000);
  } else {
    throw new Error('Could not find first stage item to click');
  }
  
  // Screenshot 4: stage-project-link.png
  console.log('Capturing: stage-project-link.png');
  await page.evaluate(() => {
    const labels = Array.from(document.querySelectorAll('.label-title, .field-label, .item-field-label'));
    const projectField = labels.find(el => el.textContent.includes('Project'));
    if (projectField) {
      const field = projectField.closest('.field-component, .app-field, .item-field');
      if (field) field.classList.add('highlight');
    }
  });
  await page.screenshot({ path: outputDir + 'stage-project-link.png' });
  
  // Screenshot 5: stage-type-field.png
  console.log('Capturing: stage-type-field.png');
  await page.evaluate(() => {
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
    const labels = Array.from(document.querySelectorAll('.label-title, .field-label, .item-field-label'));
    const typeField = labels.find(el => el.textContent.includes('Stage Type') || (el.textContent.includes('Type') && !el.textContent.includes('Project')));
    if (typeField) {
      const field = typeField.closest('.field-component, .app-field, .item-field');
      if (field) field.classList.add('highlight');
    }
  });
  await page.screenshot({ path: outputDir + 'stage-type-field.png' });
  
  // Screenshot 6: stage-dates-fields.png
  console.log('Capturing: stage-dates-fields.png');
  await page.evaluate(() => {
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
    const labels = Array.from(document.querySelectorAll('.label-title, .field-label, .item-field-label'));
    labels.forEach(el => {
      if (el.textContent.includes('Start') || el.textContent.includes('End') || el.textContent.includes('Date')) {
        const field = el.closest('.field-component, .app-field, .item-field');
        if (field) field.classList.add('highlight');
      }
    });
  });
  await page.screenshot({ path: outputDir + 'stage-dates-fields.png' });
  
  // Screenshot 7: stage-status-field.png
  console.log('Capturing: stage-status-field.png');
  await page.evaluate(() => {
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
    const labels = Array.from(document.querySelectorAll('.label-title, .field-label, .item-field-label'));
    const statusField = labels.find(el => el.textContent.includes('Status'));
    if (statusField) {
      const field = statusField.closest('.field-component, .app-field, .item-field');
      if (field) field.classList.add('highlight');
    }
  });
  await page.screenshot({ path: outputDir + 'stage-status-field.png' });
  
  // Screenshot 8: stage-linked-tasks.png
  console.log('Capturing: stage-linked-tasks.png');
  await page.evaluate(() => {
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
    // Find tasks section
    const labels = Array.from(document.querySelectorAll('.label-title, .field-label, .item-field-label, .section-title, h2, h3'));
    const tasksSection = labels.find(el => el.textContent.includes('Task'));
    if (tasksSection) {
      const section = tasksSection.closest('.field-component, .app-field, .item-field, .section, .related-items');
      if (section) section.classList.add('highlight');
    }
  });
  await page.screenshot({ path: outputDir + 'stage-linked-tasks.png' });
  
  // Screenshot 9: stage-add-task-button.png
  console.log('Capturing: stage-add-task-button.png');
  await page.evaluate(() => {
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
    // Find add task button
    const buttons = Array.from(document.querySelectorAll('button, .button, .btn, a[class*="add"]'));
    const addBtn = buttons.find(el => 
      el.textContent.includes('Add') && el.textContent.includes('Task') ||
      el.getAttribute('title')?.includes('Add') ||
      el.getAttribute('aria-label')?.includes('Add')
    );
    if (addBtn) addBtn.classList.add('highlight');
  });
  await page.screenshot({ path: outputDir + 'stage-add-task-button.png' });
  
  await browser.close();
  console.log('All screenshots captured successfully!');
})();
