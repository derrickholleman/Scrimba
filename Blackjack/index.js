// create cards
let firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
let secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)

// create card array 
let cardHolder = []
cardHolder.push(firstCard, secondCard)

// get sum of current cards
let sum = cardHolder.reduce((a, b) => a + b)

let message = document.getElementById('message-el')
let displaySum = document.getElementById('sum-el')
let displayCards = document.getElementById('cards-el')

function startGame() {
    renderGame()
}

function renderGame() {

    // display player status message
    if (sum <= 20) {
        message.textContent = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message.textContent = 'You win!'
    } else {
        message.textContent = "You're out of the game!"
    }

    // display cards array as text 
    displayCards.textContent = `Cards: ${cardHolder.map((card) => ` ${card}`)}`

    // display sum
    displaySum.textContent = `Sum: ${sum}`
}

function newCard() {

    // draw new card with random number
    let card = Math.floor(Math.random() * (11 - 2 + 1) + 2)
    // add card value to current sum
    sum += card

    // add new card to card array
    cardHolder.push(card)
    renderGame()
}
