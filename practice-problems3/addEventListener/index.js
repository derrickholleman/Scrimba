// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

const btnJane = document.getElementById('btn-jane')
const btnMark = document.getElementById('btn-mark')
const janeScoreEl = document.getElementById('jane-score')
const markScoreEl = document.getElementById('mark-score')

btnJane.addEventListener('click', () => {
    janeScoreEl.textContent = `Jane: ${data[0].score}`
})

btnMark.addEventListener('click', () => {
    markScoreEl.textContent = `Mark: ${data[1].score}`
})

