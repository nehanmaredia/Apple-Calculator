// Define variables
let firstValue = "";
let secondValue = "";
let sign = "";
const numbers = document.querySelectorAll('.numbers');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const result = document.querySelector('.result span');

// Function to update the result display
const updateResult = () => {
  result.innerHTML = secondValue !== "" ? secondValue : firstValue;
};

// Event listeners for number buttons
numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    if (sign === "") {
      firstValue += e.target.value;
    } else {
      secondValue += e.target.value;
    }
    updateResult();
  });
});

// Event listener for sign buttons
signs.forEach(signButton => {
  signButton.addEventListener("click", (e) => {
    if (firstValue !== "") {
      sign = e.target.value;
    }
  });
});

// Event listener for equals button
equals.addEventListener("click", () => {
  if (sign !== "" && secondValue !== "") {
    // Perform calculation based on the sign
    let resultValue;
    switch (sign) {
      case "+":
        resultValue = parseFloat(firstValue) + parseFloat(secondValue);
        break;
      case "-":
        resultValue = parseFloat(firstValue) - parseFloat(secondValue);
        break;
      case "*":
        resultValue = parseFloat(firstValue) * parseFloat(secondValue);
        break;
      case "/":
        if (parseFloat(secondValue) !== 0) {
          resultValue = parseFloat(firstValue) / parseFloat(secondValue);
        } else {
          result.innerHTML = "Error: Division by zero";
          return;
        }
        break;
    }
    // Display the result
    result.innerHTML = resultValue;
    // Reset values
    firstValue = resultValue.toString();
    secondValue = "";
    sign = "";
  }
});

// Event listener for clear button
clear.addEventListener("click", () => {
  // Reset all values
  firstValue = "";
  secondValue = "";
  sign = "";
  // Clear result display
  result.innerHTML = "0";
});
