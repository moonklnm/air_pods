const menu = document.querySelector(".menu-burger");

menu.addEventListener("click", (e) => {
  document.querySelector("nav").classList.toggle("open");
});
