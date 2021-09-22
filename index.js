// js 1 lesson 6
class Animal {
    constructor(name, legs) {
        this.name = name
        this.legs = legs
    }
    speech(){
        return `${this.name} makes a noise`
    }
    numberOfLegs(){
        return `This animal has ${this.legs} legs`
    }
}
const dog = new Animal("Dog" , 4)

console.log( dog.speech() )
console.log( dog.numberOfLegs() )

const cat = new Animal("Cat", 4)

console.log( cat.speech())
console.log( cat.numberOfLegs())

const spider = new Animal("Spider", 8)

console.log( spider.speech())
console.log( spider.numberOfLegs())