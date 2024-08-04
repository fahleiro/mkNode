// scripts.js
const script = `
  document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.menu-toggle');
    toggles.forEach(toggle => {
      toggle.setAttribute('data-fulltext', toggle.textContent);
      toggle.addEventListener('click', () => {
        const parentLi = toggle.parentElement;
        parentLi.classList.toggle('active');
      });
    });
  });
`;

module.exports = script;
