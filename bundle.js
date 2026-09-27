import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = __dirname;
let html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(rootDir, 'src', 'style.css'), 'utf8');
const js = fs.readFileSync(path.join(rootDir, 'src', 'main.js'), 'utf8');

// Replace CSS link
html = html.replace(/<link rel="stylesheet" href="[^"]*style\.css">/, `<style>\n${css}\n</style>`);

// Replace JS module script
html = html.replace(/<script type="module" src="[^"]*main\.js"><\/script>/, `<script>\n${js}\n</script>`);

fs.writeFileSync(path.join(rootDir, 'standalone_farm_game.html'), html, 'utf8');
console.log('standalone_farm_game.html successfully created/updated! Size:', fs.statSync(path.join(rootDir, 'standalone_farm_game.html')).size);
