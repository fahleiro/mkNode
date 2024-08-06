const css = `
body {
  margin: 0;
  padding: 0;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 255px;
  height: 100%;
  background-color: #6482AD;
  color: white;
  box-sizing: border-box;
  overflow-y: auto; /* Adiciona rolagem vertical */
}

nav .logo {
  padding: 20px;
  font-family: 'Courier New', monospace;
  font-size: 24px; /* Tamanho da fonte */
  font-weight: bold;
  margin-bottom: 20px; /* Espaçamento abaixo da logo */
  cursor: default;
}

nav .search-bar {
  width: 90%;
  margin: 10px auto 20px auto; /* Centraliza horizontalmente */
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
  padding: 0;
  margin: 0;
  width: 100%; /* Garante que o ul ocupe toda a largura */
}

nav ul li {
  margin: 0; /* Remove a margem para manter a mesma largura */
  position: relative;
  width: 100%; /* Garante que o li ocupe toda a largura */
  font-size: 16px; /* Define o tamanho da fonte para todos os itens de menu e submenus */
}

nav ul li ul {
  display: none;
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: 0;
  background-color: #fff; /* Fundo branco para submenus */
  color: #404040; /* Cor da escrita dos submenus */
  font-size: 16px; /* Define o tamanho da fonte para submenus */
}

nav ul li.active > ul {
  display: block;
  max-height: 500px; /* Valor alto suficiente para acomodar todos os itens */
}

nav ul li a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px; /* Adiciona padding para todos os itens, garantindo que eles comecem no mesmo ponto */
  font-size: 16px; /* Define o tamanho da fonte dos links */
}

nav ul li a:hover {
  opacity: 0.8; /* Adiciona um efeito de hover com 20% de redução de opacidade */
}

/* Em styles.js */

nav ul li.active {
  background-color: #73829a; /* Altera a cor de fundo do item ativo */
}

.menu-toggle {
  cursor: pointer;
  display: block;
  margin: 0;
  overflow: hidden; /* Impede o texto de ultrapassar o contêiner */
  white-space: nowrap; /* Impede que o texto quebre em várias linhas */
  font-size: 16px; /* Define o tamanho da fonte para os toggles */
}

.menu-toggle::after {
  content: '▶'; /* Ou algum outro símbolo indicativo */
  font-size: 12px; /* Reduz o tamanho da fonte do ícone */
  display: inline-block;
  margin-left: 5px;
  transition: transform 0.3s ease;
}

nav ul li.active > .menu-toggle::after {
  transform: rotate(90deg);
}

.content {
  margin-left: 275px;
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

/* Estilos para os itens top1 */
nav ul > li > .menu-toggle {
  background-color: #fff;
  color: #404040;
  font-weight: bold;
  padding: 10px; /* Adiciona padding para uma melhor visualização */
}

nav ul li.active {
  background-color: #bcbcbc;
}




`;

module.exports = css;
