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

// section 5
let carousel = document.querySelector(".contenu_testimonials");
let carousel_item = document.querySelectorAll(".carousel_item");
let btn = document.querySelector("#section_5").querySelectorAll("button");

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

//section 5
btn.forEach(elements => {
    elements.addEventListener("click",(e)=>{
        if (e.target ==  btn[0]){
            btn.forEach(element => {
                if(element.className.includes("actif")){
                    if(element == btn[1]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }else if (element == btn[2]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }else if (element == btn[3]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }else if (element == btn[4]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }
                }
            })
        }
        if (e.target ==  btn[1]){
            btn.forEach(element => {
                if(element.className.includes("actif")){
                    if(element == btn[0]){
                        carousel.scrollLeft -= carousel.clientWidth / 3
                    }else if (element == btn[2]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }else if (element == btn[3]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }else if (element == btn[4]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }
                }
            })
        }
        if (e.target ==  btn[2]){
            btn.forEach(element => {
                if(element.className.includes("actif")){
                    if(element == btn[0]){
                        carousel.scrollLeft -= carousel.clientWidth / 3
                    }else if (element == btn[1]){
                        carousel.scrollLeft -= carousel.clientWidth / 3
                    }else if (element == btn[3]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }else if (element == btn[4]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }
                }
            })
        }
        if (e.target ==  btn[3]){
            btn.forEach(element => {
                if(element.className.includes("actif")){
                    if(element == btn[0]){
                        carousel.scrollLeft -= carousel.clientWidth / 3
                    }else if (element == btn[1]){
                        carousel.scrollLeft -= carousel.clientWidth / 3
                    }else if (element == btn[2]){
                        carousel.scrollLeft -= carousel.clientWidth / 3
                    }else if (element == btn[4]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }
                }
            })
        }
        if (e.target ==  btn[4]){
            btn.forEach(element => {
                if(element.className.includes("actif")){
                    if(element == btn[0]){
                        carousel.scrollLeft -= carousel.clientWidth / 3 
                    }else if (element == btn[1]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }else if (element == btn[2]){
                        carousel.scrollLeft += carousel.clientWidth / 3
                    }else if (element == btn[3]){
                        carousel.scrollLeft -= carousel.clientWidth / 3
                    }
                }
            })
        }
    })
})


