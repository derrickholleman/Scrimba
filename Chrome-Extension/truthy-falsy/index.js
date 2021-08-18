const credits = 1

if (credits) {
    console.log("Let's play!")
} else {
    console.log('Sorry, not enough credits!')
}

// falsy

// false
// 0
// "" - empty string
// null - how you as a dev signalize emptiness
// undefined - how Javascript signalizes emptiness
// NaN

let currentViewers = ['Jane']

// empty array [] = having viewers, must specify null for falsy

if (currentViewers) {
    // do something , e.g. notify the live streamers
    console.log(currentViewers.map((viewer) => viewer))
}

console.log(Boolean("")) // false
console.log(Boolean("0")) // true
console.log(Boolean(100)) // true
console.log(Boolean(null)) // false
console.log(Boolean([0])) // true
console.log(Boolean(-0) ) // false