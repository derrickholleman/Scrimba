let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string

myLeads = JSON.parse(myLeads)
myLeads.push('www.facebook.com')
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)