
class Stack{
    constructor(n){
        this.n = n
        this.stack = []
        this.top = 0
    }

    push(a){
        if(this.stack.length < this.n){
            this.stack[this.top] = a
            this.top += 1
        }else{
            console.log("STACK OVERFLOW")
        } 
        console.log("stack is",this.stack,this.top)
    }

    pop(){
        if(this.stack.length>0){
            this.top -= 1
            this.stack[this.top] = -1
        }else{
            console.log("STACK IS EMPTY")
        }
        console.log("stack is",this.stack , this.top)
    }
}


let stack = new Stack(2)
stack.pop()
stack.push(1)
stack.push(2)
stack.push(3)
