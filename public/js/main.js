//.. Variables
// body
let body = document.body;

// header
let header = document.querySelector("header");
let btn_header = header.querySelector("button");

// nav
let menu_burger = document.querySelector(".menu_burger");
let nav_burger = document.querySelector(".nav");
let li_dropdown = document.querySelector(".li_dropdown");
let dropdown = document.querySelector(".dropdown");
let nav = document.querySelector("nav");
let h3 = nav.querySelectorAll("h3");
let btn_nav = nav.querySelector(".started");
let h3S;

//darkmode
let btn_dark = document.querySelector(".dark_mode");

// button section about et pricing 
let btn_anim = document.querySelectorAll(".animation");

// section about
let about = document.querySelector("#about");

// section counts
let counts = document.querySelector("#counts");

// section services
let services = document.querySelector("#services");
let card_service = document.querySelectorAll(".card_service");

// section features
let features = document.querySelector("#features");
// section testimonials
let testimonials = document.querySelector("#testimonials");
let carous = document.querySelector(".carousel")
let carousel = document.querySelector(".contenu_testimonials");
let carousel_item = document.querySelectorAll(".carousel_item");
let item = document.querySelectorAll(".item");
let btn = document.querySelector("#testimonials").querySelectorAll("button");
let div_car = document.querySelectorAll(".div_car");

// section current_tech
let current_tech = document.querySelector("#current_tech");
let h4 = document.querySelector(".h4").querySelectorAll("h4");
let tabs = document.querySelectorAll(".tabs");

// section pricing
let pricing = document.querySelector("#pricing");
let h2 = document.querySelector(".cards_7").querySelectorAll("h2");
let btn_oval = document.querySelector(".oval");
let p_month = document.querySelector(".p_month");
let p_year = document.querySelector(".p_year");
let card_7 = document.querySelectorAll(".card_7");
let btn_7 = document.querySelector(".btn_7");
let month = true;

// section faq
let faq = document.querySelector("#faq");
let texte_accordion = document.querySelectorAll(".texte_accordion");
let div_accordion = document.querySelectorAll(".accordion");
let span_chevron = document.querySelectorAll(".chevron_a");


//.. Events

// header
btn_header.addEventListener("mouseover",()=>{
    btn_header.style.backgroundColor = "white";
    btn_header.style.color = "rgb(98, 86, 220)";
})
btn_header.addEventListener("mouseleave",()=>{
    btn_header.style.backgroundColor = "transparent";
    btn_header.style.color = "white";
})

// nav
menu_burger.addEventListener("click",()=>{
    nav_burger.classList.toggle("nav_burger");
    nav_burger.classList.toggle("nav_none");
})
li_dropdown.addEventListener("click",()=>{
    dropdown.classList.toggle("none");
})
// document.addEventListener("scroll",()=>{
//     if(window.scrollY > 0){
//         h3.forEach(element => {
//             element.classList.remove("actif");
//         })
//         nav.querySelector(".h3_header").classList.add("actif");
//     }if (window.scrollY > header.clientHeight && window.scrollY < (about.clientHeight + header.clientHeight)){
//         h3.forEach(element => {
//             element.classList.remove("actif");
//         })
//         nav.querySelector(".h3_about").classList.add("actif");
//     }if (window.scrollY > (about.clientHeight + header.clientHeight + counts.clientHeight) && window.scrollY < (about.clientHeight + header.clientHeight + services.clientHeight + counts.clientHeight) ){
//         h3.forEach(element => {
//             element.classList.remove("actif");
//         })
//         nav.querySelector(".h3_services").classList.add("actif");
//     }
// })
document.addEventListener("scroll",()=>{
    if(window.scrollY > header.clientHeight){
        nav.style.background =  "linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%)"
    }else{
        nav.style.background = ""
    }
})
h3.forEach(element => {
    element.addEventListener("mouseover",()=>{
        if (element != document.querySelector('.h3_header')){
            element.classList.add("actif1");
            element.firstElementChild.classList.add("actif1");
            element.nextElementSibling.classList.add("actif");
        }
    })
})
h3.forEach(element => {
    element.addEventListener("mouseleave",()=>{
        if (element != document.querySelector('.h3_header')){
            element.classList.remove("actif1");
            element.firstElementChild.classList.remove("actif1");
            element.nextElementSibling.classList.remove("actif");
        }
    })
})
btn_nav.addEventListener("mouseover",()=>{
    btn_nav.style.borderColor = "white"
})
btn_nav.addEventListener("mouseleave",()=>{
    btn_nav.style.borderColor = "rgba(255,255,255,0.5)"
})

