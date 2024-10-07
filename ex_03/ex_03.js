function addCarToAgent(agent, brand, model, color, power) {
    if (!brand || !model || !color || !power) {
    console.error("One of the keys is missing or uncorrectly typed")
    return null
    }
    agent.car = {
    brand: brand,
    model: model,
    color: color,
    power: power
    }
    return agent
    }

let agent = {
    firstName: "James",
    lastName: "Bond",
    age: "51",
    code: "007"
}

shareThatBeauty(addCarToAgent(agent, 'Aston Martin', 'DBZ', 'blue', '2M HP'))
