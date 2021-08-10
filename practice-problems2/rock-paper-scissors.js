let hands = ["rock", "paper", "scissors"]
let player1 = hands[Math.floor(Math.random() * hands.length)]
let player2 = hands[Math.floor(Math.random() * hands.length)]

function play() {
    if (player1 === 'rock' && player2 === 'scissors') {
        return 'player1 wins!'
    }
    if (player1 === 'paper' && player2 === 'scissors') {
        return 'player2 wins!'
    }
    if (player1 === 'scissors' && player2 === 'scissors') {
        return 'Its a tie!'
    }
    if (player1 === 'rock' && player2 === 'rock') {
        return 'Its a tie'
    }
    if (player1 === 'paper' && player2 === 'rock') {
        return 'player1 wins!'
    }
    if (player1 === 'scissors' && player2 === 'rock') {
        return 'player2 wins'
    }
    if (player1 === 'rock' && player2 === 'paper') {
        return 'player2 wins'
    }
    if (player1 === 'paper' && player2 === 'paper') {
        return 'Its a tie'
    }
    if (player1 === 'scissors' && player2 === 'paper') {
        return 'player1 wins'
    }
}
console.log('Player 1: ' + player1)
console.log('Player 2: ' + player2)
console.log(play())