// darkmode 
btn_dark.addEventListener("click",()=>{
    btn_dark.classList.toggle("darkM")
    body.classList.toggle("darkM")
    if(btn_dark.className.includes("darkM")){
        btn_dark.firstElementChild.className = "gg-moon"
    }else{
        btn_dark.firstElementChild.className = "gg-sun"
    }
})

// button section about et pricing 
btn_anim.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.style.background = "linear-gradient(180deg, rgb(86, 58, 250) 0%, rgb(116, 15, 214) 100%)"
    })
})
btn_anim.forEach(element => {
    element.addEventListener("mouseleave",()=>{
        element.style.background = "linear-gradient(45deg, rgb(86, 58, 250) 0%, rgb(116, 15, 214) 100%)"
    })
})

// section services
card_service.forEach(element => {
    element.addEventListener("mouseover",()=>{
        switch(element){
            case card_service[0]:
                element.style.backgroundColor = "rgb(61, 165, 255)"
                break
            case card_service[1]:
                element.style.backgroundColor = "rgb(255, 162, 106)"
                break
            case card_service[2]:
                element.style.backgroundColor = "rgb(227, 0, 93)"
                break
            case card_service[3]:
                element.style.backgroundColor = "rgb(254, 178, 38)"
                break
            case card_service[4]:
                element.style.backgroundColor = "rgb(253, 77, 36)"
                break
            case card_service[5]:
                element.style.backgroundColor = "rgb(16, 213, 200)"
                break
        }
        element.querySelector("h4").style.color = "white";
        element.style.color = "white";
        element.firstElementChild.style.color = "white";
    })
})
card_service.forEach(element => {
    element.addEventListener("mouseleave",()=>{
        switch(element){
            case card_service[0]:
                element.firstElementChild.style.color = "rgb(61, 165, 255)"
                break
            case card_service[1]:
                element.firstElementChild.style.color = "rgb(255, 162, 106)"
                break
            case card_service[2]:
                element.firstElementChild.style.color = "rgb(227, 0, 93)"
                break
            case card_service[3]:
                element.firstElementChild.style.color = "rgb(254, 178, 38)"
                break
            case card_service[4]:
                element.firstElementChild.style.color = "rgb(253, 77, 36)"
                break
            case card_service[5]:
                element.firstElementChild.style.color = "rgb(16, 213, 200)"
                break
        }
        element.querySelector("h4").style.color = "rgb(45,73,100)";
        // if (body.className.includes("darkM")){
        //     element.style.backgroundColor= "rgb(132, 113, 157)";
        // }else{
        //     element.style.backgroundColor= "white";
        // }
        element.style.backgroundColor= "white";
        element.style.color = "black";
    })
})

