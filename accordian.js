class Accordian {
    constructor(summaryText, detailsBody){
        this.detailsBody =JSON.stringify(detailsBody)
        this.summaryText = summaryText
        this.element = null

        this.generate()
    }

    appendTo(parentElement){
        return this.element
    }

    toString(){
        return this.summaryText
    }

    generate (){
        const detailsElement = document.createElement('details')
        const summaryElement = document.createElement('summary')
        detailsElement.append(summaryElement)
        summaryElement.append(this.summaryText)
        detailsElement.append(this.detailsBody)
        this.element = detailsElement
    }
  appendTo (parentElement){
      parentElement.append(this.element)
  }
 getElement(){
     return this.element
 }

 toString(){
     return this.summaryText
 }


}

let myAcc = new Accordian("look at this shit" , "sutff and stuff")
myAcc.appendTo(document.querySelector("main"))

traveler.forEach((traveler) => {
    let travelerAcc = new Accordian (traveler.name,traveler)
    travelerAcc.appendTo(document.querySelector('main'))
}  )