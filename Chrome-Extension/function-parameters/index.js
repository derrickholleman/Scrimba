const welcomeEl = document.getElementById("welcome-el")
const greetingEl = document.getElementById('greeting-el')

function greetUser(name) {
    welcomeEl.textContent = `Welcome back, ${name}!`    
}

greetUser('Derrick Holleman')

function greeting(str, name, emoji) {
    greetingEl.textContent = `${str}, ${name}! ${emoji}`
}

greeting('Nice to see you again', 'Derrick', '👋')