// section testimonials
// let largeur = carousel_item[0].clientWidth;
// btn.forEach(elements => {
//     elements.addEventListener("click",(e)=>{
//         if (e.target ==  btn[0]){
//             btn.forEach(element => {
//                 if(element.className.includes("active")){
//                     if(element.className.includes("btn2" 1)){
//                         carousel.scrollLeft -= largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn3" 2)){
//                         carousel.scrollLeft -= 2*largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn4" 3)){
//                         carousel.scrollLeft -= 3*largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn5"4)){
//                         carousel.scrollLeft -= 4*largeur
//                         element.classList.remove("active")
//                     }
//                 }
//             })
//         }
//         if (e.target ==  btn[1]){
//             btn.forEach(element => {
//                 if(element.className.includes("active")){
//                     if(element.className.includes("btn1" 0)){
//                         carousel.scrollLeft += largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn3" 2)){
//                         console.log("test3");
//                         carousel.scrollLeft -= largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn4" 3)){
//                         console.log("test4");
//                         carousel.scrollLeft -= 2*largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn5" 4)){
//                         console.log("test5");
//                         carousel.scrollLeft -= 3*largeur
//                         element.classList.remove("active")
//                     }
//                 }
//             })
//         }
//         if (e.target ==  btn[2]){
//             btn.forEach(element => {
//                 if(element.className.includes("active")){
//                     if(element.className.includes("btn1" 0)){
//                         carousel.scrollLeft += 2*largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn2" 1)){
//                         carousel.scrollLeft += largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn4" 3)){
//                         carousel.scrollLeft -= largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn5" 4)){
//                         carousel.scrollLeft -= 2*largeur
//                         element.classList.remove("active")
//                     }
//                 }
//             })
//         }
//         if (e.target ==  btn[3]){
//             btn.forEach(element => {
//                 if(element.className.includes("active")){
//                     if(element.className.includes("btn1")){
//                         carousel.scrollLeft += 3*largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn2")){
//                         carousel.scrollLeft += 2*largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn3")){
//                         carousel.scrollLeft += largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn5")){
//                         carousel.scrollLeft -= largeur
//                         element.classList.remove("active")
//                     }
//                 }
//             })
//         }
//         if (e.target ==  btn[4]){
//             btn.forEach(element => {
//                 if(element.className.includes("active")){
//                     if(element.className.includes("btn1")){
//                         carousel.scrollLeft += 4*largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn2")){
//                         carousel.scrollLeft += 3*largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn3")){
//                         carousel.scrollLeft += 2*largeur
//                         element.classList.remove("active")
//                     }else if (element.className.includes("btn4")){
//                         carousel.scrollLeft += largeur
//                         element.classList.remove("active")
//                     }
//                 }
//             })
//         }
//         e.target.classList.add("active")
//     })
// })

btn.forEach(elements => {
    elements.addEventListener("click",(e)=>{
        btn.forEach(element => {
            if(element.className.includes("active") && element != e.target){
                carousel.scrollLeft += (Array.from(btn).indexOf(e.target) - Array.from(btn).indexOf(element))*carousel_item[0].clientWidth
                element.classList.remove("active")
                e.target.classList.add("active")
            }
        })
    })
})

//section current_tech
h4.forEach(element => {
    element.parentElement.addEventListener("click",()=>{
        tabs.forEach(element =>{
            element.classList.add("none");
            element.classList.remove("actif");
        })
        h4.forEach(hr => {
            hr.nextElementSibling.classList.remove("actif");
        })
        document.querySelector(`.div_${element.className}`).classList.remove("none");
        document.querySelector(`.div_${element.className}`).classList.add("actif");
        element.nextElementSibling.classList.add("actif");
    })
})

//section pricing
btn_oval.addEventListener("click",()=>{
    if(month){
        h2.forEach(element => {
            element.innerHTML = element.innerHTML*10;
            element.nextElementSibling.innerHTML = "/year"
        })
        month = false;
        btn_oval.firstElementChild.classList.remove("month");
        btn_oval.firstElementChild.classList.add("year");
        p_month.classList.remove("actif");
        p_year.classList.add("actif");
    }else{
        h2.forEach(element => {
            element.innerHTML = element.innerHTML/10;
            element.nextElementSibling.innerHTML = "/month"
        })
        month = true;
        btn_oval.firstElementChild.classList.remove("year");
        btn_oval.firstElementChild.classList.add("month");
        p_month.classList.add("actif");
        p_year.classList.remove("actif");
    }
})

// section faq
div_accordion.forEach(element => {
    element.addEventListener("click",()=>{
        let chevron = element.firstElementChild.lastElementChild;
        if (chevron.className.includes("fa-chevron-up")){
            element.classList.remove("actif");
            element.classList.add("actifno");
            chevron.classList.remove("fa-chevron-up");
            chevron.classList.add("fa-chevron-down");
        }else{
            div_accordion.forEach(elements => {
                let chevron2 = elements.firstElementChild.lastElementChild;
                elements.classList.remove("actif");
                elements.classList.add("actifno");
                chevron2.classList.remove("fa-chevron-up");
                chevron2.classList.add("fa-chevron-down");
            })
            element.classList.remove("actifno");
            element.classList.add("actif");
            chevron.classList.remove("fa-chevron-down");
            chevron.classList.add("fa-chevron-up");
        }
    })
})
