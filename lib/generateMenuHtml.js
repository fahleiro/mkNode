function generateMenuHtml(menu) {
  function buildMenu(items, depth = 0) {
    let html = '<ul>';
    for (const [key, value] of Object.entries(items)) {
      if (typeof value === 'object') {
        html += `
          <li class="menu-item">
            <span class="menu-toggle" data-depth="${depth}" data-fulltext="${key}">${key}</span>
            ${buildMenu(value, depth + 1)}
          </li>
        `;
      } else {
        html += `
          <li>
            <a href="/${value}">${key}</a>
          </li>
        `;
      }
    }
    html += '</ul>';
    return html;
  }

  return `
    <div class="logo">m k | n o d e</div>
    <div class="search-bar">
      <input type="text" id="search" placeholder="Search">
    </div>
    ${buildMenu(menu)}
  `;
}

module.exports = generateMenuHtml;
