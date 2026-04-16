const fs = require('fs');
const path = require('path');

const templatesDir = path.join('/workspace', 'templates');
const dirs = fs.readdirSync(templatesDir).filter(d => {
  const match = d.match(/^(\d{3})/);
  if (!match) return false;
  const num = parseInt(match[1], 10);
  return num >= 51 && num <= 100;
});

for (const dir of dirs) {
  const jsonPath = path.join(templatesDir, dir, 'meta.json');
  if (fs.existsSync(jsonPath)) {
    try {
      const oldMeta = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      const newMeta = {
        id: dir,
        name: oldMeta.title || oldMeta.name || "Untitled",
        type: oldMeta.category || oldMeta.type || "Component",
        source: {
          url: "https://tailwindcss.com",
          title: "Custom Generated"
        },
        tags: {
          style: ["现代", "极简", "响应式"],
          color: ["中性色", "蓝紫渐变"],
          features: Array.isArray(oldMeta.tags) ? oldMeta.tags.slice(0, 3) : []
        }
      };
      fs.writeFileSync(jsonPath, JSON.stringify(newMeta, null, 2));
    } catch (e) {
      console.error(`Error processing ${dir}:`, e);
    }
  }
}
console.log('Fixed JSON files.');
