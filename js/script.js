/* Menu */
const coco = (selector) => document.querySelector(selector);
const toto = (selector) => document.querySelectorAll(selector);

const menu = coco(".menu");
const fermeture = coco(".fermeture");
const menuTel = coco(".tel");

menu.addEventListener("click", () => {
  menuTel.classList.toggle("app");
  document.body.style.overflow = menuTel.classList.contains("app") ? "hidden" : "auto";
});

fermeture.addEventListener("click", () => {
  menuTel.classList.remove("app");
  document.body.style.overflow = "auto";
});

const activePage = window.location.pathname;
const links = toto(".link");

links.forEach((link) => {
  link.classList.toggle("active", (activePage === "/" && link.href.includes("index")) || link.href.includes(activePage));
});

const nav = coco("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("block", window.scrollY > 0);
});




/* Enlever la possibilité de faire un clic droit */
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});