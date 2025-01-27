const backtoTop = document.getElementById("backtoTop");

const checkScroll = () => {
  //   alert("ss");
  let pageYOffset = window.pageYOffset;

  if (pageYOffset !== 0) {
    backtoTop.classList.add("show");
  } else {
    backtoTop.classList.remove("show");
  }
};

function moveBackToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

window.addEventListener("scroll", checkScroll); // 스크롤할 때마다 checkScroll을 실행
backtoTop.addEventListener("click", moveBackToTop);

const slidePrevList = document.getElementsByClassName("slide-prev");

const tranformPrev = (event) => {
  const slidePrev = event.target;
  const slideNext = slidePrev.nextElementSibling;

  //ul태그 선택
  let classList =
    slidePrevList[i].parentElement.parentElement.nextElementSibling;

  let activeLi = classList.getAttribute("data-position");
};
for (let i = 0; i < slidePrevList.length; i++) {
  //ul 태그 선택
  let classList =
    slidePrevList[i].parentElement.parentElement.nextElementSibling;
  let liList = classList.getElementsByTagName("li");

  if (classList.clientWidth < liList.length * 260) {
    // 카드가 ul태그 너비보다 넘치면(카드들의 넓이가 div보다 큰 경우),
    // <버튼은 활성화하고, >버튼은 현재 맨 첫카드 위치이므로 비활성화
    slidePrevList[i].classList.add("slide-prev-hover");
    slidePrevList[i].addEventListener("click", tranformPrev);
  } else {
    /*
        div태그 내에 모든 리스트를 다 표현할 수 있는 경우에 이곳에 온다.


        태그 삭제시 부모 요소에서 removeChild를 통해 삭제
        부모 요소를 찾은 후 <,>를 삭제

    */
    const arrowContainer = slidePrevList[i].parentElement;
    arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
    arrowContainer.removeChild(slidePrevList[i]);
  }
}

/*
pageYOffset : 문서가 수직으로 얼마나 스크롤되었는지 픽셀단위로 반환
--> scrollY의 옛이름으로, 구형 브라우저 지원까지 해야 한다면 pageYOffset을 사용한다.
cursor: grab <--손모양
cursor: grabbing <-- 손으로 잡고 있는 모양
하부클래스에 색을 상속하고 싶으면 하부클래스의 color:inherit를 하면 된다.

*/
