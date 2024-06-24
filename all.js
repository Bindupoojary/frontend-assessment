const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const closeicon = document.getElementById('close');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

closeicon.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const submenu = toggle.nextElementSibling;
    submenu.classList.toggle('active');
  });
});
