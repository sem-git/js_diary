//날짜
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

document.getElementById("year").innerText = year;
document.getElementById("month").innerText = month;
document.getElementById("day").innerText = day;

//일기 쓰기 페이지로 이동
function writebtn() {
  window.location.href = "./write.html";
}

//list 페이지로 보기
function gotoList() {
  window.location.href = "./list.html";
}

//로그인 페이지로 이동
function gotoLogin() {
  window.location.href = "./login.html";
}

//whiteBox 일기 생성
let memos = JSON.parse(sessionStorage.getItem("memos"));
memos = memos ?? [];

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.getElementById("whiteBoxArea");

  if (elements === null) {
    console.error("not found");
    return;
  }

  elements.innerHTML = ""; // 초기화

  if (!memos || memos.length === 0) {
    console.log("No memos found");
    return;
  }

  for (let i = memos.length - 1; i >= 0; i--) {
    let box = document.createElement("div");
    box.classList.add("whiteBox");
    box.dataset.id = memos[i].id;

    //날짜를 왜 title로 했는지 모르겠지만 어쨌든 날짜
    let title = document.createElement("div");
    title.textContent = memos[i].title;
    title.classList.add("title");

    let line = document.createElement("div");
    line.classList.add("line");
    var lineImg = document.createElement("img");
    lineImg.setAttribute("src", "../images/Line 3.png");
    lineImg.setAttribute("style", "width: 90%");
    line.appendChild(lineImg);

    let text = document.createElement("div");
    text.setAttribute("id", "text" + (i + 1));
    text.textContent = memos[i].text;
    text.classList.add("text");

    box.append(title, line, text);
    elements.append(box);
  }

  const whiteBoxes = document.querySelectorAll(".whiteBox");
  whiteBoxes.forEach(function (whiteBox) {
    whiteBox.addEventListener("click", check);
  });
});

//check 페이지로 이동
function check() {
  const whiteBoxId = this.dataset.id;
  const text = this.querySelector(".text").textContent;

  window.location.href =
    "./check.html?id=" + whiteBoxId + "&text=" + encodeURIComponent(text);
}
