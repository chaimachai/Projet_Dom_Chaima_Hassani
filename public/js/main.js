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

// section contact
let contact = document.querySelector("#contact");

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

document.addEventListener("scroll",()=>{
    let pos_about = header.clientHeight - nav.clientHeight;
    let pos_counts = pos_about + about.clientHeight;
    let pos_services = pos_counts + counts.clientHeight;
    let pos_features = pos_services + services.clientHeight;
    let pos_testimonials = pos_features + features.clientHeight;
    let pos_current = pos_testimonials + testimonials.clientHeight;
    let pos_pricing = pos_current + current_tech.clientHeight;
    let pos_faq = pos_pricing + pricing.clientHeight;
    let pos_contact = pos_faq + faq.clientHeight;
    let pos_footer = pos_contact + contact.clientHeight;
    if(window.scrollY < (header.clientHeight - nav.clientHeight)){
        h3.forEach(element => {
            element.firstElementChild.classList.remove("actif");
            element.nextElementSibling.classList.remove("actif");
        })
        nav.querySelector(".h3_header").firstElementChild.classList.add("actif");
        nav.querySelector(".h3_header").nextElementSibling.classList.add("actif");
    }if (window.scrollY > pos_about && window.scrollY < pos_counts){
        h3.forEach(element => {
            element.firstElementChild.classList.remove("actif");
            element.nextElementSibling.classList.remove("actif");
        })
        nav.querySelector(".h3_about").firstElementChild.classList.add("actif");
        nav.querySelector(".h3_about").nextElementSibling.classList.add("actif");
    }if (window.scrollY > pos_counts && window.scrollY < pos_services){
        h3.forEach(element => {
            element.firstElementChild.classList.remove("actif");
            element.nextElementSibling.classList.remove("actif");
        })
    }if (window.scrollY > pos_services && window.scrollY < pos_features){
        h3.forEach(element => {
            element.firstElementChild.classList.remove("actif");
            element.nextElementSibling.classList.remove("actif");
        })
        nav.querySelector(".h3_services").firstElementChild.classList.add("actif");
        nav.querySelector(".h3_services").nextElementSibling.classList.add("actif");
    }if(window.scrollY > pos_features && window.scrollY < pos_testimonials){
    }if(window.scrollY > pos_testimonials && window.scrollY < pos_contact){
        h3.forEach(element => {
            element.firstElementChild.classList.remove("actif");
            element.nextElementSibling.classList.remove("actif");
        })
    }if(window.scrollY > pos_contact && window.scrollY < pos_footer){
        h3.forEach(element => {
            element.firstElementChild.classList.remove("actif");
            element.nextElementSibling.classList.remove("actif");
        })
        nav.querySelector(".h3_contact").firstElementChild.classList.add("actif");
        nav.querySelector(".h3_contact").nextElementSibling.classList.add("actif");
    }if (window.scrollY > pos_footer){
        h3.forEach(element => {
            element.firstElementChild.classList.remove("actif");
            element.nextElementSibling.classList.remove("actif");
        })
    }
})

document.addEventListener("scroll",()=>{
    if(window.scrollY > header.clientHeight - nav.clientHeight){
        nav.style.backgroundColor = "rgba(61, 47, 192, 0.9)"
    }else{
        nav.style.backgroundColor = "transparent";
    }
    if (window.scrollY > (nav.clientHeight + 4* document.querySelector(".btn_top").clientHeight)){
        document.querySelector(".btn_top").classList.remove("none")
    }else{
        document.querySelector(".btn_top").classList.add("none")
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
    element.addEventListener("click",()=>{
        if(element != li_dropdown){
            nav_burger.classList.remove("nav_burger");
            nav_burger.classList.add("nav_none");
            dropdown.classList.add("none");
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
setInterval(() => {
    if(go){
        let index = Array.from(btn).findIndex(element => element.className.includes("active"))
        if(index != Array.from(btn).length - 1){
            btn[index + 1].classList.add("active")
            btn[index].classList.remove("active")
            carousel.scrollLeft += carousel_item[0].clientWidth
        }else{
            carousel.scrollLeft -= (Array.from(btn).length -1)*carousel_item[0].clientWidth
            btn[0].classList.add("active")
            btn[index].classList.remove("active")
        }
    }
}, 3000);
btn.forEach(elements => {
    elements.addEventListener("click",(e)=>{
        btn.forEach(element => {
            if(element.className.includes("active") && element != e.target){
                let indexBtnActif = Array.from(btn).indexOf(element)
                let indexBtnClick = Array.from(btn).indexOf(e.target) 
                carousel.scrollLeft += (indexBtnClick - indexBtnActif)*carousel_item[0].clientWidth
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
