class Queue{
    constructor(){
        this.QueueItems=[]
    }

    enqueue(element){
        this.QueueItems.push(element)
    }
    dequeue(){
        return this.QueueItems.shift()
    }
    peek(){
        if(!this.isEmpty()){
            return this.QueueItems[0]
        }
        return null
       
    }
    isEmpty(){
        return this.QueueItems.length === 0;
    }
    size(){
        return this.QueueItems.length
    }
    print(){
        console.log(this.QueueItems.toString())
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.peek())

