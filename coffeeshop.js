class costumer {
    constructor(){
        this.transactions = []
        this.discountThreshold = 1000

    }
    addTransaction(amount){
        return this.transactions.push(amount)
    }
    getTotalSpent(){
        let sum = 0
        this.transactions.forEach(transaction =>{
            sum += transaction
        })
        return sum
    }
    isEligableForDiscount(){
        return this.getTotalSpent() >= this.discountThreshold
    }  
}

const costumer1 = new costumer()
costumer1.addTransaction(254)

console.log( costumer1.getTotalSpent())