// getFontConfig.js
const fs = require('fs');
const path = require('path');

// Lê a configuração do arquivo .conf
function getFontConfig() {
  const confPath = path.resolve(process.cwd(), 'doc.conf');
  let font = 'Helvetica'; // Fonte padrão

  if (fs.existsSync(confPath)) {
    const confData = fs.readFileSync(confPath, 'utf8');
    const match = confData.match(/DOC_FONT:\s*(.+)/);
    if (match) {
      font = match[1];
    }
  }

  return `
    body {
      font-family: ${font}, sans-serif;
    }
  `;
}

module.exports = getFontConfig;
