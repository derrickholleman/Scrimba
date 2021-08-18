// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const imgContainer = document.getElementById('container')

function renderImgs(arr) {
    imgContainer.innerHTML = arr.map((img) => 
    `<img src=${img} class=team-img >`).join(' ')
}

renderImgs(imgs)
