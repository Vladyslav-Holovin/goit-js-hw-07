let nameElement = document.querySelector('#name-output');
let inputElement = document.querySelector('#name-input');

inputElement.addEventListener('input', event => {
  if (
    event.currentTarget.value.length == 0 ||
    !event.currentTarget.value.trim()
  ) {
    nameElement.textContent = 'Anonymous';
  } else {
    nameElement.textContent = event.currentTarget.value;
  }
});
