
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


