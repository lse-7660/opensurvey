// gsap.registerPlugin(ScrollTrigger);

// intro-animation
// var tl = gsap.timeline();
// tl.fromTo(".txt-stroke", { y: "-13vw" }, { y: "8vw", duration: 0.6, ease: "expo.out" }, 0.1);
// tl.to(".txt-stroke", { y: "-13vw", duration: 0.2 }, ">");
// tl.to(".txt-fill", { y: "-22vw", duration: 0.4 }, "<+0.1");
// tl.to(".txt-fill", { y: "-13vw", duration: 0.2 }, ">+0.2");
// tl.to(".txt-fill", { letterSpacing: "30px", duration: 1, ease: "expo.out" }, ">+0.3");
// tl.to(".txt-fill2", { letterSpacing: "30px", duration: 1.6, ease: "expo.out" }, "<");
// tl.to(".bg-fill", { "--clip": "100vh", duration: 1.6, ease: "expo.out" }, "<");
// tl.to(".intro-animation", { backgroundColor: "#ffffff", duration: 0.1 }, "<+0.1");
// tl.to(".txt-fill2", { letterSpacing: "0", color: "black", duration: 0.1 });
// tl.to(".intro-animation", { display: "none" });
// tl.to(".intro__content", { display: "block" }, "<+0.5");
// tl.to(".inner-intro", { gap: "10vh", duration: 1.2 }, "<");
// tl.to(".intro", { height: "60vh", duration: 1, ease: "expo.out" }, ">+0.5");

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
  .to(".txt-fill", { y: txtFillEndY, duration: 0.2 }, ">+0.2")
  .to(".txt-fill", { letterSpacing: letterSpacingValue, duration: 1, ease: "expo.out" }, ">+0.3")
  .to(".txt-fill2", { letterSpacing: letterSpacingValue, duration: 1.6, ease: "expo.out" }, "<")
  .to(".bg-fill", { "--clip": "100vh", duration: 1.6, ease: "expo.out" }, "<")
  .to(".intro-animation", { backgroundColor: "#ffffff", duration: 0.1 }, "<+0.1")
  .to(".txt-fill2", { letterSpacing: "0", color: "black", duration: 0.1 })
  .to(".intro-animation", { display: "none" })
  .to(".intro__content", { display: "block" }, "<+0.5")
  .to(".inner-intro", { gap: "10vh", duration: 1.2 }, "<")
  .to(".intro", { height: "60vh", duration: 1, ease: "expo.out" }, ">+0.5");

// 뷰포트 변경 시 타임라인 재설정 (optional)
window.addEventListener("resize", function () {
  if ((window.innerWidth >= 1024 && !isLargeViewport) || (window.innerWidth < 1024 && isLargeViewport)) {
    tl.invalidate().restart(); // 타임라인 초기화 후 다시 실행
  }
});
