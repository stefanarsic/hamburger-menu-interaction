let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");

menuIcon.onclick = function () {
  menuBox.classList.toggle("open-menu");

  if (menuBox.classList.contains("open-menu")) {
    menuIcon.src = "images/close.svg";
  } else {
    menuIcon.src = "images/menu.svg";
  }
};
