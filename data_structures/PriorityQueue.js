class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.first = null;
    this.length = 0;
  }

  // O(1)
  isEmpty() {
    return this.length === 0;
  }

  // O(1)
  peek() {
    return this.first;
  }

  // O(n)
  enqueue(value, priority) {
    const newNode = new Node(value, priority);

    if (this.isEmpty() || this.first.priority > priority) {
      // New node has the highest priority, insert at the beginning
      newNode.next = this.first;
      this.first = newNode;
    } else {
      // Traverse to find the correct position
      let current = this.first;
      while (current.next && current.next.priority <= priority) {
        current = current.next;
      }

      newNode.next = current.next;
      current.next = newNode;
    }

    this.length++;
    return this;
  }

  // O(1)
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const dequeuedNode = this.first;
    this.first = this.first.next;
    this.length--;
    return dequeuedNode;
  }

  // O(n)
  search(value) {
    let current = this.first;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }
}

module.exports = PriorityQueue;
