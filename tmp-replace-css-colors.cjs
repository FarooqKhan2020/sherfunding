const fs = require('fs');
const path = require('path');

const mapping = {
  '#005288': 'var(--primary-color)',
  '#0078ae': 'var(--secondary-color)',
  '#00c6ff': 'var(--accent-color)',
  '#009ec3': 'var(--accent-strong)',
  '#33d4ff': 'var(--accent-bright)',
  '#2563eb': 'var(--brand-blue)',
  '#1d4ed8': 'var(--brand-blue-strong)',
  '#3b82f6': 'var(--blue-soft)',
  '#60a5fa': 'var(--blue-muted)',
  '#8b5cf6': 'var(--brand-purple)',
  '#7c3aed': 'var(--brand-purple-strong)',
  '#06b6d4': 'var(--accent-teal)',
  '#e84040': 'var(--danger-color)',
  '#22543d': 'var(--success-color)',
  '#c6f6d5': 'var(--success-soft)',
  '#ffffff': 'var(--surface-white)',
  '#fff': 'var(--surface-white)',
  '#f8f9fb': 'var(--surface-100)',
  '#f0f4f8': 'var(--surface-200)',
  '#f5f7fa': 'var(--surface-300)',
  '#eef0f4': 'var(--surface-400)',
  '#f0f2f5': 'var(--surface-500)',
  '#f0f5ff': 'var(--surface-600)',
  '#f7f8fa': 'var(--surface-700)',
  '#fafbfc': 'var(--surface-800)',
  '#f1f5f9': 'var(--surface-900)',
  '#0a2540': 'var(--surface-dark)',
  '#0c1b2a': 'var(--surface-darker)',
  '#1a3a5c': 'var(--surface-deep)',
  '#1e3a5f': 'var(--surface-deep-alt)',
  '#1a2c3e': 'var(--text-strong)',
  '#1a1d23': 'var(--text-dark)',
  '#0e0e0e': 'var(--text-black)',
  '#333': 'var(--text-muted-alt)',
  '#555': 'var(--text-muted-alt)',
  '#2c3040': 'var(--text-alt)',
  '#2d3748': 'var(--text-alt)',
  '#3a4155': 'var(--text-quiet)',
  '#4a5568': 'var(--text-secondary)',
  '#666': 'var(--text-muted-alt)',
  '#475569': 'var(--text-muted-strong)',
  '#718096': 'var(--text-muted)',
  '#777e8e': 'var(--text-soft)',
  '#64748b': 'var(--text-muted-strong)',
  '#94a3b8': 'var(--text-faint)',
  '#9aa3b5': 'var(--text-faint)',
  '#a0a7b5': 'var(--text-placeholder)',
  '#a0aec0': 'var(--text-faint)',
  '#a0c4e8': 'var(--text-faint-alt)',
  '#aab0be': 'var(--text-faint)',
  '#b0b7c3': 'var(--text-placeholder)',
  '#cbd5e0': 'var(--text-faint-alt)',
  '#c8cdd8': 'var(--border-faint)',
  '#d0d4de': 'var(--border-smooth)',
  '#d8dce4': 'var(--border-soft)',
  '#dcdcdc': 'var(--border-light)',
  '#e8eaed': 'var(--border-soft)',
  '#e0e0e0': 'var(--border-lighter)',
  '#e2e5ea': 'var(--border-muted)',
  '#e2e8f0': 'var(--border)',
  '#e9edf2': 'var(--border-light)',
  '#eaf6f9': 'var(--surface-400)',
  '#f7f9fc': 'var(--surface-100)',
};

const orderedKeys = Object.keys(mapping).sort((a, b) => b.length - a.length);
let inRootBlock = false;

function replaceLine(line) {
  if (line.includes(':root {')) {
    inRootBlock = true;
    return line;
  }
  if (inRootBlock && line.trim() === '}') {
    inRootBlock = false;
    return line;
  }
  if (inRootBlock) {
    return line;
  }
  if (line.includes('data:image')) return line;
  let updated = line;
  orderedKeys.forEach((hex) => {
    const regex = new RegExp(hex.replace('#', '#'), 'gi');
    updated = updated.replace(regex, mapping[hex]);
  });
  return updated;
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && fullPath.endsWith('.css')) {
      const original = fs.readFileSync(fullPath, 'utf8');
      const updated = original
        .split(/\r?\n/)
        .map(replaceLine)
        .join('\n');
      if (updated !== original) {
        fs.writeFileSync(fullPath, updated, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  });
}

walk(path.join(__dirname, 'src'));