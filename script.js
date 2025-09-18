// Show input/output for operations performed in the calculator
const inputValue = document.getElementById("display");

document.querySelectorAll(".number").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const value = e.target.innerHTML.trim();
    let current = inputValue.innerText;
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

    inputValue.innerText = current + value;
  });
});

document.querySelectorAll(".operator").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const value = e.target.innerHTML.trim();
    let current = inputValue.innerText;
    let lastChar = current.slice(-1);

    if (value === "=") {
      try {
        inputValue.innerText = eval(current);
      } catch {
        inputValue.innerText = "NaN";
      }
    } else {
      // Avoid consecutive operators
      if ("+-*/".includes(lastChar) && "+-*/".includes(value)) {
        inputValue.innerText = current.slice(0, -1) + value;
      } else {
        inputValue.innerText += value;
      }
    }
  });
});

document.querySelectorAll(".other").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const value = e.target.innerHTML.trim();
    let current = inputValue.innerText;

    if (value === "AC") {
      inputValue.innerText = "0";
    } else if (value === "DE") {
      if (current.length > 1) {
        inputValue.innerText = current.slice(0, -1);
      } else {
        inputValue.innerText = "0";
      }
    } else if (value === "+/-") {
      try {
        inputValue.innerText = String(eval(current) * -1);
      } catch {
        inputValue.innerText = "NaN";
      }
    } else if (value === "%") {
      try {
        inputValue.innerText = String(eval(current) / 100);
      } catch {
        inputValue.innerText = "NaN";
      }
    }
  });
});