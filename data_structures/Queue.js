class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = this.last = null;
    this.length = 0;
  }

  //O(1)
  isEmpty() {
    return this.length === 0;
  }

  //O(1)
  peek() {
    return this.first;
  }

  //O(1)
  enqueue(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
    return this;
  }

  //O(1)
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.length === 1) {
      this.last = null;
    }

    this.first = this.first.next;

    this.length--;
    return this;
  }

  //O(n)
  search(value) {
    let node = this.first;

    for (let i = 0; i < this.length; i++) {
      if (node.value === value) {
        return node;
      }
      node = node.next;
    }

    return null;
  }
}

module.exports = Queue;
