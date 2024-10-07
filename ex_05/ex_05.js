const car = {
    color: "grey",
    brand: "Aston Martin",
    model: "DB5",
    logInfo() { console.log('Car information: '+this.color+', '+this.model+', '+this.brand) }}

let agent = {
    firstName: "James",
    lastName: "Bond",
    age: "51",
    code: "007",
    car: car,
    logInfo() { console.log('Agent information : '+this.firstName+' '+this.lastName+', '+this.code+', '+this.age+'\n'+this.firstName+' '+this.lastName+"'s Car information: "+this.car.color+', '+this.car.model+', '+this.car.brand) }}
    

agent.logInfo() ;
agent.car.logInfo() ;