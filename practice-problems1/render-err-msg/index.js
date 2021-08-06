// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let renderError = document.getElementById('error')

function purchase() {
    renderError.textContent = "Something went wrong, please try again"
    setTimeout(function(){ 
        renderError.textContent = ""
    }, 2000);
}