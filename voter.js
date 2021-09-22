class Voter {
    constructor (firstName, lastName, birthYear) {
        
        this.firstName = firstName
        this.lastName = lastName
        this.birthYear = birthYear
    }
    getAge(){
        return this.birthYear = 2021 - this.birthYear
    }
    canVote(){
        if(this.getAge() >= 18){
            return `Du är över 18, så du får rösta ${this.firstName} ${this.lastName}`
        }else{
            return `Du är inte över 18. ${this.firstName} ${this.lastName}`
        }
        
    }
    
    
}
const vote1 = new Voter ("John", "Sjödén", 1995)
console.log(vote1.canVote())
