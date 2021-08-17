let myLeads = []
const inputBtn = document.getElementById('input-btn')
const inputEl = document.getElementById('input-el')
const renderInput = document.getElementById('leads-el')

// fetch leads from storage by it's key name
let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))


inputBtn.addEventListener('click', () => {
    // don't allow push if value is empty, else push value
    inputEl.value.length === 0 ? null : myLeads.push(inputEl.value)
    // reset input field 
    inputEl.value = ''
    // save leads leads array to localStorage as a string
    localStorage.setItem('myLeads', JSON.stringify(myLeads))

    renderLeads()   
})

function renderLeads() {
    // map leads to <ul> tag as <li> by using innerHTML
    renderInput.innerHTML = myLeads.map((lead) => 
    `
        <li>
            <a href=${lead} target=_blank>${lead}</a>
        </li>
    `
    ).join('')
}

