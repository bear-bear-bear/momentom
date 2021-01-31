import stop from './_stop';

const scene = {
  scene: document.body.querySelector('.scene'),

  on() {
    const scene = document.createElement('article');
    scene.classList.add('scene');

    const rocket = document.createElement('div');
    rocket.classList.add('rocket');

    const rocketImage = new Image();
    // CORS 정책으로 깃허브를 제외한 페이지 (로컬호스트 등)에선 이미지가 로드되지 않습니다.
    rocketImage.src = 'https://github.com/bear-bear-bear/momentum/blob/master/src/img/rocket.png';

    rocketImage.onload = () => {
      rocket.append(rocketImage);
      scene.append(rocket);

      this.scene = document.body.appendChild(scene);
    };
  },

  off: function () {
    setTimeout(() => {
      this.scene.remove();
    }, 1000);
  },
};

const rocket = {
  rocket: document.body.querySelector('.rocket'),

  ready: async function () {
    this.rocket.style.bottom = '0';
  },

  start: async function () {
    this.rocket.classList.add('rocket-fire');
    this.rocket.style.animation = 'shake 0.15s ease infinite';
    this.rocket.style.animationDelay = '3s';
  },

  toCenter: async function () {
    this.rocket.style.bottom = `50%`;
  },

  strongFire: async function () {
    this.rocket.classList.remove('rocket-fire');
    this.rocket.classList.add('rocket-fire--strong');
  },

  toTop: async function () {
    this.rocket.style.bottom = '200%';
  },
};

const launchRocket = async () => {
  await scene.on();
  await rocket.ready();
  await stop(3);
  await rocket.start();
  await stop(4);
  await rocket.toCenter();
  await stop(4);
  await rocket.strongFire();
  await stop(0.6);
  await rocket.toTop();
  await stop(1.3);
  scene.off(); // not await

  return;
};

export default launchRocket;
