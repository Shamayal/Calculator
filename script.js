// Show input/output for operations performed in the calculator
const inputValue = document.getElementById("display");

// Flag to track if a result has been evaluated and reset the input for a new calculation
let isResult = false;

// Event listener for number buttons
document.querySelectorAll(".number").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const value = e.target.innerHTML.trim();
    let current = inputValue.value;

    // If result already evaluated, start a new calculation
    if (isResult) {
      current = ""; // Clear the current value
      isResult = false; // Reset the flag
    }

    let lastChar = current.slice(-1);

    // If display is "NaN" or "0", reset with new input
    if (current === "NaN" || current === "0") {
      current = "";
    } 
    
    // Avoid multiple decimal points in a single number
    if (value === ".") {
      // Find the last operator to separate the current number
      const lastOperatorIndex = Math.max(
        current.lastIndexOf("+"), 
        current.lastIndexOf("-"), 
        current.lastIndexOf("*"), 
        current.lastIndexOf("/")
      );

      const lastNumber = current.slice(lastOperatorIndex + 1);

      // If the last number already has a decimal, return early to avoid adding another
      if (lastNumber.includes(".")) {
        return;
      }
    };

    // Add pressed number to current input value
    inputValue.value = current + value;
  });
});

// Event listener for operator buttons
document.querySelectorAll(".operator").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const value = e.target.innerHTML.trim();
    let current = inputValue.value;
    let lastChar = current.slice(-1);

    // If "=" pressed, perform the calculation
    if (value === "=") {
      try {
        inputValue.value = eval(current);
        isResult = true; // Set flag to confirm a result is displayed
      } catch {
        inputValue.value = "NaN";
        isResult = true;
      }
    } else {
      // Prevent consecutive operators
      if ("+-*/".includes(lastChar) && "+-*/".includes(value)) {
        // Replace the last operator with the new one
        inputValue.value = current.slice(0, -1) + value;
      } else {
        // Add the operator to the input value
        inputValue.value += value;
      }
    }
  });
});

// Event listener for other buttons
document.querySelectorAll(".other").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const value = e.target.innerHTML.trim();
    let current = inputValue.value;

    // AC: Clear the display and reset the result flag
    if (value === "AC") {
      inputValue.value = "0";
      isResult = false;
    // DE: Delete the last character from the input or reset if only one character remains
    } else if (value === "DE") {
      if (current.length > 1) {
        inputValue.value = current.slice(0, -1);
      } else {
        inputValue.value = "0";
      }
    // +/-: Toggle the sign of current input
    } else if (value === "+/-") {
      try {
        inputValue.value = String(eval(current) * -1);
      } catch {
        inputValue.value = "NaN";
      }
    // %: Convert the current input to a percentage
    } else if (value === "%") {
      try {
        inputValue.value = String(eval(current) / 100);
      } catch {
        inputValue.value = "NaN";
      }
    }
  });
});

// Event listener for the "Enter" key to trigger "=" funcitonality
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent default action

    let current = inputValue.value;
    try {
      inputValue.value = eval(current);
      isResult = true;
    } catch {
      inputValue.value = "NaN";
      isResult = true;
    }
  }
});