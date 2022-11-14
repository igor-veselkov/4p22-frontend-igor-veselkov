'use strict';

const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const passwordVerificationError = document.getElementById('password-verification-error');
const button = document.getElementById('submit');

button.addEventListener('click', (event) => {

  const email = document.getElementById('email').value;
  const inputEmail = document.querySelector('.registration-card__input-email');
  const password = document.getElementById('password').value;
  const inputPassword = document.querySelector('.registration-card__input-password');
  const passwordVerification = document.getElementById('password-verification').value;
  const inputPasswordVerification = document.querySelector('.registration-card__input-password-verification');
  const aboutMe = document.getElementById('comment').value;
  const checkbox = document.getElementById('checkbox').checked;
  let gender;

  event.preventDefault();

  function getGender() {
    const man = document.getElementById('man');
    const woman = document.getElementById('woman');

    if (man.checked) {
      gender = 'MAN';
    } else if (woman.checked) {
      gender = 'WOMAN';
    }
  }

  getGender();


  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  if (!validateEmail(email)) {
    inputEmail.style.borderColor = '#ee2424';
    emailError.innerText = "Email введён некорректно";
  }

  if (!email) {
    inputEmail.style.borderColor = '#ee2424';
    emailError.innerText = "Поле обязательно для заполнения";
  }

  if (password.length < 8) {
    inputPassword.style.borderColor = '#ee2424';
    passwordError.innerText = "Пароль должен содержать не менее 8 символов";
  }

  if (password === "") {
    inputPassword.style.borderColor = '#ee2424';
    passwordError.innerText = "Поле обязательно для заполнения";
  }

  if (passwordVerification === "") {
    inputPasswordVerification.style.borderColor = '#ee2424';
    passwordVerificationError.innerText = "Пароли не совпадают";
  }

  if (passwordVerification != password) {
    inputPasswordVerification.style.borderColor = '#ee2424';
    passwordVerificationError.innerText = "Пароли не совпадают";
  } else {
    if (validateEmail(email) === true && password.length >= 8 && password === passwordVerification) {
      inputPasswordVerification.style.borderColor = '#787878';
      inputPassword.style.borderColor = '#787878';
      inputEmail.style.borderColor = '#787878';
      emailError.innerText = '';
      passwordVerificationError.innerText = '';
      passwordError.innerText = '';

      makeUser()

    }
  }


  function makeUser() {

    let user = new Object();

    user.email = email;
    user.password = password;
    user.passwordVerification = passwordVerification;
    user.aboutMe = aboutMe;
    user.consent = checkbox;
    user.gender = gender;

    return console.log(user)
  }


})
