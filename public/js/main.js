//.. Variables

//nav
let menu_burger = document.querySelector(".menu_burger");
let nav_burger = document.querySelector(".nav");
let li_dropdown = document.querySelector(".li_dropdown");
let dropdown = document.querySelector(".dropdown");

//.. Events

// nav
menu_burger.addEventListener("click",()=>{
    nav_burger.classList.toggle("nav_burger");
    nav_burger.classList.toggle("nav_none");
})
li_dropdown.addEventListener("click",()=>{
    dropdown.classList.toggle("none")
})

