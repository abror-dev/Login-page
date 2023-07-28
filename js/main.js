var elForm = document.querySelector(".form");
var elLogin = document.querySelector(".login");
var elPassword = document.querySelector(".password");
var elBox = document.querySelector(".box");
elForm.addEventListener("submit", function (evn) {
  evn.preventDefault();

  if (elLogin.value.length > 5 && elLogin.value.length < 8) {
    console.log("login iwlayapti");
  } else {
    console.log("loginda xatolik bor");
  }
  if (elPassword.value.length > 8 && elPassword.value.length < 10) {
    console.log("password iwlayapti");
  } else {
    console.log("passworda xatolik bor");
  }
  var login = evn.target.login.value;
  var password = evn.target.password.value;
  if (login == login.toUpperCase() && password == password.toUpperCase()) {
    console.log("Hamas kata harfda");
  } else {
    console.log("kichkina harf qatnawgan");
  }
  //   if (password == password.toUpperCase()) {
  //     console.log("Hamas kata harfda");
  //   } else {
  //     console.log("kichkina harf qatnawgan");
  //   }
});
