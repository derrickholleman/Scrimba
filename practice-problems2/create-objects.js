let person = {
    name: 'Derrick',
    age: 25,
    country: 'America'
}

function logData() {
    return `${person.name} is ${person.age} years old and lives in ${person.country}`
}
console.log(logData())