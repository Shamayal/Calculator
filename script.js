// Show input/output for operations performed in the calculator
const inputValue = document.getElementById("display");

const number = document.querySelectorAll(".number").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN") {
      inputValue.innerText = "";
    }
    if (inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

const calculate = document.querySelectorAll(".operator").forEach(function (item) {
  item.addEventListener("click", function (e) {
    console.log(e.target.innerHTML);
  });
});