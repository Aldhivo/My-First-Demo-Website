const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const nav = document.getElementById("nav");

openMenu.addEventListener("click", function(){
    nav.classList.toggle("hidden");
})

closeMenu.addEventListener("click", function(){
    nav.classList.toggle("hidden");
})