// styles.js
const css = `
  body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
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
    overflow: hidden; /* Impede o texto de ultrapassar o contêiner */
    text-overflow: ellipsis; /* Adiciona '...' no final do texto cortado */
    white-space: nowrap; /* Impede que o texto quebre em várias linhas */
  }
  .menu-toggle:hover::after {
    content: attr(data-fulltext); /* Mostra o texto completo no tooltip */
    position: absolute;
    left: 100%;
    white-space: nowrap;
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    z-index: 1000;
    display: block;
  }
  .content {
    margin-left: 220px;
    padding: 20px;
  }
`;

module.exports = css;
