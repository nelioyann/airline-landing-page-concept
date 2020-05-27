var globe_tl = gsap.timeline({ repeat: -1, repeatDelay: 10, defaults: { duration: 1, ease: "power3.Out" } });
var form_tl = gsap.timeline({ paused: true, reversed: true, defaults: { duration: 0.3, ease: "power3.Out" } });
var overlay_tl = gsap.timeline({ repeat: -1, repeatDelay: 0, defaults: { duration: 3, ease: "power3.Out" } });

gsap.to(".trip_form", 0.2, {autoAlpha: 0, y: "100vh"})
gsap.to(".form_fields", 0.2, {autoAlpha: 0})
gsap.to(".overlay", {autoAlpha: 0})
gsap.to(".form_fields *", 1, {autoAlpha: 0})

overlay_tl
.to('.wheel_img', {rotation: 360})

form_tl
.to(".hero_overlay", {autoAlpha: 0})
.to(".hero_title", {autoAlpha: 0, y: -20})
    .to(".hero_subtitle", {autoAlpha: 0, y: -20}, "-=0.2")
    .to(".hero_button", {autoAlpha: 0, y: -20}, "-=0.2")
    .to(".trip_form", 1,{ autoAlpha: 1, y: "0vh"})
    .to(".form_fields *", 1, {autoAlpha: 1})
    .to(".logoBrand", {color: "#000"}, "-=1")
    .to(".form_people", {autoAlpha: 1}, "-=1")
    
    // .from(".inputs_wrapper", { autoAlpha: 0, y: 30 })


globe_tl
.to(".logoImg", 2, {rotate: 360})


const toggleTween = (tween) => {
    console.log(tween)
    tween.reversed() ? tween.play() : tween.reverse()

}