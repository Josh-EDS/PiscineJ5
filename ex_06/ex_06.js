const agents = [
    {
      name: "James Bond",
      code: "007",
      age: 57,
      car: { color: "grey", brand: "Aston Martin", model: "DB5" },
      isMatching(key, value) { return this.car[key] == value }},

    {
      name: "Ethan Hunt",
      code: "002",
      age: 45,
      car: { color: "black", brand: "BMW", model: "M5" },
      isMatching(key, value) { return this.car[key] == value }},

    ]
  
  function searchCars(agents, key, value) {
    let matchingCars = []
    agents.forEach((agent) => {
      if (agent.isMatching(key, value)) { matchingCars.push(agent.car) }})
    return matchingCars
  }
  
let result = searchCars(agents, "color", "grey")
console.log(result)