function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('#controls button[data-create]');
const destroyButton = document.querySelector('#controls button[data-destroy]');
const inputField = document.querySelector('#controls input');
const boxesContainer = document.querySelector('#boxes');
const width = 30;
const height = 30;
let count = 0;

inputField.addEventListener('input', event => {
  count = event.currentTarget.value;
  console.log(count);
});

createButton.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
  if (count >= 1 && count <= 100) {
    for (let i = 0; i < count; i++) {
      boxesContainer.innerHTML += `<div class="created-box box-${i}" style="background-color:${getRandomHexColor()}; width:${
        width + i * 10
      }px; height:${height + i * 10}px"></div>`;
    }
  }
  count = 0;
  inputField.value = '';
});

destroyButton.addEventListener('click', () => {
  count = 0;
  inputField.value = '';
  boxesContainer.innerHTML = '';
});
