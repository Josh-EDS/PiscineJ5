function displayAgentInfo(agent) {
    const element = document.querySelector('#container > p');
    element.innerHTML = 'My name is ' + agent.lastName + ', ' + agent.firstName + ' ' + agent.lastName + "! I'm the agent " + agent.code + " and I'm " + agent.age + " years old.";
}

let firstName = prompt("What's your first name?")
let lastName = prompt("What's your last name?")
let age = parseInt(prompt('How old are you?'))
let code = prompt('And lastly, what is your secret code?')

let agent = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    code: code
}

window.addEventListener('load', function () {
    displayAgentInfo(agent)
})

function addCar(agentString, car) {
    agent = JSON.parse(agentString)
    agent.car = car
    return agent
    }
    
console.log(agent)