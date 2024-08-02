const fs = require('fs');
const path = require('path');

function readMenuConfig() {
  const menuPath = path.resolve(process.cwd(), 'menu.conf');
  let menu = {};

  if (fs.existsSync(menuPath)) {
    const menuData = fs.readFileSync(menuPath, 'utf8');
    try {
      menu = JSON.parse(menuData);
    } catch (e) {
      console.error('Error parsing menu.conf:', e);
    }
  }

  return menu;
}

module.exports = readMenuConfig;
