const counterValue = document.getElementById('value');
let currentValue = 0;

document.querySelectorAll('#counter button').forEach(button => {
  button.addEventListener('click', event => {
    const action = event.target.dataset.action;

    if (action === 'increment') {
      currentValue += 1;
    } else if (action === 'decrement') {
      currentValue -= 1;
    }

    counterValue.textContent = currentValue;
  });
});