// getPageTitleConfig.js
const fs = require('fs');
const path = require('path');

// Lê a configuração do arquivo .conf
function getPageTitleConfig() {
  const confPath = path.resolve(process.cwd(), 'doc.conf');
  let PageTitle = 'PageTitle'; // Default title

  if (fs.existsSync(confPath)) {
    const confData = fs.readFileSync(confPath, 'utf8');
    const match = confData.match(/DOC_PAGETITLE:\s*(.+)/);
    if (match) {
      PageTitle = match[1];
    }
  }

  return `
    <title>${PageTitle}</title>
  `;
}

module.exports = getPageTitleConfig;
