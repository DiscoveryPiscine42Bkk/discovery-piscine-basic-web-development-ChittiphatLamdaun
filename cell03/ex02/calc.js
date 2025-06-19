function calculate() {
  const left = document.getElementById('left').value;
  const right = document.getElementById('right').value;
  const op = document.getElementById('operator').value;

  if (!/^\d+$/.test(left) || !/^\d+$/.test(right)) {
    alert("Error :(");
    return;
  }

  const a = parseInt(left, 10);
  const b = parseInt(right, 10);
  let result;

  if ((op === '/' || op === '%') && b === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

  switch(op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = a / b; break;
    case '%': result = a % b; break;
    default:
      alert("Unknown operator");
      return;
  }

  alert("Result: " + result);
  console.log("Result: " + result);
}

setInterval(() => {
  alert("Please, use me...");
}, 30000);