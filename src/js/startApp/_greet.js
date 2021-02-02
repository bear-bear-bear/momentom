import stop from './_stop';

const createGreeting = async () => {
  // greeting 엘리먼트 생성 함수
  // 이 함수는 startApp.js 에서 실행됩니다.
  const main = document.querySelector('.momentum-main');
  const greeting = document.createElement('form');
  greeting.classList.add('greeting');

  greeting.innerHTML = `
<label class="greeting__label" for="name">이름을 입력해주세요</label>
<input class="greeting__input" id="name" type="text" minlength="1" maxlength="20" autocomplete="off">
`.trim();

  main.appendChild(greeting);
};

const greeting = {
  setElem: async function () {
    this.greeting = document.querySelector('.greeting');
  },

  down() {
    this.greeting.style.opacity = '0';
    this.greeting.style.top = '52%';
  },

  up() {
    this.greeting.style.opacity = '1';
    this.greeting.style.top = '50%';
  },

  replaceMsg(str) {
    this.greeting.textContent = str;
  },
};

const greet = async () => {
  await greeting.setElem();

  greeting.down();
  await stop(0.8);

  greeting.replaceMsg(`안녕하세요 ${localStorage.getItem('userName')}님`);
  greeting.up();
  await stop(1.6);

  greeting.down();
  await stop(0.8);

  greeting.replaceMsg(`여행을 시작합니다.`);
  greeting.up();
  await stop(1.6);

  greeting.down();
  await stop(1.6);

  return;
};

export { createGreeting, greet };
