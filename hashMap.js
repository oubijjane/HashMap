import { LinkedList } from "./linked-list.js";
class hashMap {
  constructor(capacity = 16) {
    this.loadFactor = 0.75;
    this.capacity = capacity;
    this.buckets = Array(this.capacity).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }
  set(key, value) {
    let list = new LinkedList();
    let index = this.hash(key);

    if (!this.buckets[index]) {
      list.append([key, value]);
      this.buckets[index] = list;
      this.count++;
    } else {
      let head = this.buckets[index].getHead();
      while (head) {
        if (head.getValue()[0] === key) {
          //console.log(head.getNextNode());
          head.setValue([key, value]);
          return;
        }
        head = head.getNextNode();
      }
      this.buckets[index].append([key, value]);
    }
  }

  get(key) {
    let index = this.hash(key);
    let head = this.buckets[index].getHead();
    //search for the value using the key which is located at index 0
    while (head) {
      if (head.getValue()[0] === key) {
        return head.getValue()[1];
      }
      head = head.getNextNode();
    }

    return "not found";
  }
}

export { hashMap };
