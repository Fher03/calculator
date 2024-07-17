//Variables
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.getElementById("display");
const cButton = document.getElementById("c");

let firstData = false;
let secondData = false;
let result = 0;
let firstNumber = "0";
let secondNumber = "0";
let currentOperator = null;

window.addEventListener("DOMContentLoaded", () => {
  displayData(result);
});

//Listen to numbers
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (firstData) {
      if (secondNumber === "0") {
        secondNumber = number.value;
      } else {
        secondNumber += number.value;
      }
      displayData(secondNumber);
      secondData = true;
    } else {
      if (firstNumber === "0") {
        firstNumber = number.value;
      } else {
        firstNumber += number.value;
      }
      displayData(firstNumber);
    }
  });
});

//Listen to operators
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (display.value === "") {
      alert("Ingresa un numero");
    } else {
      if (operator.value !== "=") {
        firstData = true;
        currentOperator = operator.value;
        displayData(null);
      } else {
        if (secondData) {
          switch (currentOperator) {
            case "+":
              result = parseInt(firstNumber) + parseInt(secondNumber);
              break;
            case "-":
              result = parseInt(firstNumber) - parseInt(secondNumber);
              break;
            case "*":
              result = parseInt(firstNumber) * parseInt(secondNumber);
              break;
            case "/":
              if (secondNumber === "0") {
                result = "ERROR";
              } else {
                result = parseInt(firstNumber) / parseInt(secondNumber);
              }
              break;
            default:
              return;
          }
          displayData(result);
          resetValues();
        }
      }
    }
  });
});

//C Button press
cButton.addEventListener("click", () => {
  resetValues();
  displayData(result);
});

//Functions
function resetValues() {
  firstData = false;
  secondData = false;
  result = 0;
  firstNumber = "0";
  secondNumber = "0";
  currentOperator = null;
}

function displayData(data) {
  display.value = data;
}
