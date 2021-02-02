const hours = document.querySelector('.clock__time__hours');
const minutes = document.querySelector('.clock__time__minutes');
const AM_PM = document.querySelector('.clock__time__AM-PM');

const setTimeData = () => {
  const now = new Date();
  let h = now.getHours(); // 0 - 23
  let m = now.getMinutes(); // 0 - 59
  let session = 'AM';

  if (h >= 12) {
    h = h - 12;
    session = 'PM';
  }

  if (h === 0) {
    h = 12;
  }

  h = h < 10 ? '0' + h : h; // 암시적 타입변환 num -> string
  m = m < 10 ? '0' + m : m; // 암시적 타입변환 num -> string

  hours.textContent = h;
  minutes.textContent = m;
  AM_PM.textContent = session;

  setTimeout(setTimeData, 1000); // 재귀 실행
};

export default setTimeData;
