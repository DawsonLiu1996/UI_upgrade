#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Simple argument parser
const args = process.argv.slice(2);
const params = {};
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    const key = args[i].slice(2);
    const value = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
    params[key] = value;
    if (value !== true) i++;
  }
}

// Defaults
const name = params.name || 'New Template';
const aesthetic = params.aesthetic || 'modern';
const theme = params.theme || 'light';
const palette = params.palette || 'blue';
const domain = params.domain || 'data-display';

const templatesDir = path.join(process.cwd(), 'templates');
if (!fs.existsSync(templatesDir)) fs.mkdirSync(templatesDir);

const existingFolders = fs.readdirSync(templatesDir).filter(f => fs.statSync(path.join(templatesDir, f)).isDirectory());
let maxId = 0;
existingFolders.forEach(f => {
  const match = f.match(/^(\d{3})/);
  if (match) {
    const id = parseInt(match[1], 10);
    if (id > maxId) maxId = id;
  }
});

const nextIdNum = maxId + 1;
const nextIdStr = nextIdNum.toString().padStart(3, '0');
const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const folderName = `${nextIdStr}-${slug}`;
const folderPath = path.join(templatesDir, folderName);

fs.mkdirSync(folderPath);

// Generate meta.json
const meta = {
  id: folderName,
  name: name,
  kind: 'component',
  domain: [domain],
  tags: {
    aesthetic: [aesthetic],
    theme: theme,
    palette: [palette],
    patterns: [],
    capabilities: ['responsive'],
    tokens: ['tailwind', 'generated']
  }
};

fs.writeFileSync(path.join(folderPath, 'meta.json'), JSON.stringify(meta, null, 2) + '\n');

// Style Markers Logic
let containerClasses = ['p-8', 'flex', 'items-center', 'justify-center', 'min-h-[400px]'];
let cardClasses = ['p-6', 'w-full', 'max-w-md'];
let textClasses = [];

// 1. Theme marker
if (theme === 'dark') {
  containerClasses.push('bg-zinc-950', 'text-zinc-100');
  cardClasses.push('bg-zinc-900', 'border-zinc-800');
  textClasses.push('text-zinc-100');
} else {
  containerClasses.push('bg-zinc-50', 'text-zinc-900');
  cardClasses.push('bg-white', 'border-zinc-200');
  textClasses.push('text-zinc-900');
}

// 2. Aesthetic marker
if (aesthetic === 'glassmorphism') {
  cardClasses = cardClasses.filter(c => !c.startsWith('bg-') && !c.startsWith('border-'));
  if (theme === 'dark') {
    cardClasses.push('bg-white/10', 'backdrop-blur-md', 'ring-1', 'ring-white/20', 'shadow-2xl', 'rounded-2xl');
    containerClasses.push('bg-gradient-to-br', 'from-zinc-900', 'to-zinc-950');
  } else {
    cardClasses.push('bg-white/60', 'backdrop-blur-md', 'ring-1', 'ring-black/5', 'shadow-xl', 'rounded-2xl');
    containerClasses.push('bg-gradient-to-br', 'from-zinc-100', 'to-zinc-200');
  }
} else if (aesthetic === 'brutalism') {
  cardClasses = cardClasses.filter(c => !c.startsWith('border-'));
  cardClasses.push('border-4', 'border-black', 'shadow-[8px_8px_0_0_rgba(0,0,0,1)]', 'rounded-none');
  textClasses.push('font-black', 'tracking-tighter');
} else if (aesthetic === 'neumorphism') {
  cardClasses = cardClasses.filter(c => !c.startsWith('bg-') && !c.startsWith('border-') && !c.startsWith('shadow-'));
  if (theme === 'dark') {
    cardClasses.push('bg-zinc-900', 'shadow-[20px_20px_60px_#111113,-20px_-20px_60px_#25252b]', 'rounded-3xl');
    containerClasses = containerClasses.filter(c => !c.startsWith('bg-'));
    containerClasses.push('bg-zinc-900');
  } else {
    cardClasses.push('bg-gray-100', 'shadow-[20px_20px_60px_#d9d9d9,-20px_-20px_60px_#ffffff]', 'rounded-3xl');
    containerClasses = containerClasses.filter(c => !c.startsWith('bg-'));
    containerClasses.push('bg-gray-100');
  }
} else {
  // Modern/minimal
  cardClasses.push('rounded-2xl', 'border', 'shadow-sm');
}

// 3. Palette marker
const btnClasses = [
  `bg-${palette}-600`, 
  `hover:bg-${palette}-700`, 
  'text-white', 
  'px-4', 'py-2', 'rounded-lg', 'font-medium', 'transition-colors'
];
const titleClasses = [`text-${palette}-500`, 'text-xl', 'font-bold', 'mb-2'];

const htmlContent = `<!-- Generated Template: ${name} -->
<!-- Aesthetic: ${aesthetic} | Theme: ${theme} | Palette: ${palette} -->
<div class="${containerClasses.join(' ')}">
  <!-- Style Marker Card -->
  <div class="${cardClasses.join(' ')}">
    <h2 class="${titleClasses.join(' ')}">${name}</h2>
    <p class="mb-6 opacity-80 ${textClasses.join(' ')}">
      This is a generated template enforcing the <strong>${aesthetic}</strong> style marker.
    </p>
    <button class="${btnClasses.join(' ')}">
      Action Button
    </button>
  </div>
</div>
`;

fs.writeFileSync(path.join(folderPath, 'index.html'), htmlContent);

console.log(`Successfully generated template: ${folderName}`);
console.log(`- Path: ${folderPath}`);
console.log(`- Markers injected: ${aesthetic}, ${theme}, ${palette}`);
