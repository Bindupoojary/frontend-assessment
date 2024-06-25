const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');
const closeicon = document.getElementById('close');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

closeicon.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.querySelectorAll('nav > ul > li').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const submenu = toggle.querySelector('ul');
    submenu.classList.toggle('active');
  });
});
