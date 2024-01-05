const loginWrap = document.querySelector('.login.login-wrap');
const loginForm = loginWrap.querySelector('#login-form');
const loginInput = loginForm.querySelector("input");
const loginResult = document.querySelector(".login.login-result");
const loginUsername = loginResult.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function loginSubmit(e){
  e.preventDefault();
  loginWrap.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginUsernameShow(username);
}

function loginUsernameShow(username){
  loginUsername.innerText = `HELLO, ${username}!`;
  loginResult.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log('savedUsername', savedUsername)

if(savedUsername === null){
  loginWrap.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
}else{
  loginUsernameShow(savedUsername);
}