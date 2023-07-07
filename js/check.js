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

//일기 쓰기 페이지로 이동
function writebtn() {
  window.location.href = "./write.html";
}

//가져온 일기 내용을 보이게
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const text = decodeURIComponent(urlParams.get("text"));
  const textElement = document.getElementById("memoText");
  textElement.textContent = text;
});

//일기 삭제
function deleteDiary() {
  const urlParams = new URLSearchParams(window.location.search);
  const clickedId = urlParams.get("id");

  let memos = JSON.parse(sessionStorage.getItem("memos")) || [];

  memos = memos.filter((memo) => memo.id !== parseInt(clickedId));

  sessionStorage.setItem("memos", JSON.stringify(memos));

  // 메인 페이지로 이동
  window.location.href = "main.html";
}

//일기 수정, write.html 가서 다시 작성하고 저장하면 수정된 내용이 업데이트 되어야 하는지 .. ??
//구현 필요
function editDiary() {
  const urlParams = new URLSearchParams(window.location.search);
  const clickedId = urlParams.get("id");

  let memos = JSON.parse(sessionStorage.getItem("memos")) || [];
}

//댓글 추가하기, 댓글 개수까지는 반영했는데 새로고침하면 사라짐 (댓글을 저장(?)하여 다른 페이지에서 들어와서도 반영하게 구현 필요)
function addComment() {
  var input = document.getElementById("input");
  var content = input.value;

  var wrapper = document.createElement("div");
  wrapper.classList.add("wrapper"); // Use className instead of id

  var comment = document.createElement("div");
  comment.classList.add("comment"); // Use className instead of id

  var ellipseImg = document.createElement("img");
  ellipseImg.src = "../images/Ellipse 3.png";
  ellipseImg.style.width = "8%";
  ellipseImg.style.marginTop = "25px";
  ellipseImg.style.marginRight = "780px";

  var name = document.createElement("div");
  name.classList.add("name"); // Use className instead of id
  name.innerText = "미영";

  var commentContent = document.createElement("div");
  commentContent.classList.add("content"); // Use className instead of id
  commentContent.innerText = content;

  comment.appendChild(ellipseImg);
  comment.appendChild(name);
  comment.appendChild(commentContent);

  wrapper.appendChild(comment);

  var wrapperContainer = document.getElementById("wrapper");
  wrapperContainer.appendChild(wrapper);

  var commentCountElement = document.getElementById("commentCount");
  var commentCount = parseInt(commentCountElement.innerText) || 0;
  commentCount++;
  commentCountElement.innerText = commentCount;

  localStorage.setItem("commentCount", commentCount);

  var comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(content);
  localStorage.setItem("comments", JSON.stringify(comments));

  input.value = "";
}
