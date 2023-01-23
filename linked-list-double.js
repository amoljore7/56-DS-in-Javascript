class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    insertFirst(data) {
      const newNode = new Node(data);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.size++;
    }
  
    insertLast(data) {
      const newNode = new Node(data);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.size++;
    }
  
    deleteFirst() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.head.data;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  
    deleteLast() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.tail.data;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
      return value;
    }
  
    printListData() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let temp = this.head;
        let list = "";
        while (temp) {
          list += `${temp.data}<->`;
          temp = temp.next;
        }
        console.log(list);
      }
    }
  
    printListDataReverse() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let temp = this.tail;
        let list = "";
        while (temp) {
          list += `${temp.data}<->`;
          temp = temp.prev;
        }
        console.log(list);
      }
    }
  }
  
  const list = new DoublyLinkedList();
  list.insertLast(1);
  list.insertLast(2);
  list.insertLast(3);
  list.printListData();
  list.insertFirst(0);
  list.printListData();
  list.printListDataReverse();
  list.deleteLast();
  list.printListData();
  list.deleteFirst();
  list.printListData();