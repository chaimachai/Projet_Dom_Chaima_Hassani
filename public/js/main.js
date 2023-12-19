//.. Variables
// body
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

// section 6
let h4 = document.querySelector(".h4").querySelectorAll("h4");
let tabs = document.querySelectorAll(".tabs");

// section 7
let h2 = document.querySelector(".cards_7").querySelectorAll("h2");
let btn_oval = document.querySelector(".oval");
let p_month = document.querySelector(".p_month");
let p_year = document.querySelector(".p_year")
let month = true

// section 8
let texte_accordion = document.querySelectorAll(".texte_accordion");
let div_accordion = document.querySelectorAll(".accordion")

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
                if(element.className.includes("active")){
                    if(element.className.includes("btn2")){
                        carousel.scrollLeft -= carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn3")){
                        carousel.scrollLeft -= 2*carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn4")){
                        carousel.scrollLeft -= 3*carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn5")){
                        carousel.scrollLeft -= 4*carousel.clientWidth / 3
                        element.classList.remove("active")
                    }
                }
            })
        }
        if (e.target ==  btn[1]){
            btn.forEach(element => {
                if(element.className.includes("active")){
                    if(element.className.includes("btn1")){
                        carousel.scrollLeft += carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn3")){
                        console.log("test3");
                        carousel.scrollLeft -= carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn4")){
                        console.log("test4");
                        carousel.scrollLeft -= 2*carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn5")){
                        console.log("test5");
                        carousel.scrollLeft -= 3*carousel.clientWidth / 3
                        element.classList.remove("active")
                    }
                }
            })
        }
        if (e.target ==  btn[2]){
            btn.forEach(element => {
                if(element.className.includes("active")){
                    if(element.className.includes("btn1")){
                        carousel.scrollLeft += 2*carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn2")){
                        carousel.scrollLeft += carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn4")){
                        carousel.scrollLeft -= carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn5")){
                        carousel.scrollLeft -= 2*carousel.clientWidth / 3
                        element.classList.remove("active")
                    }
                }
            })
        }
        if (e.target ==  btn[3]){
            btn.forEach(element => {
                if(element.className.includes("active")){
                    if(element.className.includes("btn1")){
                        carousel.scrollLeft += 3*carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn2")){
                        carousel.scrollLeft += 2*carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn3")){
                        carousel.scrollLeft += carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn5")){
                        carousel.scrollLeft -= carousel.clientWidth / 3
                        element.classList.remove("active")
                    }
                }
            })
        }
        if (e.target ==  btn[4]){
            btn.forEach(element => {
                if(element.className.includes("active")){
                    if(element.className.includes("btn1")){
                        carousel.scrollLeft += 4*carousel.clientWidth / 3 
                        element.classList.remove("active")
                    }else if (element.className.includes("btn2")){
                        carousel.scrollLeft -= 3*carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn3")){
                        carousel.scrollLeft -= 2*carousel.clientWidth / 3
                        element.classList.remove("active")
                    }else if (element.className.includes("btn4")){
                        carousel.scrollLeft += carousel.clientWidth / 3
                        element.classList.remove("active")
                    }
                }
            })
        }
        e.target.classList.add("active")
    })
})

//section 6
h4.forEach(element => {
    element.addEventListener("click",()=>{
        tabs.forEach(element =>{
            element.classList.add("none");
        })
        document.querySelector(`.div_${element.className}`).classList.remove("none");
    })
})

//section 7
btn_oval.addEventListener("click",()=>{
    if(month){
        h2.forEach(element => {
            element.innerHTML = element.innerHTML*10;
        })
        month = false;
        btn_oval.firstElementChild.classList.remove("month");
        btn_oval.firstElementChild.classList.add("year");
        p_month.classList.remove("actif");
        p_year.classList.add("actif");
    }else{
        h2.forEach(element => {
            element.innerHTML = element.innerHTML/10;
        })
        month = true;
        btn_oval.firstElementChild.classList.remove("year");
        btn_oval.firstElementChild.classList.add("month");
        p_month.classList.add("actif");
        p_year.classList.remove("actif");
    }
})

// section 8
div_accordion.forEach(element => {
    element.addEventListener("click",()=>{
        div_accordion.forEach(elements => {
            if(elements.className.includes("actif")){
                if(element != elements)
                elements.classList.remove("actif");
                elements.classList.add("actifno");
            }
        })
        if (element.className.includes("actif")){
            element.classList.add("actifno")
            element.classList.remove("actif");
        }else{
            element.classList.remove("actifno")
            element.classList.add("actif");
        }
    })
})
