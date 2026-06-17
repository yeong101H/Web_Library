"use strict";
//문법상의 오류가 있으면 에러가 뜨도록한다.

document.addEventListener("DOMContentLoaded", function () {
  //HTML에 있는 textarea(#BookMemo) 가져오기
  const bookMemo = document.querySelector("#BookMemo");

  //HTML마다 다른 키를 받아서 저장
  const storageKey = bookMemo.getAttribute("data-storage-key");

  const savedMemo = localStorage.getItem(storageKey);
  //위 코드에서 괄호 안의 storageKey는 로컬 스토리지에 저장된 값을 가리키는 이름표가 저장 된 변수이다.

  // 만약 사물함에 저장된 메모가 있다면, textarea 안에 그 내용을 넣는다.
  if (savedMemo) {
    bookMemo.value = savedMemo;
    //bookMemo가 메모장인 부분을 가져온 변수이기 때문에 .value를 붙여 해당 변수가 가리키는 곳의 값이라고 말하는 부분
    //그리고 그 값이 savedMemo에 저장된 내용이라는 소리
  }

  //blur은 포커스를 잃었을때(다른 곳을 클릭했을때)를 가리키는 이벤트이다.
  //즉, bookMemo에 저장한 아이디를 가진 요소에서 다른 곳을 클릭해 포커스를 잃으면 실행하라는 코드이다.
  //랜덤 룰렛에 이런 형식이 어떤 구조인지 설명한 주석이 있으니 참고
  bookMemo.addEventListener("blur", function () {
    const currentText = bookMemo.value;
    // 사용자가 쓴글을 로컬 스토리지에 저장하기 위해 변수에 담아놓는다.

    localStorage.setItem(storageKey, currentText);
    //setItem이라는 코드는 저장한다는 코드이다. 즉, 로컬스토리지에 storageKey에 저장 된 이름으로 currentText에 있는 값을 저장한다는 뜻이다.
  });
});
