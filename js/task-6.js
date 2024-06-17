function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('#controls button[data-create]');
const destroyButton = document.querySelector('#controls button[data-destroy]');
const inputField = document.querySelector('#controls input');
const boxesContainer = document.querySelector('#boxes');
const dimensions = 30;
let boxes = [];
let count = 0;

inputField.addEventListener('input', event => {
  count = event.currentTarget.value;
});

createButton.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
  boxes = [];
  if (count >= 1 && count <= 100) {
    for (let i = 0; i < count; i++) {
      boxes.push(dimensions + i * 10);
    }
    const markup = boxes
      .map(
        box =>
          `<div class="created-box" style="background-color:${getRandomHexColor()}; width:${box}px; height:${box}px"></div>`
      )
      .join('');
    boxesContainer.innerHTML = markup;
  }
  count = 0;
  inputField.value = '';
});

destroyButton.addEventListener('click', () => {
  count = 0;
  boxes = [];
  inputField.value = '';
  boxesContainer.innerHTML = '';
});
