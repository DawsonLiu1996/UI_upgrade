import fs from 'fs';
import path from 'path';

const templatesDir = path.join(process.cwd(), 'templates');
const folders = fs.readdirSync(templatesDir).filter(f => fs.statSync(path.join(templatesDir, f)).isDirectory());

folders.forEach(folder => {
  const metaPath = path.join(templatesDir, folder, 'meta.json');
  if (!fs.existsSync(metaPath)) return;
  
  try {
    const raw = fs.readFileSync(metaPath, 'utf8');
    const oldMeta = JSON.parse(raw);
    
    // Create new meta structure
    const newMeta = {
      id: oldMeta.id || folder,
      name: oldMeta.name || oldMeta.title || folder,
      kind: 'component', // default
      domain: [],
      tags: {
        aesthetic: [],
        theme: 'light',
        palette: [],
        patterns: [],
        capabilities: ['responsive'],
        tokens: ['tailwind']
      }
    };
    
    if (oldMeta.source) newMeta.source = oldMeta.source;
    if (oldMeta.description) newMeta.description = oldMeta.description;
    
    // Attempt to map type
    const typeLower = (oldMeta.type || oldMeta.category || '').toLowerCase();
    if (typeLower.includes('page') || typeLower.includes('dashboard')) {
      newMeta.kind = 'page';
      if (typeLower.includes('dashboard')) newMeta.domain.push('dashboard');
    } else if (typeLower.includes('layout') || typeLower.includes('shell')) {
      newMeta.kind = 'layout';
    } else if (typeLower.includes('section') || typeLower.includes('hero')) {
      newMeta.kind = 'section';
    }
    
    if (typeLower.includes('nav')) newMeta.domain.push('navigation');
    if (typeLower.includes('form') || typeLower.includes('auth') || typeLower.includes('login')) newMeta.domain.push('forms');
    if (typeLower.includes('commerce') || typeLower.includes('product') || typeLower.includes('pricing')) newMeta.domain.push('commerce');
    if (typeLower.includes('marketing')) newMeta.domain.push('marketing');
    if (typeLower.includes('modal') || typeLower.includes('toast') || typeLower.includes('alert')) newMeta.domain.push('feedback');
    
    if (newMeta.domain.length === 0) newMeta.domain.push('data-display');
    
    // Attempt to map tags
    const oldTags = oldMeta.tags || {};
    const styles = Array.isArray(oldTags.style) ? oldTags.style : [oldTags.style].filter(Boolean);
    const colors = Array.isArray(oldTags.color) ? oldTags.color : [oldTags.color].filter(Boolean);
    const features = Array.isArray(oldTags.features) ? oldTags.features : [oldTags.features].filter(Boolean);
    
    const allOldTags = [...styles, ...colors, ...features].join(' ').toLowerCase();
    
    if (allOldTags.includes('glass') || allOldTags.includes('玻璃')) newMeta.tags.aesthetic.push('glassmorphism');
    if (allOldTags.includes('minimal') || allOldTags.includes('极简')) newMeta.tags.aesthetic.push('minimal');
    if (allOldTags.includes('brutal')) newMeta.tags.aesthetic.push('brutalism');
    if (allOldTags.includes('neu')) newMeta.tags.aesthetic.push('neumorphism');
    
    if (allOldTags.includes('dark') || allOldTags.includes('深色')) {
      newMeta.tags.theme = 'dark';
    }
    
    colors.forEach(c => {
      const cl = c.toLowerCase();
      if (!cl.includes('深') && !cl.includes('浅') && !cl.includes('暗')) {
        newMeta.tags.palette.push(c);
      }
    });
    
    // Deduplicate arrays
    newMeta.domain = [...new Set(newMeta.domain)];
    newMeta.tags.aesthetic = [...new Set(newMeta.tags.aesthetic)];
    if (newMeta.tags.aesthetic.length === 0) newMeta.tags.aesthetic.push('modern');
    newMeta.tags.palette = [...new Set(newMeta.tags.palette)];
    
    fs.writeFileSync(metaPath, JSON.stringify(newMeta, null, 2) + '\n');
  } catch (err) {
    console.error(`Error processing ${metaPath}:`, err);
  }
});
console.log('Migration completed.');
