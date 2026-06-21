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
      linkUrl: "../BookDetailPages/Mori.html",
    },
    {
      title: "화산귀환",
      site: "네이버 웹툰",
      type: "웹툰",
      genre: "무협",
      imgUrl:
        "https://search.pstatic.net/common?type=f&size=174x226&quality=75&direct=true&src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F769209%2Fthumbnail%2Fthumbnail_IMAG21_3511dcdd-6e33-4171-8839-598d6d266215.jpg",
      linkUrl: "../BookDetailPages/cjdaud.html",
    },
    {
      title: "괴담에 떨어져도 출근을 해야 하는구나",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "현대 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6hzR0KeTq9k5KuH-sHgmD8iXYWLNT7MR51opGXSk0w&s=10",
      linkUrl: "/",
    },
    {
      title: "별을 품은 소드 마스터",
      site: "네이버 웹툰",
      type: "웹툰",
      genre: "판타지",
      imgUrl:
        "https://search.pstatic.net/common?type=f&size=174x226&quality=75&direct=true&src=https%3A%2F%2Fshared-comic.pstatic.net%2Fthumb%2Fwebtoon%2F816809%2Fthumbnail%2Fthumbnail_IMAG21_7cdbae7a-df9f-4277-9e40-844c0dbd1af3.jpg",
      linkUrl: "../BookDetailPages/qufvnath.html",
    },
    {
      title: "이번생은 가주가 되겠습니다",
      site: "카카오 페이지",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4si5jBTwoYHmjpIisEV-xaQcwquSViX5FXZ23C7_rpw&s=10",
      linkUrl: "../BookDetailPages/TiaNovel.html",
    },
    {
      title: "가짜를 위한 장소는 없다",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl: "../bookcover/rkWKfmfdnlgkswkdth_filomel_bookCover.jpg",
      linkUrl: "../BookDetailPages/Filomel.html",
    },
    {
      title: "빙의자를 위한 특혜",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl: "../bookcover/qlddmlxmr_Ailet_bokkCover.jpg",
      linkUrl: "../BookDetailPages/Ailet.html",
    },
    {
      title: "이상한데 효과적인 악녀 생활",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfksDYSj8NCZDs8CfRKfpneeA3_jjPTxKIFkYOvTBRQ&s=10",
      linkUrl: "../BookDetailPages/Kiana.html",
    },
    {
      title: "눈 먼 공작과 약혼했다",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYrUQtWfk-5gvbDVPbcrWBbKJ2186ew7dgQp_Ilh25A&s=10",
      linkUrl: "../BookDetailPages/Marin.html",
    },
    {
      title: "이 황제는 결혼 사기를 칩니다",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPF95f3zvc4ipqIgd3x_tyXG7XjxzVJ-jX6-B0NXN7g&s=10",
      linkUrl: "../BookDetailPages/FakeMerry.html",
    },
    {
      title: "겨울성의 아기 죄수님",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjX2zL1IzbCJtlv4Mr3_Gf1U65wvgqXflyKfn7f3B81Q&s=10",
      linkUrl: "../BookDetailPages/Claris.html",
    },
    {
      title: "그 악녀를 조심하세요!",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxGpV7Z1QlCNcaSIE80ZEx4tQa-99TEbNKXkX5s6ZGw&s=10",
      linkUrl: "../BookDetailPages/rmdkrsufmf.html",
    },
    {
      title: "흑막 범고래 아기님",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OIxrnom9Fgp7KAtH5teffaxGt7ftNkhB41LuDyE1gA&s=10",
      linkUrl: "../BookDetailPages/Kalipso.html",
    },
    {
      title: "백호 가문의 아기 솜뭉치",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPN1QLdzLFKl5cp3Ysa9KIAp4j0dBgx7uOQMUPyYvDGA&s",
      linkUrl: "../BookDetailPages/thaandcl.html",
    },
    {
      title: "황제궁 옆 마로니에 농장",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0EUrqpwfhAWThEd-FvEiuczypw9LsdVHNfp3FOe2yuQ&s",
      linkUrl: "../BookDetailPages/Hazel.html",
    },
    {
      title: "계모인데, 딸이 너무 귀여워",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbcazqWhnwf31XKibb_AbR5V8SancHGhTyQdAOQbT-Q&s",
      linkUrl: "../BookDetailPages/rPahdlsep.html",
    },
    {
      title: "막내 공녀의 총애를 독차지했더니, 모두 내게 집착한다",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXv8WLGiVvXV4VIWl6xA4CWV3M27UhL8y0-UQXPbp6og&s=10",
      linkUrl: "../BookDetailPages/akrsorhdsudml.html",
    },
    {
      title: "악역 소녀는 사랑받기가 부끄러워요",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6MN_kcKV8vhYExW_5nZqn0Hy4Vpj-sllJg-iYLRUHQ&s=10",
      linkUrl: "../BookDetailPages/dkrdurqnRm.html",
    },
    {
      title: "다시 한번, 빛 속으로",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6vwI_9z-zQGFtY5VvGfq6RhiVTc1mrFGwwIXl2UQhw&s=10",
      linkUrl: "../BookDetailPages/againLight.html",
    },
    {
      title: "곱게 키웠더니, 짐승",
      site: "카카오 페이지",
      type: "웹툰",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVxteQuP-tIRxHPRNqHmwnNFhFEHhc8KfJTILT3eI7w&s=10",
      linkUrl: "../BookDetailPages/Eimon.html",
    },
    {
      title: "눈 먼 공작과 약혼했다",
      site: "카카오 페이지",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYrUQtWfk-5gvbDVPbcrWBbKJ2186ew7dgQp_Ilh25A&s=10",
      linkUrl: "../BookDetailPages/MarinNovel.html",
    },
    {
      title: "이 황제는 결혼 사기를 칩니다",
      site: "카카오 페이지",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneA8735v8nwe2AbkBmaOgLYVJruhSPRDgld_Qe90vWQ&s=10",
      linkUrl: "../BookDetailPages/FakeMerryNovel.html",
    },
    {
      title: "겨울성의 아기 죄수님",
      site: "카카오 페이지, 네이버 시리즈",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsFuyxWUBF_ZWOACrI_PoxAkghH8DUZVepZ6xth98VQ&s=10",
      linkUrl: "../BookDetailPages/ClarisNovel.html",
    },
    {
      title: "그 악녀를 조심하세요!",
      site: "카카오 페이지",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5r3eTwXSL3O6x-5brWE_5p9O_xz0dqiKoxLi1b7foA&s=10",
      linkUrl: "../BookDetailPages/rmdkrsufmfNovel.html",
    },
    {
      title: "흑막 범고래 아기님",
      site: "카카오 페이지, 네이버 시리즈",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://page-images.kakaoentcdn.com/download/resource?kid=cdYKw5/dJMcahjKNuv/LNurx2WBNIjTj5GvH2S000&filename=o1/dims/resize/384",
      linkUrl: "../BookDetailPages/KalipsoNovel.html",
    },
    {
      title: "백호 가문의 아기 솜뭉치",
      site: "카카오 페이지",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31hukrGqRmtYMDcfxGMsnnX8Ncl-gBgmOr6-MO5VGLw&s=10",
      linkUrl: "../BookDetailPages/thaandclNovel.html",
    },
    {
      title: "황제궁 옆 마로니에 농장",
      site: "카카오 페이지, 네이버 시리즈",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVvMRUCxiyrXrJr4LAEJ7hJk7-DVJD0RKDw8GjdXoLBw&s=10",
      linkUrl: "../BookDetailPages/HazelNovel.html",
    },
    {
      title: "계모인데, 딸이 너무 귀여워",
      site: "카카오 페이지",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnAN0LuDWZDxVRcwT9-W_5NQXCTSU6dctSYTpcbJqOw&s=10",
      linkUrl: "../BookDetailPages/rPahdlsepNovel.html",
    },
    {
      title: "막내 공녀의 총애를 독차지했더니, 모두 내게 집착한다",
      site: "카카오 페이지, 네이버 시리즈",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT312GY8V0uoyS-KqhiqZHRgl9XY38fuEj47Bp9INi7Sw&s=10",
      linkUrl: "../BookDetailPages/akrsorhdsudmlNovel.html",
    },
    {
      title: "악역 소녀는 사랑받기가 부끄러워요",
      site: "카카오 페이지, 네이버 시리즈",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoHu83DNy_vzVeMGet6wfvuWRFFHlDtKvnU5J-plM9g&s=10",
      linkUrl: "../BookDetailPages/dkrdurqnRmNovel.html",
    },
    {
      title: "다시 한번, 빛 속으로",
      site: "카카오 페이지",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMU6XaKpMZ7ow7HWg5VPQWMo7a_YVMywKbvTEyTd1eTQ&s=10",
      linkUrl: "../BookDetailPages/againLightNovel.html",
    },
    {
      title: "곱게 키웠더니, 짐승",
      site: "네이버 시리즈",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPL_TahsKxKtK7VMo1666GTIijQK3sDSBlOpE-opeMg&s=10",
      linkUrl: "../BookDetailPages/EimonNovel.html",
    },
    {
      title: "빙의자를 위한 특혜",
      site: "카카오 페이지",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://i.namu.wiki/i/iJFXKSRMwhIqSyN_0rLLUE4vHQCYDhXuNImGI9LzJjOeTzWkvqfUoV1DVbB4gbyzZKslSfDw05VrkrK03EnGb98FTHdGhiEtzRpx4OWvGOPDAmxTmcGdXw1jqTW4Rlr2xAO-iaU1EZwFrZygP96Gng.webp",
      linkUrl: "../BookDetailPages/AiletNovel.html",
    },
    {
      title: "이상한데 효과적인 악녀 생활",
      site: "카카오 페이지",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFvrpkQzmvV1FczJaZWsZVNenMozyfFtyi1Q1oaw4Iw&s=10",
      linkUrl: "../BookDetailPages/KianaNovel.html",
    },
    {
      title: "가짜를 위한 장소는 없다",
      site: "카카오 페이지",
      type: "웹소설",
      genre: "로맨스 판타지",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWg4PGRewOzPcZTBcV9Uhmc1LGYYSORv_WHMEPSBnWw&s=10",
      linkUrl: "../BookDetailPages/FilomelNovel.html",
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
