import stop from './_stop';

const greeting = {
  greeting: document.querySelector('.greeting'),

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

export default greet;
