const loginForm = document.querySelector('.login-form');
const user = {};

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === '' || password === '') {
    return alert('All form fields must be filled in');
  } else {
    user.login = login;
    user.password = password;
  }
  console.log(user);
  form.reset();
}
