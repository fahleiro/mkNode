const expandMenuOptions = `
  document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.menu-toggle');
    toggles.forEach(toggle => {
      toggle.setAttribute('data-fulltext', toggle.textContent);
      toggle.addEventListener('click', () => {
        const parentLi = toggle.parentElement;
        parentLi.classList.toggle('active');
      });
    });

    // Atualize a classe 'active' do item de menu baseado na URL
    const currentUrl = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
      if (link.getAttribute('href') === currentUrl) {
        link.parentElement.classList.add('active');
        link.parentElement.parentElement.parentElement.classList.add('active'); // Expande o submenu pai
      }
    });
  });
`;

module.exports = expandMenuOptions;
