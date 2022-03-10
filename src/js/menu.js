const moreOptions = document.querySelector("#bmore");//menu more devices
const bShowMobileLinks = document.querySelector("#bmenu");//boton icono hamburguesa
const mobileMenu = document.querySelector(".links");//menu hamburguesa
const moreMenu = document.querySelector(".more .menu")//menu more

bShowMobileLinks.addEventListener("click", (e)=>{
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (e)=>{
    e.preventDefault();
    moreMenu.classList.toggle("show");
});