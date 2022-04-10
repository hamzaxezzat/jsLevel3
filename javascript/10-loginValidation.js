const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const activeBtn = () => {
  if (
    username.classList.contains("success") &&
    email.classList.contains("success") &&
    password.classList.contains("success") &&
    repeatPassword.classList.contains("success")
  ) {
    regBtn.removeAttribute("disabled");
  } else {
    regBtn.setAttribute("disabled", "disabled");
  }
};
const validInput = function (eo) {
  eo.classList.add("success");
  eo.nextElementSibling.classList.add("o1");
  eo.nextElementSibling.nextElementSibling.classList.remove("o1");
  eo.nextElementSibling.nextElementSibling.classList.add("o0");
  activeBtn();
};
const inValidInput = function (eo) {
  eo.classList.remove("success");
  eo.classList.add("error");
  eo.nextElementSibling.classList.remove("o1");
  eo.nextElementSibling.nextElementSibling.classList.remove("o0");
  eo.nextElementSibling.nextElementSibling.classList.add("o1");
  activeBtn();
};
username.addEventListener("keyup", (eo) => {
  username.value.length > 2 ? validInput(eo.target) : inValidInput(eo.target);
});
email.addEventListener("keyup", (eo) => {
  regEmail.test(email.value) ? validInput(eo.target) : inValidInput(eo.target);
});
password.addEventListener("keyup", (eo) => {
  regPass.test(password.value)
    ? validInput(eo.target)
    : inValidInput(eo.target);
});
repeatPassword.addEventListener("keyup", (eo) => {
  repeatPassword.value == password.value
    ? validInput(eo.target)
    : inValidInput(eo.target);
});
