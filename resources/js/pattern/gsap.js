// gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

// 뷰포트 크기에 따라 `y` 값 설정
var isLargeViewport = window.innerWidth >= 1024;
var txtStrokeStartY = isLargeViewport ? "-10vw" : "-13vw";
var txtStrokeEndY = isLargeViewport ? "6vw" : "8vw";
var txtFillStartY = isLargeViewport ? "-18vw" : "-22vw";
var txtFillEndY = isLargeViewport ? "-10vw" : "-13vw";
var letterSpacingValue = isLargeViewport ? "50px" : "30px";

tl.fromTo(".txt-stroke", { y: txtStrokeStartY }, { y: txtStrokeEndY, duration: 0.6, ease: "expo.out" }, 0.1)
  .to(".txt-stroke", { y: txtStrokeStartY, duration: 0.2 }, ">")
  .to(".txt-fill", { y: txtFillStartY, duration: 0.4 }, "<+0.1")
  .to(".txt-fill", { y: txtFillEndY, duration: 0.1 }, ">+0.2")
  .to(".txt-fill", { letterSpacing: letterSpacingValue, duration: 1, ease: "expo.out" }, ">+0.3")
  .to(".txt-fill2", { letterSpacing: letterSpacingValue, duration: 0.8, ease: "expo.out" }, "<")
  .to(".bg-fill", { "--clip": "100vh", duration: 1.2, ease: "expo.out" }, "<")
  .to(".intro-animation", { backgroundColor: "#ffffff", duration: 0.1 }, "<+0.1")
  .to(".txt-fill2", { letterSpacing: "0", color: "black", duration: 0.1 })
  .to(".intro-animation", { display: "none" })
  .to(".intro__content", { display: "block" }, "<+0.5")
  .to(".inner-intro", { gap: "10vh", duration: 1.2 }, "<");
// .to(".intro", { height: "60vh", duration: 1, ease: "expo.out" }, ">+0.5");

// 뷰포트 변경 시 타임라인 재설정 (optional)
window.addEventListener("resize", function () {
  if ((window.innerWidth >= 1024 && !isLargeViewport) || (window.innerWidth < 1024 && isLargeViewport)) {
    tl.invalidate().restart(); // 타임라인 초기화 후 다시 실행
  }
});

gsap.registerPlugin(ScrollTrigger);

function shrinkCardsOnScroll() {
  const cards = document.querySelectorAll(".card-main-4");
  cards.forEach((card, index) => {
    gsap.to(card, {
      scale: 0.8,
      transformOrigin: "center center",
      backgroundColor: "#555555",
      scrollTrigger: {
        trigger: card,
        start: "top 10%",
        end: "top 0%",
        scrub: true,
        // markers: true,
      },
    });
  });
}

shrinkCardsOnScroll();

function genSectionOnScroll(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: "20px",
      duration: 0.8,
      scrollTrigger: {
        trigger: element,
        start: "top center",
        // end: "+=500",
        markers: true,
      },
    });
  });
}

genSectionOnScroll(".sec-g__label");
genSectionOnScroll(".sec-g__tit");
genSectionOnScroll(".sec-g__desc");
genSectionOnScroll(".sec-g__cont");
