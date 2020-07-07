


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
        this.food -= 1
        if(this.food == 0){
        this.isHealthy = false

    }

}
}


class Wagon {
    constructor(){
        this.capacity = 5
        this.passengers = []

    }
    getAvailableSeatCount(){ 
        /**figure out array iterators */
        for( let i =0; i < this.passengers.length; i ++){
            return this.passengers.length 
        }

        //Returns the number of empty seats, 
        //determined by the capacity set when the wagon was created, 
        //subtracted by the number of passengers currently on board.
    }
    join(traveler){
        if(this.capacity < 5 ){
            this.passengers.push(new Traveler(name))
        }else{
            //alert ('No room for you paddy, start walking!')
        }
        
    }
    shouldQuarantine(traveler){
            //if .some()doesnt work maybe try find?
       this.passengers.some(this.isHealthy)
           return true
       }
        //returns true if at least one unhealthy person is in the wagon, false if not
    
    totalFood(){
        //returns total food of all passengers in the wagon
    }
}

