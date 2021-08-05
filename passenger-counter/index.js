// set totalCount to HTML 
let totalCount = document.getElementById('count-el')
// store save paragraph in a variable
let saveCount = document.getElementById('save') 
// initialize count variable as 0
let count = 0

function increment() {
    count += 1
    totalCount.textContent = count // html now equals count
}

function save() {
    // store current count in variable that's called each time the save button is pressed
    let countStr = `${count} - `
    saveCount.textContent += countStr
    // reset counter and HTML to 0 on save
    totalCount.textContent = 0
    count = 0
}

// welcome 
welcomeParagraph = document.getElementById('welcome')
let userName = 'Derrick'
let greeting = 'Hello,'
welcomeParagraph.textContent = `${greeting} ${userName}`
welcomeParagraph.textContent += ' 😄'



