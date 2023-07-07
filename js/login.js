//회원가입 페이지로 이동
function gotoJoin() {
  window.location.href = "./join.html";
}

//로그인
function login() {
  const userID = document.getElementById("id").value;
  sessionStorage.setItem("userID", userID);

  window.location.href = "./main.html";
}
