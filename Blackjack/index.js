let firstCard = 4
let secondCard = 6
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = document.getElementById('message-el')
let displaySum = document.getElementById('sum-el')
let displayCards = document.getElementById('cards-el')

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message.textContent = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message.textContent = 'You win!'
    } else {
        message.textContent = "You're out of the game!"
    }
    displayCards.textContent = `Cards: ${firstCard} ${secondCard}`
    displaySum.textContent = `Sum: ${sum}`
}

function newCard() {
    let card = Math.floor(Math.random() * (11 - 2 + 1) + 2)
    sum += card
    renderGame()
}
