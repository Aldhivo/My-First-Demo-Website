const eye = document.getElementById("eye");
const password = document.getElementById("password");

eye.addEventListener("click", function(){
    if(password.type == "password"){
        password.type = "text";
        eye.classList.add("fa-eye");
    }
    
    else{
        password.type = "password";
        eye.classList.remove("fa-eye");
    }
})

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const nav = document.getElementById("nav");

openMenu.addEventListener("click", function(){
    nav.classList.toggle("hidden");
})

closeMenu.addEventListener("click", function(){
    nav.classList.toggle("hidden");
})

const guest = document.getElementById("guest");

guest.addEventListener("click", function(){
    alert("kamu login sebagai guest");
})