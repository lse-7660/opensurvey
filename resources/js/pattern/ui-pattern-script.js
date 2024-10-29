// .all-menu 를 클릭했을 때
// #nav-all 에게 .active 클래스를 추가한다.
$(".all-menu").click(function () {
  $("#nav-all").addClass("active");
});

// #nav-all .close 를 클릭했을 때
// #nav-all 에게 .active 클래스를 제거한다.
$("#nav-all .close").click(function () {
  $("#nav-all").removeClass("active");
});

$(".gnb__depth1 li").click(function () {
  $(this).toggleClass("active");
});

// card-main-2 js 일단 이해는 안되지만 긁어옴
const btns = document.querySelectorAll(".card-main-2-list");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const faqItem = btn.parentNode;
    const isActive = faqItem.classList.contains("active");

    removeActiveClasses();

    if (!isActive) {
      faqItem.classList.add("active");
    }
  });
});

function removeActiveClasses() {
  btns.forEach((btn) => {
    btn.parentNode.classList.remove("active");
  });
}
