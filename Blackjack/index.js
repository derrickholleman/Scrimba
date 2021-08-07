// create card array 
let cardHolder = [Math.floor(Math.random() * (11 - 2 + 1) + 2), Math.floor(Math.random() * (11 - 2 + 1) + 2)]

// get sum of current cards
let sum = cardHolder.reduce((a, b) => a + b)

let message = document.getElementById('message-el')
let displaySum = document.getElementById('sum-el')
let displayCards = document.getElementById('cards-el')
// set state for new card button
document.getElementById('newCard-btn').disabled = true

function startGame() {
    renderGame()
}

function renderGame() {
    // display player status message
    if (sum <= 20) {
        message.textContent = 'Do you want to draw a new card?'
        document.getElementById('newCard-btn').disabled = false
    } else if (sum === 21) {
        message.textContent = 'You win!'
        document.getElementById('newCard-btn').disabled = true
    } else {
        message.textContent = "You're out of the game! Press 'Reset' to play again"
        document.getElementById('newCard-btn').disabled = true
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

function resetGame() {
    // reset text
    displaySum.textContent = `Sum: `
    displayCards.textContent = `Cards: `
    message.textContent = 'Want to play a round?'

    // reset cards 
    cardHolder = [Math.floor(Math.random() * (11 - 2 + 1) + 2), Math.floor(Math.random() * (11 - 2 + 1) + 2)]

    // reset sum
    sum = cardHolder.reduce((a, b) => a + b)
}
