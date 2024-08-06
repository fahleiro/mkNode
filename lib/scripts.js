const expandMenuOptions = `
  document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.menu-toggle');

    toggles.forEach(toggle => {
      toggle.setAttribute('data-fulltext', toggle.textContent);
      toggle.addEventListener('click', () => {
        const parentLi = toggle.parentElement;
        const depth = toggle.getAttribute('data-depth');
        const topParent = parentLi.closest('ul').previousElementSibling;

        // Função para remover a classe 'active' e o background de um item e seus filhos
        const closeItemAndDescendants = (item) => {
          item.classList.remove('active');
          item.style.backgroundColor = ''; // Remove o background
          item.querySelectorAll('li').forEach(descendant => {
            descendant.classList.remove('active');
            descendant.style.backgroundColor = ''; // Remove o background
          });
        };

        // Fecha outros itens do mesmo nível e seus submenus, exceto se pertencem ao mesmo pai
        document.querySelectorAll(\`li .menu-toggle[data-depth="\${depth}"]\`).forEach(item => {
          const itemParent = item.parentElement.closest('ul').previousElementSibling;
          if (item !== toggle && itemParent !== topParent) {
            closeItemAndDescendants(item.parentElement);
          }
        });

        // Alterna o item clicado
        parentLi.classList.toggle('active');

        // Define o background para o item expandido e seus descendentes
        if (parentLi.classList.contains('active')) {
          parentLi.style.backgroundColor = '#bcbcbc';
          parentLi.querySelectorAll('li').forEach(descendant => {
            descendant.style.backgroundColor = '#bcbcbc';
          });
        } else {
          parentLi.style.backgroundColor = '';
          parentLi.querySelectorAll('li').forEach(descendant => {
            descendant.style.backgroundColor = '';
          });
        }
      });
    });

    // Atualize a classe 'active' do item de menu baseado na URL
    const currentUrl = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
      if (link.getAttribute('href') === currentUrl) {
        link.parentElement.classList.add('active');
        link.parentElement.style.backgroundColor = '#bcbcbc'; // Adiciona o background ao item ativo

        link.parentElement.parentElement.parentElement.classList.add('active'); // Expande o submenu pai
        link.parentElement.parentElement.parentElement.style.backgroundColor = '#bcbcbc'; // Adiciona o background ao submenu pai
      }
    });

    // Define o background para os menus de nível superior ao carregar a página
    document.querySelectorAll('nav ul > li.active').forEach(li => {
      li.style.backgroundColor = '#bcbcbc';
    });

    // Implementar a funcionalidade de pesquisa
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      document.querySelectorAll('nav ul li').forEach(li => {
        const text = li.textContent.toLowerCase();
        if (text.includes(filter)) {
          li.style.display = '';
        } else {
          li.style.display = 'none';
        }
      });
    });
  });
`;

module.exports = expandMenuOptions;
