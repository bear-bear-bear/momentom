import stop from './_stop';

const scene = {
  scene: document.body.querySelector('.scene'),

  on() {
    const scene = document.createElement('article');
    scene.classList.add('scene');

    const rocket = document.createElement('div');
    rocket.classList.add('rocket');

    scene.append(rocket);

    this.scene = document.body.appendChild(scene);
  },

  off: function () {
    setTimeout(() => {
      this.scene.remove();
    }, 1000);
  },
};

const rocket = {
  ready() {
    this.rocket = document.body.querySelector('.rocket');
    this.rocket.style.bottom = '5%';
  },

  start() {
    this.rocket.classList.add('rocket-fire');
    this.rocket.style.animation = 'shake 0.15s ease infinite';
    this.rocket.style.animationDelay = '3s';
  },

  toCenter() {
    this.rocket.style.bottom = `50%`;
  },

  strongFire() {
    this.rocket.classList.remove('rocket-fire');
    this.rocket.classList.add('rocket-fire--strong');
  },

  toTop() {
    this.rocket.style.bottom = '200%';
  },
};

const launchRocket = async () => {
  scene.on();
  rocket.ready();
  await stop(3);

  rocket.start();
  await stop(4);

  rocket.toCenter();
  await stop(4);

  rocket.strongFire();
  await stop(0.6);

  rocket.toTop();
  await stop(1.3);

  scene.off();

  return;
};

export default launchRocket;
