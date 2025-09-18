// Show input/output for operations performed in the calculator
const inputValue = document.getElementById("display");

document.querySelectorAll(".number").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
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