// gsap.registerPlugin(ScrollTrigger);

// intro-animation
var tl = gsap.timeline();
tl.fromTo(".txt-stroke", { y: "-13vw" }, { y: "8vw", duration: 0.6, ease: "expo.out" }, 0.1);
tl.to(".txt-stroke", { y: "-13vw", duration: 0.2 }, ">");
tl.to(".txt-fill", { y: "-22vw", duration: 0.4 }, "<+0.1");
tl.to(".txt-fill", { y: "-13vw", duration: 0.2 }, ">+0.2");
tl.to(".txt-fill", { letterSpacing: "30px", duration: 1, ease: "expo.out" }, ">+0.3");
tl.to(".txt-fill2", { letterSpacing: "30px", duration: 1.6, ease: "expo.out" }, "<");
tl.to(".bg-fill", { "--clip": "100vh", duration: 1.6, ease: "expo.out" }, "<");
tl.to(".intro-animation", { backgroundColor: "#ffffff", duration: 0.1 }, "<+0.1");
tl.to(".txt-fill2", { letterSpacing: "0", color: "black", duration: 0.1 });
tl.to(".intro-animation", { display: "none" });
tl.to(".intro__content", { display: "block" }, "<+0.5");
tl.to(".inner-intro", { gap: "10vh", duration: 1.2 }, "<");
tl.to(".intro", { height: "60vh", duration: 1, ease: "expo.out" }, ">+0.5");
