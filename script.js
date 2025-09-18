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
    console.log(value, current, lastChar)
  })
})


// let lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length - 1);
// if (!isNaN(lastValue) && e.target.innerHTML === "=") {
//   inputValue.innerText = eval(inputValue.innerText);
// } else if (e.target.innerHTML === "AC") {
//   inputValue.innerText = 0;
// } else if (e.target.innerHTML === "DE") {
//   inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
//   if (inputValue.innerText.length == 0) {
//     inputValue.innerText = 0;
//   }
// } else {
//   if (!isNaN(lastValue)) {
//     inputValue.innerText += e.target.innerHTML;
//   }
// }