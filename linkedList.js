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
  insert(index, value) {}
}

const myLinkedList = new LinkedList(3);

myLinkedList.append(44);
myLinkedList.append(325);
// myLinkedList.prepend(1);
console.log(myLinkedList);

let node = myLinkedList.head.next;
for (let i = 0; i < myLinkedList.length; i++) {
  node.add('.next');
  console.log(node);
}
