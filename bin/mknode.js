#!/usr/bin/env node

const express = require('express');
const path = require('path');
const fs = require('fs');
const { marked } = require('marked');
const process = require('process');

// Importa funções de lib
const initializeProject = require('../lib/initializeProject');
const getFontConfig = require('../lib/getFontConfig');
const readMenuConfig = require('../lib/readMenuConfig');

const app = express();
const port = 3000;
const docsPath = path.resolve(process.cwd(), 'docs');
const font = getFontConfig();
const menuConfig = readMenuConfig();

// Função para gerar o menu HTML
function generateMenuHtml(menu) {
  function buildMenu(items, depth = 0) {
    let html = '<ul>';
    for (const [key, value] of Object.entries(items)) {
      if (typeof value === 'object') {
        html += `
          <li class="menu-item">
            <span class="menu-toggle" data-depth="${depth}">${key}</span>
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
  return buildMenu(menu);
}

// Middleware para converter e servir arquivos Markdown
app.get('*.md', (req, res) => {
  const filePath = path.join(docsPath, req.path);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    // Aplica a fonte ao HTML gerado
    const html = marked(data);
    res.send(`
      <html>
      <head>
        <style>
          body { font-family: ${font}; margin: 0; padding: 0; }
          nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 200px;
            height: 100%;
            background-color: #6482AD;
            color: white;
            padding: 20px;
            box-sizing: border-box;
            overflow-y: auto; /* Adiciona rolagem vertical */
          }
          /* Estilo da barra de rolagem */
          nav::-webkit-scrollbar {
            width: 8px;
          }
          nav::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          nav::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }
          nav::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }
          nav ul li {
            margin: 10px 0;
            position: relative;
          }
          nav ul li ul {
            display: none;
            padding-left: 20px;
          }
          nav ul li.active > ul {
            display: block;
          }
          nav ul li a {
            color: white;
            text-decoration: none;
            display: block;
            padding: 5px;
          }
          nav ul li a:hover {
            background-color: #4a6a91;
            border-radius: 5px;
          }
          .menu-toggle {
            cursor: pointer;
            display: block;
            padding: 5px;
            background-color: #4a6a91;
            border-radius: 5px;
            margin: 0;
          }
          .menu-toggle:hover {
            background-color: #4a6a91;
            border-radius: 5px;
          }
          .content {
            margin-left: 220px;
            padding: 20px;
          }
        </style>
      </head>
      <body>
        <nav>
          ${generateMenuHtml(menuConfig)}
        </nav>
        <div class="content">
          ${html}
        </div>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const toggles = document.querySelectorAll('.menu-toggle');
            toggles.forEach(toggle => {
              toggle.addEventListener('click', () => {
                const parentLi = toggle.parentElement;
                parentLi.classList.toggle('active');
              });
            });
          });
        </script>
      </body>
      </html>
    `);
  });
});

// Middleware para servir arquivos estáticos
app.use(express.static(docsPath));

// Roteador para a página inicial
app.get('/', (req, res) => {
  const indexPath = path.join(docsPath, 'index.md');
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading index.md');
      return;
    }
    const html = marked(data);
    res.send(`
      <html>
      <head>
        <style>
          body { font-family: ${font}; margin: 0; padding: 0; }
          nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 200px;
            height: 100%;
            background-color: #6482AD;
            color: white;
            padding: 20px;
            box-sizing: border-box;
            overflow-y: auto; /* Adiciona rolagem vertical */
          }
          /* Estilo da barra de rolagem */
          nav::-webkit-scrollbar {
            width: 8px;
          }
          nav::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          nav::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }
          nav::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }
          nav ul li {
            margin: 10px 0;
            position: relative;
          }
          nav ul li ul {
            display: none;
            padding-left: 20px;
          }
          nav ul li.active > ul {
            display: block;
          }
          nav ul li a {
            color: white;
            text-decoration: none;
            display: block;
            padding: 5px;
          }
          nav ul li a:hover {
            background-color: #4a6a91;
            border-radius: 5px;
          }
          .menu-toggle {
            cursor: pointer;
            display: block;
            padding: 5px;
            background-color: #4a6a91;
            border-radius: 5px;
            margin: 0;
          }
          .menu-toggle:hover {
            background-color: #4a6a91;
            border-radius: 5px;
          }
          .content {
            margin-left: 220px;
            padding: 20px;
          }
        </style>
      </head>
      <body>
        <nav>
          ${generateMenuHtml(menuConfig)}
        </nav>
        <div class="content">
          ${html}
        </div>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const toggles = document.querySelectorAll('.menu-toggle');
            toggles.forEach(toggle => {
              toggle.addEventListener('click', () => {
                const parentLi = toggle.parentElement;
                parentLi.classList.toggle('active');
              });
            });
          });
        </script>
      </body>
      </html>
    `);
  });
});

// Comandos para iniciar e executar o projeto
const command = process.argv[2];
if (command === 'start') {
  initializeProject();
} else if (command === 'run') {
  app.listen(port, () => {
    console.log(`mkNode is serving documentation at http://localhost:${port}`);
  });
} else {
  console.log('Unknown command. Use "start" to initialize or "run" to start the server.');
}
