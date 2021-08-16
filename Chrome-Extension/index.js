let myLeads = []
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const renderInput = document.getElementById('leads-el')


inputBtn.addEventListener('click', function () {
    renderLeads()
    // reset input field 
    inputEl.value = ''
})

function renderLeads() {
    // declare string to store leads
    let listItems = ''
    // don't allow push if value is empty, else push value
    inputEl.value.length === 0 ? null : myLeads.push(inputEl.value)
    // map leads to <ul> tag as <li> by using innerHTML
    listItems = myLeads.map((lead) => `<li><a href=${lead} target=_blank>${lead}</a></li>`).join('')
    // only manipulating DOM once, instead of on each render
    renderInput.innerHTML = listItems
}
