// Use .innerHTML to render a Buy! button inside the div container
// When clicked, render a paragraph under the button (in the container) that says "Thank you for buying!"

const container = document.getElementById('container')
container.innerHTML = "<button id='buy-btn'>BUY</button>"

const buyBtn = document.getElementById('buy-btn')

buyBtn.addEventListener('click', function() {
    container.innerHTML += "<p>Thank you for buying!</p>"
})

