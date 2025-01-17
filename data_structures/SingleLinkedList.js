class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SingleLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //O(n)
  traverseTo(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let node = this.head;
    while (index) {
      node = node.next;
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
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;

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

  //O(n)
  insert(value, index = this.length) {
    //implementing separate method that doesn't require traverse
    if (index < 0) {
      return this.prepend(value);
    }
    //implementing separate method that doesn't require traverse
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

  //O(n)
  pop() {
    //empty list error
    if (this.length === 1) {
      throw new Error("list can't be empty");
    }

    this.tail = this.traverseTo(this.length - 2);
    this.tail.next = null;

    this.length--;
    return this;
  }

  //O(1)
  shift() {
    if (this.length == 1) {
      throw new Error("list can't be empty");
    }

    this.head = this.head.next;

    this.length--;
    return this;
  }

  //O(n)
  delete(index) {
    if (index <= 0) {
      this.shift();
      return this;
    }
    if (index >= this.length - 1) {
      this.pop();
      return this;
    }

    let leftNode = this.traverseTo(index - 1);
    let rightNode = index < this.length ? leftNode.next.next : null;
    leftNode.next = rightNode;

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
      console.log(`  value: ${node.value}`);
      console.log(`  next:  ${node.next ? node.next.value : "null"}`);
      console.log("▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n       ▮\n       ▮\n       ▼");

      node = node.next;
    }
  }
}

module.exports = SingleLinkedList;
