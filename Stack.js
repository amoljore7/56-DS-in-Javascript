class Stack{
    constructor(){
        this.StackItems=[]
    }

    push(element){
        this.StackItems.push(element)
    }
    pop(){
        return this.StackItems.pop()
    }
    peek(){
        return this.StackItems[this.StackItems.length - 1]
    }
    isEmpty(){
        return this.StackItems.length === 0;
    }
    size(){
        return this.StackItems.length
    }
    print(){
        console.log(this.StackItems.toString())
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.size())
stack.print()
console.log(stack.pop())
stack.print()
console.log(stack.peek())

