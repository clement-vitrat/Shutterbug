const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const menu = $(".menu");
const fermeture = $(".fermeture");
const menuTel = $(".tel");

menu.addEventListener("click", () => {
  menuTel.classList.toggle("show");
  document.body.style.overflow = menuTel.classList.contains("show") ? "hidden" : "auto";
});

fermeture.addEventListener("click", () => {
  menuTel.classList.remove("show");
  document.body.style.overflow = "auto";
});

const activePage = window.location.pathname;
const links = $$(".link");

links.forEach((link) => {
  link.classList.toggle("active", (activePage === "/" && link.href.includes("index")) || link.href.includes(activePage));
});

const nav = $("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 0);
});





document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});