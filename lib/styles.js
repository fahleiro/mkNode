const css = `
body {
  margin: 0;
  padding: 0;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #6482AD;
  color: white;
  box-sizing: border-box;
  overflow-y: auto; /* Adiciona rolagem vertical */
}

nav .logo {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-family: 'Courier New', monospace;
  font-size: 24px; /* Tamanho da fonte */
  font-weight: bold;
  margin-bottom: 20px; /* Espaçamento abaixo da logo */
  cursor: default;
}

nav .search-bar {
  margin-left: 7px;
  margin-right: 7px;
  padding: 5px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

nav .search-bar input {
  border: none;
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
}

nav .search-bar input:focus {
  outline: none; /* Remove o contorno padrão ao focar */
  border: none; /* Garante que a borda não apareça ao focar */
}

nav .search-bar input::placeholder {
  color: #888;
}

nav::-webkit-scrollbar {
  width: 0px;
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
  padding: 5px;
}

nav ul li ul {
  display: none;
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: 0;
}

nav ul li.active > ul {
  display: block;
  max-height: none; /* none para não definir limite */
}

nav ul li a {
  color: white;
  text-decoration: none;
  display: block;
  word-wrap: break-word; /* Permite quebra de palavras longas */
}

nav ul li a:hover {
  opacity: 0.8; /* Adiciona um efeito de hover com 20% de redução de opacidade */
}

.menu-toggle {
  cursor: pointer;
  display: block;
  word-wrap: break-word; /* Permite quebra de palavras longas */
}

.menu-toggle[data-depth="0"] {
  cursor: default; /* Indica que não é clicável */
  border-bottom: 1px solid white;
  color: white;
  margin-right: 2px;
}

.menu-toggle[data-depth="0"]::after {
  display: none; /* Remove o ícone de +/– para itens de nível 0 */
}

.menu-toggle::after {
  content: '+'; /* Símbolo inicial */
  display: inline-block;
  margin-left: 5px;
}

nav ul li.active > .menu-toggle::after {
  content: '-'; /* Símbolo quando o item está ativo */
}

.content {
  margin-left: 320px;
  padding: 20px;
}

.breadcrumbs {
  font-size: 14px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 4px;
  border: 1px solid #ddd;
}

`;

module.exports = css;
