let myLeads = []
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const inputEl = document.getElementById('input-el')
const renderInput = document.getElementById('leads-el')

// fetch leads from storage by it's key name, set as an array
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

// check if there are leads before rendering to page
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
} else {
    null
}

function render(arr) {
    // map leads to <ul> tag as <li> by using innerHTML
    renderInput.innerHTML = arr.map((lead) => 
    `
        <li>
            <a href=${lead} target=_blank>${lead}</a>
        </li>
    `
    ).join('')
}

inputBtn.addEventListener('click', () => {
    // don't allow push if value is empty, else push value
    inputEl.value.length === 0 ? null : myLeads.push(inputEl.value)
    // reset input field 
    inputEl.value = ''
    // save leads leads array to localStorage as a string, with they key 'myLeads'
    localStorage.setItem('myLeads', JSON.stringify(myLeads))

    render(myLeads)   
})

deleteBtn.addEventListener('click', () => { 
    // clear leads array and clear localStorage
    myLeads = [] 
    localStorage.clear()

    // render empty leads array to page
    render(myLeads) 
})

