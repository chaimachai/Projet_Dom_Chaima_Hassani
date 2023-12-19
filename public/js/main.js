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

// button section about et pricing 
let btn_anim = document.querySelectorAll(".animation");

// section services
let card_service = document.querySelectorAll(".card_service");

// section testimonials
let carousel = document.querySelector(".contenu_testimonials");
let carousel_item = document.querySelectorAll(".carousel_item");
let btn = document.querySelector("#testimonials").querySelectorAll("button");

// section current_tech
let h4 = document.querySelector(".h4").querySelectorAll("h4");
let tabs = document.querySelectorAll(".tabs");

// section pricing
let h2 = document.querySelector(".cards_7").querySelectorAll("h2");
let btn_oval = document.querySelector(".oval");
let p_month = document.querySelector(".p_month");
let p_year = document.querySelector(".p_year")
let month = true

// section faq
let texte_accordion = document.querySelectorAll(".texte_accordion");
let div_accordion = document.querySelectorAll(".accordion");
let span_chevron = document.querySelectorAll(".chevron_a");

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
        element.style.backgroundColor= "white";
        element.style.color = "black";
    })
})

//section testimonials
btn.forEach(elements => {
    elements.addEventListener("click",(e)=>{
        if (e.target ==  btn[0]){
            btn.forEach(element => {
                if(element.className.includes("active")){
                    if(element.className.includes("btn2")){
                        carousel.scrollLeft -= carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn3")){
                        carousel.scrollLeft -= 2*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn4")){
                        carousel.scrollLeft -= 3*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn5")){
                        carousel.scrollLeft -= 4*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }
                }
            })
        }
        if (e.target ==  btn[1]){
            btn.forEach(element => {
                if(element.className.includes("active")){
                    if(element.className.includes("btn1")){
                        carousel.scrollLeft += carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn3")){
                        console.log("test3");
                        carousel.scrollLeft -= carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn4")){
                        console.log("test4");
                        carousel.scrollLeft -= 2*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn5")){
                        console.log("test5");
                        carousel.scrollLeft -= 3*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }
                }
            })
        }
        if (e.target ==  btn[2]){
            btn.forEach(element => {
                if(element.className.includes("active")){
                    if(element.className.includes("btn1")){
                        carousel.scrollLeft += 2*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn2")){
                        carousel.scrollLeft += carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn4")){
                        carousel.scrollLeft -= carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn5")){
                        carousel.scrollLeft -= 2*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }
                }
            })
        }
        if (e.target ==  btn[3]){
            btn.forEach(element => {
                if(element.className.includes("active")){
                    if(element.className.includes("btn1")){
                        carousel.scrollLeft += 3*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn2")){
                        carousel.scrollLeft += 2*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn3")){
                        carousel.scrollLeft += carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn5")){
                        carousel.scrollLeft -= carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }
                }
            })
        }
        if (e.target ==  btn[4]){
            btn.forEach(element => {
                if(element.className.includes("active")){
                    if(element.className.includes("btn1")){
                        carousel.scrollLeft += 4*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn2")){
                        carousel.scrollLeft -= 3*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn3")){
                        carousel.scrollLeft -= 2*carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }else if (element.className.includes("btn4")){
                        carousel.scrollLeft += carousel_item[0].clientWidth
                        element.classList.remove("active")
                    }
                }
            })
        }
        e.target.classList.add("active")
    })
})

//section current_tech
h4.forEach(element => {
    element.parentElement.addEventListener("click",()=>{
        tabs.forEach(element =>{
            element.classList.add("none");
        })
        h4.forEach(hr => {
            hr.nextElementSibling.classList.remove("actif");
        })
        document.querySelector(`.div_${element.className}`).classList.remove("none");
        element.nextElementSibling.classList.add("actif");
    })
})

//section pricing
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
