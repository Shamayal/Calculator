// Show input/output for operations performed in the calculator
const inputValue = document.getElementById("display");

document.querySelectorAll(".number").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const value = e.target.innerHTML.trim();
    let current = inputValue.value;
    let lastChar = current.slice(-1);

    if (current === "NaN" || current === "0") {
      current = "";
    } 
    
    // Avoid multiple dots in the current number
    if (value === ".") {
      const lastOperatorIndex = Math.max(
        current.lastIndexOf("+"), 
        current.lastIndexOf("-"), 
        current.lastIndexOf("*"), 
        current.lastIndexOf("/")
      );

      const lastNumber = current.slice(lastOperatorIndex + 1);

      if (lastNumber.includes(".")) {
        return;
      }
    };

    inputValue.value = current + value;
  });
});

document.querySelectorAll(".operator").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const value = e.target.innerHTML.trim();
    let current = inputValue.value;
    let lastChar = current.slice(-1);

    if (value === "=") {
      try {
        inputValue.value = eval(current);
      } catch {
        inputValue.value = "NaN";
      }
    } else {
      // Avoid consecutive operators
      if ("+-*/".includes(lastChar) && "+-*/".includes(value)) {
        inputValue.value = current.slice(0, -1) + value;
      } else {
        inputValue.value += value;
      }
    }
  });
});

document.querySelectorAll(".other").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const value = e.target.innerHTML.trim();
    let current = inputValue.value;

    if (value === "AC") {
      inputValue.value = "0";
    } else if (value === "DE") {
      if (current.length > 1) {
        inputValue.value = current.slice(0, -1);
      } else {
        inputValue.value = "0";
      }
    } else if (value === "+/-") {
      try {
        inputValue.value = String(eval(current) * -1);
      } catch {
        inputValue.value = "NaN";
      }
    } else if (value === "%") {
      try {
        inputValue.value = String(eval(current) / 100);
      } catch {
        inputValue.value = "NaN";
      }
    }
  });
});

// Add logic to get rid of default zero when typing
inputValue.addEventListener("input", function () {
  if (inputValue.value === "0") {
    inputValue.value = "";
  }
});
