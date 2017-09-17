var link = document.querySelector(".write-link");
var popup = document.querySelector(".letter-modal");
var close = document.querySelector(".modal-close");
var username = popup.querySelector("[name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=letter-text]");
var storagename = localStorage.getItem("name");
var storageemail = localStorage.getItem("email");


link.addEventListener("click", function (evt) {
  evt.preventDefault();

  popup.classList.add("modal-show");
  if (storagename) {
    username.value = storagename;
  }
  if (storagename && storageemail){
    username.value = storagename;
    email.value = storageemail;
  }
  else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt){
  if (!name.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    console.log("Нужно ввести имя, e-mail и текст письма");
  }
  else {
    localStorage.setItem ("name", name.value);
    localStorage.setitem ("email", email.value);
    console.log("Форма отправлена");
  }
});

window.addEventListener("keydown", function(evt) {
  if (popup.classList.contains("modal-show")){
    if (evt.keyCode == 27) {
    popup.classList.remove("modal-show");
    }
  }
});
