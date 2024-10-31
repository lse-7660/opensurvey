// gsap.registerPlugin(ScrollTrigger);

// intro-animation
var tl = gsap.timeline();
tl.fromTo(".txt-stroke", { y: "-13vw" }, { y: "8vw", duration: 0.6, ease: "expo.out" }, 0.5);
tl.to(".txt-stroke", { y: "-13vw", duration: 0.38 }, ">");
tl.to(".txt-fill", { y: "-20vw", duration: 0.6 }, "<+0.1");
tl.to(".txt-fill", { y: "-13vw", duration: 0.2 }, ">+0.2");
tl.to(".txt-fill", { letterSpacing: "30px", duration: 1, ease: "expo.out" }, ">+0.3");
tl.to(".txt-fill", { letterSpacing: "0", scale: 1, duration: 0.1 }, ">+0.2");
