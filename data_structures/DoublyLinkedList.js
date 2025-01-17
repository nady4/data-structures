class Node {
  constructor(value) {
    this.prev = this.next = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //O(n/2)
  traverseTo(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    //choosing the nearest end-node (head or tail)
    const headToTail = index < this.length / 2;
    let node = headToTail ? this.head : this.tail;

    //using index as the number of steps to traverse
    index = headToTail ? index : this.length - index;
    while (index) {
      node = headToTail ? node.next : node.prev;
      index--;
    }

    return node;
  }

  //O(n)
  set(value, index) {
    let node = this.traverseTo(index);

    if (!node) {
      throw new Error("index out of bounds");
    }

    node.value = value;
    return this;
  }

  //O(1)
  append(value) {
    let oldTail = this.tail;
    let newTail = new Node(value);

    newTail.prev = oldTail;
    oldTail.next = newTail;
    this.tail = newTail;

    this.length++;
    return this;
  }

  //O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  //O(n/2)
  insert(value, index = this.length) {
    if (index < 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }

    let leftNode = this.traverseTo(index - 1);
    let rightNode = leftNode.next;
    let newNode = new Node(value);

    newNode.next = rightNode;
    leftNode.next = newNode;

    this.length++;
    return this;
  }

  //O(1)
  pop() {
    if (this.length === 1) {
      throw new Error("list can't be empty");
    }

    this.tail = this.tail.prev;
    this.tail.next = null;

    this.length--;
    return this;
  }

  //O(1)
  shift() {
    if (this.length === 1) {
      throw new Error("list can't be empty");
    }

    this.head = this.head.next;
    this.head.prev = null;

    this.length--;
    return this;
  }

  //O(n/2)
  delete(index) {
    if (index <= 0) {
      return this.shift();
    }
    if (index >= this.length - 1) {
      return this.pop();
    }

    let leftNode = this.traverseTo(index - 1);
    let rightNode = index < this.length ? leftNode.next.next : null;

    leftNode.next = rightNode;
    rightNode.prev = leftNode;

    this.length--;
    return this;
  }

  //O(n)
  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let leftNode = this.head;
    let rightNode = leftNode.next;

    while (rightNode) {
      const third = rightNode.next;
      rightNode.next = leftNode;
      leftNode = rightNode;
      rightNode = third;
    }

    this.tail = this.head;
    this.head.next = null;
    this.head = leftNode;

    return this;
  }

  getList() {
    let list = [];
    let node = this.head;

    for (let i = 0; i < this.length; i++) {
      list.push(node.value);
      node = node.next;
    }

    return list;
  }

  print() {
    console.log(`\nhead:   ${this.head.value}`);
    console.log(`tail:   ${this.tail.value}`);
    console.log(`length: ${this.length}\n`);
    console.log(this.getList());
    console.log("\n");
  }

  printNodes() {
    let node = this.head;

    for (let i = 0; i < this.length; i++) {
      console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬");
      console.log(`  prev:  ${node.prev ? node.prev.value : "null"}`);
      console.log(`  value: ${node.value}`);
      console.log(`  next:  ${node.next ? node.next.value : "null"}`);
      console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n    ▲    ▮\n    ▮    ▮\n    ▮    ▼");

      node = node.next;
    }
  }
}

module.exports = DoublyLinkedList;
