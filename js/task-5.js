function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector('.change-color');
const page = document.querySelector('body');
let color = document.querySelector('.widget .color');

changeButton.addEventListener('click', () => {
  page.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});
