var nav = document.querySelector("nav");
var toggle = document.querySelector(".toggler");
var overlay = document.querySelector(".overlay");
var con = document.querySelector(".subContainer");
var subMenu = document.querySelector(".subMenu");
var icon = document.querySelector(".icon");
toggle.addEventListener("click", function() {
    nav.classList.toggle("open");
    overlay.classList.toggle("overlayOpen");
});
overlay.addEventListener("click", function() {
    nav.classList.remove("open");
    this.classList.remove("overlayOpen");
    subMenu.classList.remove("subMenuOpen");
    icon.classList.remove("rotate");
});
con.addEventListener("click", function() {
    subMenu.classList.toggle("subMenuOpen");
    icon.classList.toggle("rotate");
    overlay.classList.toggle("overlayOpen");
});