// Importa o package.json
const packageJson = require('../package.json');

function generateMenuHtml(menu) {
  function buildMenu(items, depth = 0) {
    let html = '<ul>';
    for (const [key, value] of Object.entries(items)) {
      const marginLeft = 2 + (depth * 5); // Calcula o margin-left com base no depth
      if (typeof value === 'object' && Object.keys(value).length > 0) {
        // Adiciona a classe active se o depth for 0
        const activeClass = depth === 0 ? 'active' : '';
        html += `
          <li class="menu-item ${activeClass}">
            <span class="menu-toggle" data-depth="${depth}" data-fulltext="${key}" style="margin-left: ${marginLeft}px;">${key}</span>
            ${buildMenu(value, depth + 1)}
          </li>
        `;
      } else if (typeof value === 'string') {
        html += `
          <li>
            <a href="/${value}" style="margin-left: ${marginLeft}px;">${key}</a>
          </li>
        `;
      }
    }
    html += '</ul>';
    return html;
  }

  return `
    <div class="menu-top">
      <div class="logo">m k | n o d e</div>
      <div class="version">${packageJson.version}</div>
      <div class="search-bar">
        <input type="text" id="search" placeholder="Search">
      </div>
    </div>
    ${buildMenu(menu)}
  `;
}

module.exports = generateMenuHtml;
