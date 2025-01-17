class DinamicArray {
  constructor(length = 0, data = {}) {
    this.length = length;
    this.data = data;

    for (let i = 0; i < length; i++) {
      this.data[i] = null;
    }
  }

  //O(1)
  get(index) {
    return this.data[index];
  }

  //O(n)
  insert(index, item) {
    if (index === this.length) {
      this.push(item);
      return this.data;
    }

    for (let i = this.length - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = item;

    this.length++;
    return this.data;
  }

  //O(n)
  unshift(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = item;

    return this.data;
  }

  //O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.data;
  }

  //O(n)
  delete(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length];

    this.length--;
    return this.data;
  }

  //O(n)
  shift() {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length];

    this.length--;
    return this.data;
  }

  //O(1)
  pop() {
    delete this.data[this.length - 1];

    this.length--;
    return this.data;
  }

  //O(n)
  reverse() {
    let start = 0;
    let end = this.length - 1;
    while (start < end) {
      const temp = this.data[start];
      this.data[start] = this.data[end];
      this.data[end] = temp;
      start++;
      end--;
    }
    return this.data;
  }

  search(value) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === value) {
        return i;
      }
    }
    return -1;
  }
}

module.exports = DinamicArray;
