// --------------------header blur--------------------

const header = document.querySelector("header")
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
});

// --------------------header humburger--------------------
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header__menu');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};