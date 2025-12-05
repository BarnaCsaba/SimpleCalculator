let display= getElementById('display');
let currentInput = "0";

function updateDisplay() {
    display.textContent = currentInput;
}

function apppendNumber(num) {
    if (currentInput === "0") {
        currentInput = num;
    }
}
updateDisplay();