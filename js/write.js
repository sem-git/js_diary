//날짜
var date = new Date();
var daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var dayOfWeek = date.getDay();

document.getElementById("year").innerText = year;
document.getElementById("month").innerText = month;
document.getElementById("day").innerText = day;
document.getElementById("dayOfWeek").innerText = daysOfWeek[dayOfWeek];

//일기 저장
let memos = JSON.parse(sessionStorage.getItem("memos"));
memos = memos ?? [];

function savebtn() {
  let newMemo = {};
  let memoDate =
    year + "년 " + month + "월 " + day + "일 " + daysOfWeek[dayOfWeek] + "요일";
  let memoText = document.getElementById("text").value;
  let id = memos.length;

  newMemo.id = id;
  newMemo.title = memoDate;
  newMemo.text = memoText;

  memos.push(newMemo);

  sessionStorage.setItem("memos", JSON.stringify(memos));

  window.location.href = `./main.html?memo=${encodeURIComponent(
    JSON.stringify(newMemo)
  )}`;
}

function saveDiary() {
  const urlParams = new URLSearchParams(window.location.search);
  const clickedId = urlParams.get("id");
  const memoText = decodeURIComponent(urlParams.get("text"));

  let memos = JSON.parse(sessionStorage.getItem("memos")) || [];
  const memoIndex = memos.findIndex((memo) => memo.id === parseInt(clickedId));

  if (memoIndex !== -1) {
    memos[memoIndex].text = memoText;
    sessionStorage.setItem("memos", JSON.stringify(memos));
  }

  // 메인 페이지로 이동
  window.location.href = "main.html";
}
