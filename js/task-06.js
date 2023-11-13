const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', event => {
  const enteredLength = event.target.value.length;
  const requiredLength = Number(event.target.dataset.length);

  if (enteredLength === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
