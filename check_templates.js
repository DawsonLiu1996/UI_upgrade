const fs = require('fs');
const path = require('path');

const templatesDir = path.join('/workspace', 'templates');
const dirs = fs.readdirSync(templatesDir).filter(d => {
  const match = d.match(/^(\d{3})/);
  if (!match) return false;
  const num = parseInt(match[1], 10);
  return num >= 51 && num <= 100;
});

let htmlErrors = 0;
let jsonErrors = 0;

for (const dir of dirs) {
  const dirPath = path.join(templatesDir, dir);
  const htmlPath = path.join(dirPath, 'index.html');
  const jsonPath = path.join(dirPath, 'meta.json');

  if (!fs.existsSync(htmlPath)) {
    console.error(`Missing index.html in ${dir}`);
    htmlErrors++;
  } else {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    if (!htmlContent.includes('<') || !htmlContent.includes('>')) {
      console.error(`Invalid index.html in ${dir}`);
      htmlErrors++;
    }
  }

  if (!fs.existsSync(jsonPath)) {
    console.error(`Missing meta.json in ${dir}`);
    jsonErrors++;
  } else {
    try {
      const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      if (!jsonContent.name || !jsonContent.type || !jsonContent.tags || !jsonContent.tags.style || !jsonContent.tags.color) {
        console.error(`Invalid meta.json format in ${dir}`);
        jsonErrors++;
      }
    } catch (e) {
      console.error(`Invalid JSON in ${dir}/meta.json`);
      jsonErrors++;
    }
  }
}

if (htmlErrors === 0 && jsonErrors === 0) {
  console.log('All HTML and JSON files in templates 051-100 are valid.');
} else {
  console.log(`Found ${htmlErrors} HTML errors and ${jsonErrors} JSON errors.`);
}
