#!/usr/bin/env node

const express = require('express');
const path = require('path');
const fs = require('fs');
const { marked } = require('marked');
const process = require('process');

// Importa funções de lib
const initializeProject = require('../lib/initializeProject');
const getFontConfig = require('../lib/getFontConfig');
const getPageTitleConfig = require('../lib/getPageTitleConfig');
const readMenuConfig = require('../lib/readMenuConfig');
const generateMenuHtml = require('../lib/generateMenuHtml');
const styles = require('../lib/styles'); // Importa o CSS
const getGoogleAdsenseScript = require('../lib/getGoogleAdsenseScript'); // Importa o CSS
const scripts = require('../lib/scripts');

const app = express();
const port = 3000;
const docsPath = path.resolve(process.cwd(), 'docs');
const fontStyles = getFontConfig(); // Obtém o CSS da fonte
const pageTitle = getPageTitleConfig(); // Define title
const menuConfig = readMenuConfig();

// Função para gerar o HTML da página
function generateHtml(content) {
  return `
<html>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
  <script>
    // Inicializa o Highlight.js automaticamente
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
      });
    });
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/languages/dockerfile.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">

<script>
  hljs.highlightAll();
</script>
${pageTitle}
${getGoogleAdsenseScript}
<style>
${styles}
${fontStyles}
</style>
</head>
<body>
<nav>
${generateMenuHtml(menuConfig)}
</nav>
<div class="content">
${content}
</div>
<script>
${scripts}
</script>
</body>
</html>
`;
}

// Middleware para converter e servir arquivos Markdown
app.get('*.md', (req, res) => {
  const filePath = path.join(docsPath, req.path);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('File not found');
      return;
    }
    const htmlContent = marked(data);
    res.send(generateHtml(htmlContent));
  });
});

// Middleware para servir arquivos estáticos
app.use(express.static(docsPath));

// Roteador para a página inicial
app.get('/', (req, res) => {
  const indexPath = path.join(docsPath, 'index.md');
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('index.md not found');
      return;
    }
    const htmlContent = marked(data);
    res.send(generateHtml(htmlContent));
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
