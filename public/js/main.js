//.. Variables
//body
let body = document.body;

// header
let header = document.querySelector("header");

// nav
let menu_burger = document.querySelector(".menu_burger");
let nav_burger = document.querySelector(".nav");
let li_dropdown = document.querySelector(".li_dropdown");
let dropdown = document.querySelector(".dropdown");
let nav = document.querySelector("nav");

//.. Events

// nav
menu_burger.addEventListener("click",()=>{
    nav_burger.classList.toggle("nav_burger");
    nav_burger.classList.toggle("nav_none");
})
li_dropdown.addEventListener("click",()=>{
    dropdown.classList.toggle("none");
    li_dropdown.querySelector("span").classList.toggle("fa-chevron-down");
    li_dropdown.querySelector("span").classList.toggle("fa-chevron-up");
})



