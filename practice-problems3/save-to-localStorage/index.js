// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

let renderEl = document.getElementById('renderArr')

const dogs = ['Dino', 'Fido', 'Goodboy', 'Woofer']

localStorage.setItem('dogList', JSON.stringify(dogs))

let dogList = JSON.parse(localStorage.getItem('dogList'))

renderEl.textContent = dogList.join(' ')