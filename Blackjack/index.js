// player info
let player = {
    name: 'Player 1',
    chips: 500
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = `${player.name}: $${player.chips}`

// create player cards
function getRandomCard() {
    return Math.floor(Math.random() * (11 - 2 + 1) + 2)
}
// store card numbers in an array
let cardHolder = [getRandomCard(), getRandomCard()]

// get sum of current cards
let sum = cardHolder.reduce((a, b) => a + b)

// get dealer cards 
let dealerCards = [getRandomCard(), getRandomCard(), getRandomCard()]
let dealerTotal = dealerCards.reduce((a, b) => a + b)

// set win boolean
let didWin = null

let message = document.getElementById('message-el')
let displaySum = document.getElementById('sum-el')
let displayCards = document.getElementById('cards-el')
let displayDealerTotal = document.getElementById('dealer-el')
// set default disabled state for buttons
document.getElementById('start-btn').disabled = false
document.getElementById('newCard-btn').disabled = true
document.getElementById('stand-btn').disabled = true
document.getElementById('ace1').disabled = true
document.getElementById('ace11').disabled = true
document.getElementById('reset-btn').disabled = true

function startGame() {
    document.getElementById('stand-btn').disabled = false
    document.getElementById('reset-btn').disabled = true
    renderGame()
}
function stand() {
    document.getElementById('reset-btn').disabled = false
    if (sum > dealerTotal && sum < 21 && dealerTotal !== 21) {
        message.textContent = "Good call! Press 'Reset' to play again"
        didWin = true
    } else if (sum < 21 && dealerTotal > 21) {
        message.textContent = "You win! Press 'Reset' to play again"
        didWin = true
    } else if (sum === dealerTotal) {
        message.textContent = "It's a tie! Press 'Reset' to play again"
        didWin = null
    } else if (dealerTotal === 21) {
        message.textContent = 'Dealer got Blackjack, you lose!'
        didWin = false
    }
    else {
        message.textContent = "Oh no!  You were beaten. Press 'Reset' to play again"
        didWin = false
    }
    displayDealerTotal.textContent = `Dealer Total: ${dealerTotal}`
    document.getElementById('newCard-btn').disabled = true
}

function renderGame() {
    document.getElementById('stand-btn').disabled = false
    // display player status message
    if (sum <= 20) {
        message.textContent = 'Do you want to draw a new card? Or STAND to be safe?'
        document.getElementById('newCard-btn').disabled = false
        document.getElementById('start-btn').disabled = true
    } else if (sum === 21) {
        message.textContent = "You win! Press 'Reset' to play again"
        document.getElementById('newCard-btn').disabled = true
        document.getElementById('stand-btn').disabled = true
        didWin = true
    } else {
        message.textContent = "You're out of the game! Press 'Reset' to play again"
        didWin = false
        document.getElementById('newCard-btn').disabled = true
        document.getElementById('stand-btn').disabled = true
    }

    // display cards array as text 
    displayCards.textContent = `Current Cards: ${cardHolder.map((card) => ` ${card}`)}`

    // display sum
    displaySum.textContent = `Your Total: ${sum}`

    // disable ace buttons if not choosing a 1 or 11
    document.getElementById('ace1').disabled = true
    document.getElementById('ace11').disabled = true
}

function getNewCard() {
    document.getElementById('reset-btn').disabled = false
    // draw new card with random number
    let newCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)

    if (sum <= 20 && newCard === 1) {
        message.textContent = "You drew an Ace!  Please specify if you'd like a 1 or an 11"
        document.getElementById('ace1').disabled = false
        document.getElementById('ace11').disabled = false
        document.getElementById('ace1').classList.add('show')
        document.getElementById('ace11').classList.add('show')
        document.getElementById('newCard-btn').disabled = true
        document.getElementById('start-btn').disabled = true
    } else if (sum <= 20 && newCard === 11) {
        message.textContent = "You drew an Ace!  Please specify if you'd like a 1 or an 11"
        document.getElementById('ace11').disabled = false
        document.getElementById('ace1').disabled = false
        document.getElementById('ace1').classList.add('show')
        document.getElementById('ace11').classList.add('show')
        document.getElementById('newCard-btn').disabled = true
        document.getElementById('start-btn').disabled = true
    } else {
        document.getElementById('ace11').disabled = true
        document.getElementById('ace1').disabled = true
        // add card value to current sum
        sum += newCard
        // add card to card array
        cardHolder.push(newCard)
        renderGame()
    }
}

function aceEquals1() {
    sum += 1
    cardHolder.push(1)
    renderGame()
}
function aceEquals11() {
    sum += 11
    cardHolder.push(11)
    renderGame()
}

function resetGame() {
    if (didWin === true) {
        playerEl.textContent = `${player.name}: $${player.chips += 50}`
        // reset win boolean
        didWin = null
    } else if (didWin === false) {
        playerEl.textContent = `${player.name}: $${player.chips -= 50}`
        didWin = null
    }

    // reset text
    displaySum.textContent = `Current cards: `
    displayCards.textContent = `Your total: `
    message.textContent = `Want to play a round?`
    displayDealerTotal.textContent = `Dealer Total: `

    // reset cards 
    cardHolder = [getRandomCard(), getRandomCard()]

    // reset sum
    sum = cardHolder.reduce((a, b) => a + b)

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
