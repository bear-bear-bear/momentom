const onElementsDisplay = () => {
  const hideElems = document.querySelectorAll('.hide');

  hideElems?.forEach((elem) => elem.classList.remove('hide'));
};

const onBackImage = () => {
  document.body.classList.add('animeDone');
};

const onElems = () => {
  onElementsDisplay();
  onBackImage();
};

export default onElems;
