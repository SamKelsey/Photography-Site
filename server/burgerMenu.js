// BURGER MENU

burgerBtn = document.getElementsByClassName("menu-button");
burgerBtn = burgerBtn[0];

burgerMenu = document.querySelector(".burger-menu");

burgerBtn.addEventListener("click", changeMenu);

function changeMenu() {
  if (burgerMenu.style.display == "block") {
    burgerMenu.style.display = "none";
    burgerBtn.classList.remove("change");
  } else {
    burgerMenu.style.display = "block";
    burgerBtn.classList.toggle("change");
  }
}
