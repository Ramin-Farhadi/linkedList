class Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class DoublyLinkedList {
  constructor(value) {
    (this.head = {
      value: value,
      next: null,
      prev: null,
    }),
      (this.tail = this.head),
      (this.length = 1);
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(value, index) {
    const newNode = new Node(value);

    if (index >= this.length) {
      this.append(value);
      return;
    }

    let leader = this.head;
    for (let i = 0; i < index - 1; i++) {
      leader = leader.next;
    }
    const holdpointer = leader.next;
    newNode.prev = leader;
    leader.next = newNode;
    newNode.next = holdpointer;
    holdpointer.prev = newNode;
    this.length++;
  }

  remove(index) {
    let leader = this.head;
    for (let i = 0; i < index - 1; i++) {
      leader = leader.next;
    }
    const deleteItem = leader.next;
    const afterDeleteItem = deleteItem.next;
    leader.next = afterDeleteItem;
    afterDeleteItem.prev = leader;
    this.length--;
  }
  print() {
    const newArr = [];
    let num = this.head;
    let i = 0;
    while (i < this.length) {
      newArr.push(num.value);
      num = num.next;
      i++;
    }
    return console.log(newArr);
  }
}

const myLinkedList = new DoublyLinkedList(99);
myLinkedList.append(66);
myLinkedList.append(44);
myLinkedList.prepend(1);
myLinkedList.prepend(2);
myLinkedList.insert(0, 3);
myLinkedList.remove(2);
myLinkedList.remove(2);
myLinkedList.append(33);
myLinkedList.print();

console.log(myLinkedList);
