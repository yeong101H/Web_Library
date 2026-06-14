"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const recommendBtn = document.querySelector("#recommendBtn");
  const resultView = document.querySelector("#resultView");
  /*
    const: recommendBtn이라는 변수를 상수로 지정함 -> 즉, recommendBtn의 값을 바꿀 수 없다.
    document.querySelector
        document : HTML 웹 페이지 전체를 가리킴 -> 화면에 켜져있는 웹 페이지를 가리킨다.
            즉, 따로 이 웹사이트의 모든 화면에서 괄호 안에 있는 ID를 가진 요소를 찾는다는 의미
        querySelector
            query : 질문하다, 찾는다는 뜻 -> 무엇을? 괄호 안에 있는 ID를
            Selector : 선택기 -> css선택자를 뜻함 (괄호 안 ID를 가진 선택자를)
    --> 웹 페이지 전체를 보면서 ID를 가진 요소를 찾는다(괄호 안에 들어있는 형식은 css에서의 선택자와 같은 형식)
    */

  const webtoonDatabase = [
    //여기에 룰렛을 돌릴 작품들을 저장한다.
    {
      title: "이번생은 가주가 되겠습니다",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl: "../bookcover/dlrkwn_Tia_bookCover.webp",
      linkUrl: "../BookDetailPages/Tia.html",
    },
    {
      title: "엄마를 만나러 가는 길",
      site: "네이버 웹툰",
      type: "웹툰",
      genre: "기타",
      imgUrl:
        "https://search.pstatic.net/common?type=f&size=174x226&quality=75&direct=true&src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F834369%2Fthumbnail%2Fthumbnail_IMAG21_053009da-be7a-41d4-a3ab-b0321963e8e0.jpg",
      linkUrl: "/",
    },
  ];
  /*
  상수로 되어 있는 배열이 맞음.
  하지만 배열에 새로운 요소를 넣거나 기존의 작품을 빼는 등의 알맹이 수정은 가능함
  그러니까, 완전히 새로운 배열을 가리키지만 않으면 괜찮다.
  */
  const rouletteCard = document.querySelector(".rouletteCard");
  const container = document.querySelector("#webtoonCardContainer");

  recommendBtn.addEventListener("click", function () {
    /*맨 위에서 찾은 ID요소에서 이벤트(Event)가 발생하는지 지켜보는(listener:듣는사람 이라는 뜻이지만.. 그냥 지켜본다라고 표현)요소를 추가(add)한다.
    괄호 안의 "click" : 요소에서 click이라는 이벤트가 발생하였는가 (이벤트의 종류를 가리키는 부분)
    function() : 자세히 보면 함수의 동작들도 전부 recommendBtn.addEventListener의 조건이 적히는 괄호 안에 있다.
        즉, recommendBtn.addEventListener의 기준에서 판단을 하고 조건이 충족하면 함수의 기능이 실행된다는 의미다
    */
    //배열에 저장되어 있는 작품들로 룰렛을 돌린다.
    const randomIndex = Math.floor(Math.random() * webtoonDatabase.length);
    /*
    Math.random() * webtoonDatabase.length : webtoonDatabase.length로 배열의 크기를 구하여 Math.random()의 범위로 정한다.
        이때, *를 사용하는 이유는 아무런 범위가 없을 때는 0과 1사이의 소수점으로만 나오기때문에 곱하기를 하여 정수 범위로 끌어 올리는 것이다.
    Math.floor() : 랜덤값으로 나온 값의 소수점 이하 자리의 숫자들을 버린다. -> 배열의 정확한 위치를 가리키기 위해서
    */

    rouletteCard.classList.add("flip");

    container.innerHTML = "";

    setTimeout(function () {
      //진짜로 배열에서 작품을 꺼내온다.
      const luckyWebtoon = webtoonDatabase[randomIndex];
      //자바나 c언어에서 배열에 있는 값을 지정하는 방법과 똑같이 위쪽 코드에서 받은 랜덤 값으로 배열에 저장된 작품을 꺼낸다는 의미
      // 랜덤으로 돌린 작품의 결과를 작품 카드로 나타내기 위한 html코드
      const cardHTML = `
    <a href="${luckyWebtoon.linkUrl}" class="DetailPagesLink">
      <div class="bookCard">
        <img src="${luckyWebtoon.imgUrl}" alt="작품 표지" class="bookCover" />
        <div class="bookCardText">
          <p class="bookName">${luckyWebtoon.title}</p>
          <div class="bookCardText-notName">
            <p>장르 | ${luckyWebtoon.genre}</p>
            <p>사이트 | ${luckyWebtoon.site}</p>
            <p>매체 | ${luckyWebtoon.type}</p>
          </div>
        </div>
      </div>
    </a>
  `;
      /*
  html코드가 ''안에 있으면 그냥 문자열 일 뿐이지만 밑의 코드를 만나면 html에서 진짜 코드로 취급되어 실행됩니다.
  */

      // 4. 큰 바구니 안에 이 카드 HTML을 슥 넣어줍니다!
      container.innerHTML = cardHTML;
    }, 600);
    setTimeout(function () {
      rouletteCard.classList.remove("flip");
    }, 400);
  });
});
