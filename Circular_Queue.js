class Circular_Queue{
    constructor(capacity){
        this.QueueItems= new Array(capacity)
        this.rear = -1;
        this.front = -1;
        this.currentLength = 0;
        this.capacity = capacity;

    }

    isEmpty(){
        return this.currentLength === 0;
    }
    
    isFull(){
        return this.currentLength.length == this.capacity
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = this.rear +1
            this.QueueItems[this.rear] = element
            this.currentLength += 1 
            if(this.front == -1){
                this.front = this.rear
            }
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.QueueItems[this.front]
        this.front = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -=1
        if(this.isEmpty()){
            this.rear = -1
            this.front = -1
        }
        return item
    }
    peek(){
        if(!this.isEmpty()){
            return this.QueueItems[0]
        }
        return null
       
    }
  
    print(){
        if(this.isEmpty()){
            console.log("Queue is empty")
        }
        else{
        let i;
        let str = '';

        for(i =this.front; i !== this.rear; i = (i+1) % this.capacity){
                str += this.QueueItems[i] + ' '
        }
        str += this.QueueItems[i]
        console.log(str)
    }
    }
}

const queue = new Circular_Queue(5)
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.peek())

