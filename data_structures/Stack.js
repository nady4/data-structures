class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = this.bottom = null;
    this.length = 0;
  }

  //O(1)
  isEmpty() {
    return this.length === 0;
  }

  //O(1)
  peek() {
    return this.top;
  }

  //O(1)
  push(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.bottom = this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length++;
    return this;
  }

  //O(1)
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    this.top = this.top.next;

    if (this.length === 1) {
      this.bottom = this.top;
    }

    this.length--;
    return this;
  }

  //O(n)
  search(value) {
    let currentNode = this.top;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

module.exports = Stack;
