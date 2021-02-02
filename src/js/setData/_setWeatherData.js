const weatherElem = document.querySelector('.weather');

const KtoC = (K) => {
  const C = K - 273.15;

  return C.toFixed(1);
};

const getWeatherData = (lat, lon) => {
  const WEATHER_API_KEY = '56abdabcd06ea6bcc038e7935c40bfd1'; // https://openweathermap.org/

  const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=kr`;

  return fetch(fetchUrl).then((res) => res.json());
};

const getCurrPosition = () => {
  return new Promise((resolve, _) => {
    const success = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      resolve([lat, lon]);
    };

    const failure = (_) => {
      weatherElem.textContent = '사용자의 지역 정보에 접근할 수 없습니다';
    };

    if (!navigator.geolocation) {
      weatherElem.textContent = '사용자의 브라우저가 지역 정보 접근을 지원하지 않습니다';
    } else {
      weatherElem.textContent = '지역정보 동기화 중…';
      navigator.geolocation.getCurrentPosition(success, failure);
    }
  });
};

const setWeatherData = async () => {
  const [lat, lon] = await getCurrPosition();

  const {
    name,
    main: { temp: kelvin },
    weather: [{ icon: iconName, description: iconAlt }],
  } = await getWeatherData(lat, lon);

  const iconSRC = `https://openweathermap.org/img/wn/${iconName}@4x.png`;

  weatherElem.innerHTML = `
<p class='weather__text'>${name}, ${KtoC(kelvin)}°C</p>
<div class='weather__icon-wrap'>
  <img class='weather__icon' src='${iconSRC}' alt='${iconAlt}' />
</div>
`.trim();
};

export default setWeatherData;
