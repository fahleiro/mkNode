const express = require('express');
const path = require('path');
const fs = require('fs');
const { marked } = require('marked');

const app = express();
const port = 3000;
const docsPath = path.resolve(process.cwd(), 'docs');

app.use(express.static(docsPath));

app.get('/', (req, res) => {
  const indexPath = path.join(docsPath, 'index.md');
  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading index.md');
      return;
    }
    res.send(marked(data));
  });
});

app.listen(port, () => {
  console.log(`mkNode is serving documentation at http://localhost:${port}`);
});
