const fs = require('fs');
const path = require('path');

// Função para criar estrutura inicial
function initializeProject() {
  const docsPath = path.resolve(process.cwd(), 'docs');
  const confPath = path.resolve(process.cwd(), 'doc.conf');
  const menuConfPath = path.resolve(process.cwd(), 'menu.conf');


  if (!fs.existsSync(docsPath)) {
    fs.mkdirSync(docsPath);
    fs.writeFileSync(path.join(docsPath, 'index.md'), '# Index\n_Index example_');
    console.log('docs/ directory and index.md created.');
  }

  if (!fs.existsSync(confPath)) {
    fs.writeFileSync(confPath, 'DOC_FONT: Helvetica');
    console.log('doc.conf file created.');
  }

  if (!fs.existsSync(menuConfPath)) {
    fs.writeFileSync(menuConfPath, JSON.stringify({
      "Getting Started": {
        "Installing": "install.md",
        "Running": "run.md"
      }
    }, null, 2));
    console.log('menu.conf file created.');
  }
}

module.exports = initializeProject;
