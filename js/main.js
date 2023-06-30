var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

document.getElementById("year").innerText = year;
document.getElementById("month").innerText = month;
document.getElementById("day").innerText = day;

let elButton = document.getElementById("btn");
function writebtn() {
  window.location.href = "./write.html";
}
elButton.addEventListener("click", writebtn);

let box = document.getElementById("whiteBox");
function checkbtn() {
  window.location.href = "./check.html";
}
box.addEventListener("click", checkbtn);
