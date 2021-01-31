// https://openweathermap.org/
const WEATHER_API_KEY = '56abdabcd06ea6bcc038e7935c40bfd1';
const statusWrap = document.querySelector('.weather');
const status = document.querySelector('.weather__text');

const FtoC = (F) => {
  const C = ((F / 32 - 32) * 5) / 9;

  return C.toFixed(1);
};

const getWeatherData = (lat, lon) => {
  const reqUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=kr`;

  return fetch(reqUrl).then((res) => res.json());
};

const getCurrPosition = () => {
  return new Promise((resolve, _) => {
    const success = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      resolve([lat, lon]);
    };

    const failure = (_) => {
      status.textContent = '사용자의 지역 정보에 접근할 수 없습니다';
    };

    if (!navigator.geolocation) {
      status.textContent = '사용자의 브라우저가 지역 정보 접근을 지원하지 않습니다';
    } else {
      status.textContent = '지역정보 동기화 중…';
      navigator.geolocation.getCurrentPosition(success, failure);
    }
  });
};

const setWeatherData = async () => {
  console.log('날씨데이터 셋');

  const [lat, lon] = await getCurrPosition();

  const {
    name,
    main: { temp: Fahrenheit },
    weather: [{ icon: iconName }],
  } = await getWeatherData(lat, lon);

  const icon = new Image();
  icon.src = `http://openweathermap.org/img/wn/${iconName}@2x.png`;
  icon.classList.add('weather__icon');

  status.textContent = `${name}, ${FtoC(Fahrenheit)}°C`;
  statusWrap.append(icon);
};

export default setWeatherData;
