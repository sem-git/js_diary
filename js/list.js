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

//tile 페이지로 보기
function gotoTile() {
  window.location.href = "./main.html";
}

//로그인 페이지로 이동
function gotoLogin() {
  window.location.href = "./login.html";
}

//1줄씩 일기 생성
let memos = JSON.parse(sessionStorage.getItem("memos"));
memos = memos ?? [];

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.getElementById("whiteBox");

  if (elements === null) {
    console.error("not found");
    return;
  }

  elements.innerHTML = "";

  if (!memos || memos.length === 0) {
    console.log("No memos found");
    return;
  }

  for (let i = memos.length - 1; i >= 0; i--) {
    let box = document.createElement("div");
    box.classList.add("contents");
    box.dataset.id = memos[i].id;

    //날짜를 왜 title로 했는지 모르겠지만 어쨌든 날짜
    let title = document.createElement("div");
    title.textContent = memos[i].title;
    title.classList.add("title");

    let line = document.createElement("div");
    line.classList.add("line");
    var lineImg = document.createElement("img");
    lineImg.setAttribute("src", "../images/Line 3.png");
    lineImg.setAttribute("style", "width: 75%; height: 2.5px;");
    line.appendChild(lineImg);

    let text = document.createElement("div");
    text.classList.add("text");

    box.append(title, line, text);
    elements.append(box);
  }

  const contents = document.querySelectorAll(".contents");
  contents.forEach(function (contents) {
    contents.addEventListener("click", check);
  });
});

//check 페이지로 이동
function check() {
  const whiteBoxId = this.dataset.id;
  window.location.href = "./check.html?id=" + whiteBoxId;
}
