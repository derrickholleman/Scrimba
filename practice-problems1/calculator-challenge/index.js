let num1 = 6
let num2 = 6
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
total = document.getElementById('sum-el')

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

function add() {
    // store numbers in a variable to allow string and num to be added together
    let result = num1 + num2
    total.textContent = `Sum: ${result}`
}

function subtract() {
    let result = num1 - num2
    total.textContent = `Sum: ${result}`
}

function divide() {
    let result = num1 / num2
    total.textContent = `Sum: ${result}`
}

function multiply() {
    let result = num1 * num2
    total.textContent = `Sum: ${result}`
}


