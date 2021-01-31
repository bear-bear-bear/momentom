class Star {
  constructor(isShootingStar) {
    this.star = document.createElement('div');
    this.star.classList.add('star');

    this.star.style.left = `${Math.random() * 100}%`;
    this.star.style.top = `${Math.random() * 100}%`;

    if (isShootingStar) this.toShootingStar();

    return this.star;
  }

  toShootingStar() {
    this.star.classList.add('shootingStar');
    this.star.style.animationDelay = `${Math.random() * 10}s`;
  }
}

const createStars = (num, isShootingStar = false) => {
  let stars = [];
  const _Star = Star;

  for (let i = 0; i < num; i++) {
    stars.push(new _Star(isShootingStar));
  }

  return stars;
};

const initUniverse = () => {
  const universe = document.querySelector('.universe');

  const starsWrap = document.createElement('article');
  starsWrap.classList.add('stars-wrap');

  const fixedStars = createStars(50);
  const shootingStars = createStars(50, true);

  const DOMfragement = document.createDocumentFragment();
  DOMfragement.append(...fixedStars, ...shootingStars);

  starsWrap.append(DOMfragement);
  universe.append(starsWrap);
};

export default initUniverse;
