const greetingForm = document.querySelector('.greeting');
const localStorage = window.localStorage;

const setHideGreeting = () => {
  const greetingNode = document.createElement('p');

  greetingNode.textContent = `안녕하세요 ${localStorage.getItem('userName')}님`;
  greetingNode.classList.add('hide');
  greetingNode.classList.add('greeting');

  greetingForm.parentNode.replaceChild(greetingNode, greetingForm);
};

const handlegreetingForm = (e) => {
  e.preventDefault();

  const userName = greetingForm.querySelector('.greeting__input').value || 'Annonymous';

  localStorage.setItem('userName', userName);

  setHideGreeting();
};

const initGreeting = () => {
  const userName = localStorage.getItem('userName');

  if (userName) setHideGreeting();
  else greetingForm.addEventListener('submit', handlegreetingForm, false);
};

export default initGreeting;
