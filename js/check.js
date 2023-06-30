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

let elButton = document.getElementById("btn");
function writebtn() {
  window.location.href = "./write.html";
}
elButton.addEventListener("click", writebtn);

let elButton2 = document.getElementById("btn2");
let comment = document.getElementById("input");
function commentbtn() {
  var txtNode = "";

  txtNode += "<div>" + comment.value;
}
elButton.addEventListener("click", commentbtn);
