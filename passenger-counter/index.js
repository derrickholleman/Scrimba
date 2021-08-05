// set totalCount to HTML 
totalCount = document.getElementById('count-el')
// store save paragraph in a variable
let saveCount = document.getElementById('save') 
// initialize count variable as 0
let count = 0

function increment() {
    count += 1
    return totalCount.innerHTML = count // html now equals count
}

function save() {
    // store current count in variable that's called each time the save button is pressed
    let countStr = `${count} - `
    return saveCount.innerHTML += countStr
}

// welcome 
welcomeParagraph = document.getElementById('welcome')
let userName = 'Derrick'
let greeting = 'Hello,'
welcomeParagraph.innerHTML = `${greeting} ${userName}`
welcomeParagraph.innerHTML += ' 😄'



