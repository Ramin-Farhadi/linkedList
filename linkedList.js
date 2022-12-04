// creating a linked list

// 5 --> 16 --> 3

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    const newNode = {
      value,
      next: null,
    };
    if (index < 1) {
      return this.prepend(value);
    }
    let lead = this.head;
    let holdpointer = lead.next;
    for (let i = 0; i < index - 1; i++) {
      lead = lead.next;
      holdpointer = holdpointer.next;
    }
    lead.next = newNode;
    newNode.next = holdpointer;
    this.length++;
  }

  reverse() {
    let prevNode = null;
    let currNode = this.head;
    let nextNode = currNode.next;

    this.tail = currNode;
    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.head = prevNode;
  }
  printOut() {
    let next = this.head;
    const printArray = [];
    while (next) {
      printArray.push(next.value);
      next = next.next;
    }
    return printArray;
  }
}

const myLinkedList = new LinkedList(3);

myLinkedList.append(44);
myLinkedList.append(325);
myLinkedList.append(25);
// myLinkedList.prepend(1);

myLinkedList.reverse();
console.log(myLinkedList.printOut());
