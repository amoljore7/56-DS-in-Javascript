// Construct Single Node
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Create/Get/Remove Nodes From Linked List
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    isEmpty(){
      return this.size === 0
    }
    getSize(){
      return this.size
    }
    clearList() {
      this.head = null;
      this.size = 0;
    }
  
    // Insert first node
    insertFirst(data) {
      const newNode = new Node(data);
      if(this.isEmpty()){
        this.head = newNode
      }else{
        newNode.next = this.head
        this.head = newNode
      }
      this.size++;
    }
  
    // Insert last node
    insertLast(data) {
      let newNode = new Node(data);
  
      // If empty, make head
      if (this.isEmpty()) {
        this.head = newNode;
      } else {
        let temp = this.head;
        while (temp.next != null) {
          temp = temp.next;
        }
        temp.next = newNode;
      }
      this.size++;
    }
  
    // Insert at index
    insertAtPosition(data, index) {
      //  If index is out of range
      if ((index < 1) || (index > (this.size + 1))) {
        console.log("\nPlz Enter Valid Index");
        return;
      }
  
      // If first index
      if (index === 1) {
        this.insertFirst(data);
        return;
      }
      // If last + 1 index
      else if(index === this.size + 1) {
        this.insertLast(data)
        return;
      }
      else {
          const newNode = new Node(data);
          let temp = this.head;
          for(let i=1; i <= (index-2); i++) {
                  temp = temp.next;
              }
          newNode.next =temp.next;
          temp.next = newNode;
          this.size++;
        }
    }
  
    deleteFirst() {
      if(this.isEmpty()){
        return null
      }else{
        this.head = this.head.next
        this.size--;
      }
    }

    deleteLast() {
      if(this.isEmpty()) {
          return null
      } else if (this.head.next == null) {
          this.head = null
      } else {
        let temp = this.head
          while(temp.next.next != null){
            temp = temp.next
          }
        temp.next = null
      }
      this.size--;
    }
  
    // Delete at index
    deleteAtPosition(index) {
      //  If index is out of range
      if ((index < 1) || (index > (this.size))) {
        console.log(`\nYou entered ${index} as delete position which is not in list, Plz Enter between 1 & ${this.size}`);
        return;
      }

      // If first index
      if (index === 1) {
        this.deleteFirst();
        return;
      }
      // If last index
      else if(index === this.size) {
        this.deleteLast()
        return;
      }
      else {
          let temp1 = this.head;
          let temp2 = null
          for(let i=1; i <= (index-2); i++) {
                  temp1 = temp1.next;
              }
          temp2= temp1.next
          temp1.next = temp2.next
          this.size--;
        }
    }

  // Get at index
  getAt(index) {
    let temp = this.head;
    let count = 1;

    while (temp) {
      if (count == index) {
        console.log(temp.data);
      }
      count++;
      temp = temp.next;
    }
    return null;
  }
  // reverse linked list
  reverse() {
    let prev = null
    let curr = this.head
    while(curr.next != null){
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }
    // Print list data
    printListData() {
      if(this.isEmpty()){
        console.log("List is empty ")
      }else{
        let temp = this.head;
        let listValues =''
  
        while (temp) {
          listValues += `${temp.data}->`
          temp = temp.next;
        }
        console.log(listValues);
      }
    }
  }

  
  const ll = new LinkedList();
  // console.log(`List is empty? `, ll.isEmpty())
  // console.log(`List size `, ll.getSize())

  ll.insertFirst(10);
  ll.insertFirst(20);
  ll.insertFirst(30);
  ll.insertFirst(40);

  // ll.printListData();
  // ll.deleteLast()
  // ll.printListData();
  // ll.deleteFirst()
  // ll.printListData();
  // ll.deleteAtPosition(2)
  ll.printListData();
  ll.insertAtPosition(50, 3);
  // ll.reverse();
  ll.printListData();
  



  // ll.getAt(2)
  // console.log(`Size of List is = `, ll.getSize())
  
  // ll.clearList();