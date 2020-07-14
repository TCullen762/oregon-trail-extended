
//why is wagon undefined?

class Traveler {
    constructor(name){
        this.name = name
        this.food  = 1
        this.isHealthy = true
       
    }
    hunt(){
        
       
    this.food  +=2
        

     

    }
    eat(){
        
        if(this.food == 0){
        this.isHealthy = false}
        else{
        this.food -= 1
        }

    }
    
}

class Doctor extends Traveler{
    constructor(name, isHealthy){
        super(name,isHealthy)
    }
    heal(traveler){
        if(traveler.isHealthy === false){
        traveler.isHealthy = true
        }
    }

}


class Hunter extends Traveler {
    constructor (name, food, isHealthy){
        super(food,isHealthy)
        this.food = 2
        
    }
    hunt() {
        this.food  +=5
    }

    eat(){

        
        if(this.food < 2){
        this.food = 0
        this.isHealthy = false
    }else{
        this.food -=2
    }
    
}


  



giveFood(traveler, numOfFoodUnits){
    if(this.food > 2) {
        traveler.food += numOfFoodUnits 
        this.food -= numOfFoodUnits
    }

}

}//closing hunter class curlies
    
console.log(Hunter)
    

    
        
    





class Wagon {
    constructor(capacity){
        this.capacity = capacity
        this.passengers = []
       

    }
    getAvailableSeatCount(){ 
     
        return this.capacity - this.passengers.length
        

            }
        
        
        
        

        
        

    
    
    join(Traveler){
        if(this.getAvailableSeatCount() > 0){
            this.passengers.push(Traveler)
        }
        
    }
    shouldQuarantine(){
       
  
           let healthCheck = this.passengers.some(traveler => traveler.isHealthy === false)
       
        return healthCheck
       }

 
    
    totalFood(){
            let totalFood = 0
        for(let i = 0; i < this.passengers.length; i ++){
            

       totalFood += this.passengers[i].food  

       
    }
    return totalFood
}

}
/* TODO: 
Buttons
    - add new traveler
    - add new wagon
        Nested in display boxes
            - eat
            - hunt
             dr class 
              - heal
              hunter class
              - hunt
Display boxes
- traveler
  - food
  - health
  - name - need input box and relevent function
  - wagon

/*let newDiv = document.createElement('div')
newDiv.append('hello')
let sectionElement = document.querySelector('section')
sectionElement.append(newDiv)

  let displayFlips = document.createElement('div')
     displayFlips.append(coin.toString())
        document.body.append(displayFlips)*/


let  addWagonDiv = document.createElement('div')
addWagonDiv.append('add new wagon')
document.body.append(addWagonDiv)

let addNewWagonButton = document.createElement('button')
addNewWagonButton.append('Add Wagon')
document.body.append(addNewWagonButton)
addNewWagonButton.addEventListener("click", function(){
    
    let wagonA = new Wagon('wagon')
    document.body.append(wagonA)


})

let  addTravelerDiv = document.createElement('div')
addTravelerDiv.append('add new traveler')
document.body.append(addTravelerDiv)

let addNewTravelerButton = document.createElement('button')
addNewTravelerButton.append('Add passenger')
document.body.append(addNewTravelerButton)
addNewTravelerButton.addEventListener("click", function(){
    
    let passenger = new Traveler(name)
    JSON.stringify(passenger)
    document.body.append(passenger)
    

})

//figure out the stringify method
