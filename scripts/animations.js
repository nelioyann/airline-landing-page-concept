var globe_tl = gsap.timeline({ repeat: -1, repeatDelay: 3, defaults: { duration: 1, ease: "power3.Out" } });

globe_tl
.to(".logoImg", 2, {rotate: 360})