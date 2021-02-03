const form = document.querySelector('.search__form');
const input = document.querySelector('.search__input');

const gotoGoogle = (e) => {
  e.preventDefault();

  const keyword = input.value;
  input.value = '';

  location.href = `https://www.google.co.kr/search?q=${keyword}`;
};

const setSearchHref = () => {
  form.addEventListener('submit', gotoGoogle, false);
};

export default setSearchHref;
