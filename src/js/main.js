let count = 0;

document.addEventListener('DOMContentLoaded', function () {
  const counter = document.getElementById('counter');
  const button = document.getElementById('clickButton');

  button.addEventListener('click', function () {
    count++;
    counter.textContent = count;
    console.log(`Button clicked. Current count: ${count}`);
  });
});
