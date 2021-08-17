// let myLeads = `["www.awesomelead.com"]`

// // 1. Turn the myLeads string into an array
// // 2. Push a new value to the array
// // 3. Turn the array into a string again
// // 4. Console.log the string using typeof to verify that it's a string

// myLeads = JSON.parse(myLeads)
// myLeads.push('www.facebook.com')
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

const renderText = document.getElementById('text')

let names = ['Derrick', 'Stef', 'Julie']
names.push('Sam')

// push array to local storage as a string
localStorage.setItem('names', JSON.stringify(names))
// set local storage data as a variable, while turning it back into an array with JSON.parse
let text = JSON.parse(localStorage.getItem(('names')))
// render local storage data as an array joined by spaces
renderText.textContent = text.join(' ')