const eye1 = document.getElementById("eye1");
const password = document.getElementById("password");

eye1.addEventListener("click", () =>{
    if(password.type == "password"){
        password.type = "text";
        eye1.classList.add("fa-eye");
    }
    else{
        password.type = "password";
        eye1.classList.remove("fa-eye");
    }
})

const eye2 = document.getElementById("eye2");
const cnfrm_password = document.getElementById("cnfrm-password");

eye2.addEventListener("click", () =>{
    if(cnfrm_password.type == "password"){
        cnfrm_password.type = "text";
        eye2.classList.add("fa-eye");
    }
    else{
        cnfrm_password.type = "password";
        eye2.classList.remove("fa-eye");
    }
})

const button = document.getElementById("button");

button.addEventListener("click", ()=>{
    const message = document.getElementById("message");
    const password2 = document.getElementById("password").value;
    const cnfrm_password2 = document.getElementById("cnfrm-password").value;
    if(password2 != 0){
        if(password2 == cnfrm_password2){
            message.textContent = "password match";
            message.style.color = "#33FF66";
        }
        else{
            message.textContent = "password don't match";
            message.style.color = "#ff0000";
        }
    }

    else{
        alert("password is empty");
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