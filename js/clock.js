const date = document.querySelector(".date");
const clock = document.querySelector(".clock");

const today = new Date();
const years = today.getFullYear();
const months = String(today.getMonth() +1).padStart("2", 0);
const days = String(today.getDay()).padStart("2", 0);

date.innerHTML= `${years}<em>년</em> ${months}<em>월</em> ${days}<em>일</e,>`;

function getClock(){
  const today = new Date();
  const hours = String(today.getHours()).padStart("2", 0);
  const minutes = String(today.getMinutes()).padStart("2", 0);
  const seconds = String(today.getSeconds()).padStart("2", 0);
  clock.innerHTML = `${hours}<em>시</em> ${minutes}<em>분</em> ${seconds}<em>초</em>`;
}

getClock();
setInterval(getClock, 1000)