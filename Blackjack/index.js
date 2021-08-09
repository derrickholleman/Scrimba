// player info
let player = {
    name: 'Player 1',
    chips: 500
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = `${player.name}: $${player.chips}`

// get random numbers for player cards
function getRandomCard() {
    return Math.floor(Math.random() * (11 - 2 + 1) + 2)
}
// get player cards
let cardHolder = [getRandomCard(), getRandomCard()]
let playerTotal = cardHolder.reduce((a, b) => a + b)

// get dealer cards 
let dealerCards = [getRandomCard(), getRandomCard(), getRandomCard()]
let dealerTotal = dealerCards.reduce((a, b) => a + b)

// set win boolean
let didWin = null

let message = document.getElementById('message-el')
let displayPlayerTotal = document.getElementById('sum-el')
let displayCards = document.getElementById('cards-el')
let displayDealerTotal = document.getElementById('dealer-el')
// set default disabled state for buttons
document.getElementById('start-btn').disabled = false
document.getElementById('newCard-btn').disabled = true
document.getElementById('stand-btn').disabled = true

function startGame() {
    document.getElementById('reset-btn').disabled = true
    // dealer draws cards until dealer total is more than 15
    if (dealerTotal <= 15) {
        dealerCards.push(getRandomCard())
        dealerTotal = dealerCards.reduce((a, b) => a + b)
    } if (dealerTotal <= 15) {
        dealerCards.push(getRandomCard())
        dealerTotal = dealerCards.reduce((a, b) => a + b)
    // take away a card if dealer total ridiculously high
    } if (dealerTotal >= 25) {
        dealerCards.pop()
        dealerTotal = dealerCards.reduce((a, b) => a + b)
    }

    renderGame()
}
function stand() {
    document.getElementById('reset-btn').disabled = false
    if (playerTotal > dealerTotal && playerTotal < 21 && dealerTotal !== 21) {
        message.textContent = "Good call! Press 'New Game' to play again"
        didWin = true
    } else if (playerTotal < 21 && dealerTotal > 21) {
        message.textContent = "You win! Press 'New Game' to play again"
        didWin = true
    } else if (playerTotal === dealerTotal) {
        message.textContent = "It's a tie! Press 'New Game' to play again"
        didWin = null
    } else if (dealerTotal === 21) {
        message.textContent = 'Dealer got 21, you lose!'
        didWin = false
    }
    else {
        message.textContent = "Oh no!  You lost. Press 'New Game' to play again"
        didWin = false
    }
    displayDealerTotal.textContent = `Dealer Total: ${dealerTotal}`
    document.getElementById('newCard-btn').disabled = true
}

function renderGame() {
    document.getElementById('stand-btn').disabled = false
    // display player status message
    if (playerTotal <= 20) {
        message.textContent = 'Do you want to draw a new card? Or STAND to be safe?'
        document.getElementById('newCard-btn').disabled = false
        document.getElementById('start-btn').disabled = true
    } else if (playerTotal === 21) {
        message.textContent = "You win! Press 'New Game' to play again"
        document.getElementById('newCard-btn').disabled = true
        document.getElementById('stand-btn').disabled = true
        document.getElementById('reset-btn').disabled = false
        didWin = true
    } else {
        message.textContent = "You're out of the game! Press 'New Game' to play again"
        didWin = false
        document.getElementById('newCard-btn').disabled = true
        document.getElementById('stand-btn').disabled = true
        document.getElementById('reset-btn').disabled = false
    }

    // display cards array as text 
    displayCards.textContent = `Current Cards: ${cardHolder.map((card) => ` ${card}`)}`

    // display sum
    displayPlayerTotal.textContent = `Your Total: ${playerTotal}`
}

function getNewCard() {
    document.getElementById('reset-btn').disabled = false
    // draw new card with random number
    let newCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)

    // if an Ace is drawn 
    if (playerTotal <= 20 && newCard === 1) {
        message.textContent = "You drew an Ace!  Please specify if you'd like a 1 or an 11"
        document.getElementById('ace1').classList.add('show')
        document.getElementById('ace11').classList.add('show')
        document.getElementById('newCard-btn').disabled = true
        document.getElementById('start-btn').disabled = true
        document.getElementById('stand-btn').disabled = true
    } else if (playerTotal <= 20 && newCard === 11) {
        message.textContent = "You drew an Ace!  Please specify if you'd like a 1 or an 11"
        document.getElementById('ace1').classList.add('show')
        document.getElementById('ace11').classList.add('show')
        document.getElementById('newCard-btn').disabled = true
        document.getElementById('start-btn').disabled = true
        document.getElementById('stand-btn').disabled = true
    } else {
        // add card value to current sum
        playerTotal += newCard
        // add card to card array
        cardHolder.push(newCard)
        renderGame()
    }
}

function aceEquals1() {
    playerTotal += 1
    cardHolder.push(1)
    // remove show class after choosing a number
    document.getElementById('ace1').classList.remove('show')
    document.getElementById('ace11').classList.remove('show')

    renderGame()
}
function aceEquals11() {
    playerTotal += 11
    cardHolder.push(11)
    document.getElementById('ace1').classList.remove('show')
    document.getElementById('ace11').classList.remove('show')

    renderGame()
}

function resetGame() {
    // give new point total on reset click
    if (didWin === true) {
        playerEl.textContent = `${player.name}: $${player.chips += 50}`
        // reset win boolean
        didWin = null
    } else if (didWin === false) {
        playerEl.textContent = `${player.name}: $${player.chips -= 50}`
        didWin = null
    }

    // reset text
    displayPlayerTotal.textContent = `Your total: `
    displayCards.textContent = `Current cards: `
    message.textContent = `Want to play a round?`
    displayDealerTotal.textContent = `Dealer total: `

    // reset cards 
    cardHolder = [getRandomCard(), getRandomCard()]

    // reset sum
    playerTotal = cardHolder.reduce((a, b) => a + b)

    // reset dealer cards 
    dealerCards = [getRandomCard(), getRandomCard(), getRandomCard()]
    dealerTotal = dealerCards.reduce((a, b) => a + b)

    // allow start button to be clicked again
    document.getElementById('start-btn').disabled = false

    // disable stand button directly after reset 
    document.getElementById('stand-btn').disabled = true

    document.getElementById('ace1').classList.remove('show')
    document.getElementById('ace11').classList.remove('show')
}
