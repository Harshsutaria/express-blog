function createBase(baseNumber){
    return function sum(n){
        return n+baseNumber
    }
}


console.log(createBase(6)(10))