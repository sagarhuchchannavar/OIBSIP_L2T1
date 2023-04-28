let input = '';
let result = document.getElementById('result');

function addInput(value) {
  input += value;
  result.innerHTML = input;
}

function clearScreen() {
  input = '';
  result.innerHTML = '0';
}

function calculate() {
  try {
    input = eval(input);
    result.innerHTML = input;
  } catch (error) {
    alert('Invalid Input!');
    clearScreen();
  }
}
