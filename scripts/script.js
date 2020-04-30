
const survey_btn = document.querySelector(".hero_button");
const trip_form = document.querySelector(".trip_form");
const nav_btns = document.querySelectorAll(".nav_btn");

survey_btn.addEventListener("click",()=>{
    toggleTween(form_tl)
})

const getDestination = (e) =>{
    e.preventDefault();
    let destination_index = e.target.getAttribute("data-destination");
    let current_index = e.target.getAttribute("data-current");
    // console.log(destination_index)
    let newEl = document.querySelector(`div[data-index="${destination_index}"]`)
    let currentEl = document.querySelector(`div[data-index="${current_index}"]`)
    console.log(currentEl)
    hideUi(currentEl)
    console.log("Hide the ")
    showUi(newEl)
} 

const hideUi = (element) =>{
    gsap.to(element, 0.3, {autoAlpha: 0, y: -20})
}
const showUi = (element) =>{
    gsap.to(element, 0.2, {autoAlpha: 0, y: 20}, "+=1")
    gsap.to(element, 0.5, {autoAlpha: 1, y: 0}, "+=1.3")

}
nav_btns.forEach(nav_btn =>{
    nav_btn.addEventListener("click", getDestination)
})