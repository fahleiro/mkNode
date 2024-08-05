const css = `
body { 
  font-family: Arial, sans-serif; 
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
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto; /* Adiciona rolagem vertical */
}

nav .logo {
  font-family: 'Courier New', monospace;
  font-size: 24px; /* Tamanho da fonte */
  font-weight: bold;
  margin-bottom: 20px; /* Espaçamento abaixo da logo */
  cursor: default;
}

nav .search-bar {
  margin-top: 20px;
  margin-bottom: 20px;
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
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: 0;
}
nav ul li.active > ul {
  display: block;
  max-height: 500px; /* Valor alto suficiente para acomodar todos os itens */
}
nav ul li a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 5px;
}
.menu-toggle {
  cursor: pointer;
  display: block;
  margin: 0;
  overflow: hidden; /* Impede o texto de ultrapassar o contêiner */
  white-space: nowrap; /* Impede que o texto quebre em várias linhas */
}
.menu-toggle::after {
  content: '▶'; /* Ou algum outro símbolo indicativo */
  display: inline-block;
  margin-left: 5px;
  transition: transform 0.3s ease;
}
nav ul li.active > .menu-toggle::after {
  transform: rotate(90deg);
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
