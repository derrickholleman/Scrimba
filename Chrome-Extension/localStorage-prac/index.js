const renderText = document.getElementById('text')

let names = ['Derrick', 'Stef', 'Julie']
names.push('Sam')

// push array to local storage as a string
localStorage.setItem('names', JSON.stringify(names))

// set local storage data as a variable, while turning it back into an array with JSON.parse
let text = JSON.parse(localStorage.getItem('names'))

// render local storage data as an array joined by spaces
renderText.textContent = text.join(' ')