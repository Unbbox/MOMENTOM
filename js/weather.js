// openweathermap.org : 날씨 데이터에 관한 정보를 가져올 수 있는 API 사이트
const API_KEY = "9f7bce86d0cfd790bdae4f43ed290b08";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const lang = "kr";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=${lang}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].description} / ${data.main.temp}º`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

// navigator.geolocation.getCurrentPosition(성공시 실행 될 함수, 실패 시 실행 될 함수)
// : 현재 살고 있는 위치에 대한 정보 가져오기
local_loc = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
