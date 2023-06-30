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
function savebtn() {
  window.location.href = "./main.html";
}
elButton.addEventListener("click", savebtn);
