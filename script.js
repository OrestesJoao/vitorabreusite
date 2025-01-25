const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

// Alterna o menu ao clicar no botão hamburguer
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Seleciona todos os links do menu
const links = document.querySelectorAll(".list-efect, .contato-button");

// Fecha o menu ao clicar em qualquer link
links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
