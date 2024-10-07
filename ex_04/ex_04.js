function updateLicensePlates(agent, plate) {
    if (!agent.car) {
      console.error("The agent doesn't have a car property")
      return null
    }
    agent.car.licensePlates = plate
    return agent
  }
  
  function showLicensePlates(agent) {
    if (!agent.car || !agent.car.licensePlates) {
      console.error("No license plates available")
      return
    }
  
    let ul = document.querySelector(".plates-container")
    ul.innerHTML = ""
    agent.car.licensePlates.forEach((plate) => {
      let li = document.createElement("li")
      li.textContent = plate
      ul.appendChild(li)
    })
  }
  
  window.onload = function () {
    let agent = { car: {} }
    
    updateLicensePlates(agent, ["LU 6789", "4711-EA-62", "BMT 216A"])
    showLicensePlates(agent)
  }
  