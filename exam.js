const appid = '<가입하고 얻을 app key>';

const cities = {
    'Busan': '부산광역시',
    'Daegu': '대구광역시',
    'Incheon': '인천광역시',
    'Gwangju': '광주광역시',
    'Daejeon': '대전광역시',
    'Sejong': '세종광역시',
    'Seoul': '서울특별시',
    'Ulsan': '울산광역시',
    'Jeju': '제주시'
};

function toCelsius(kelvin) {
    return kelvin - 273.15;
}

// 지역으로부터 날씨 정보 가져옴
function getWeatherFromRegion(city) {

};

// 버튼 누르면 호출
function init() {
    const city = Object.keys(cities)[Math.round(Math.random() * (Object.keys(cities).length - 1))];

    const weather = getWeatherFromRegion(`${city},kr`);
    console.log(region);

    const city = document.querySelector('#city');
    const wind = document.querySelector('#wind');
    const icon = document.querySelector('#icon');
    const temp = document.querySelector('#temp');
    const humidity = document.querySelector('#humidity');

    weather.then(json => {
        city.innerHTML = cities[region];
        wind.innerHTML = Math.round(json.wind.speed);
        icon.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
        temp.innerHTML = Math.floor(toCelsius(json.main.temp));
        humidity.innerHTML = json.main.humidity;
    });
}