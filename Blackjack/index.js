// function getTwoCards(min, max) {
//     let firstCard = Math.floor(Math.random() * (max - min) + min)
//     let secondCard = Math.floor(Math.random() * (max - min) + min)
//     let sum = firstCard + secondCard
//     return sum
// }
// console.log(getTwoCards(2, 11))

let firstCard = 14
let secondCard = 3
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message =''

if (sum <= 20) {
    message = 'Do you want to draw a new card?'
} else if (sum === 21) {
    message = 'You win!'
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
console.log(hasBlackJack)
console.log(isAlive)
console.log(message)