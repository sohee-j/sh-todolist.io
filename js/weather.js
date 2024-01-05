const weather = document.querySelector(".info-weather span:last-child");
const city = document.querySelector(".info-weather span:first-child");
const API_KEY = "3e0c1bd4580efeefc443ee5f5167bc5e";

function onGeoOk(position){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(res => res.json()
  .then(data => {
    city.innerHTML = `${data.name} /`;
    weather.innerHTML = `<em>현재온도 : </em>${data.main.temp}°`;
  }))
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)