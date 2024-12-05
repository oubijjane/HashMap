import { LinkedList } from "./linked-list.js";
class hashMap {
  constructor(capacity = 5) {
    this.loadFactor = 0.75;
    this.capacity = capacity;
    this.buckets = Array(this.capacity).fill(null);
    this.arrayCount = 0;
    this.keyCount = 0;
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
    if (this.arrayCount >= this.capacity * this.loadFactor) {
      this.resize();
    }

    let list = new LinkedList();
    let index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    if (!this.buckets[index]) {
      list.append([key, value]);
      this.buckets[index] = list;
      this.arrayCount++;
      this.keyCount++;
    } else {
      let head = this.buckets[index].getHead();
      while (head) {
        if (head.getValue()[0] === key) {
          head.setValue([key, value]);
          return;
        }
        head = head.getNextNode();
      }
      this.buckets[index].append([key, value]);
      this.keyCount++;
    }
  }

  length() {
    return this.keyCount;
  }

  get(key) {
    let index = this.hash(key);
    let head = this.buckets[index].getHead();
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    //search for the value using the key which is located at index 0
    while (head) {
      if (head.getValue()[0] === key) {
        return head.getValue()[1];
      }
      head = head.getNextNode();
    }

    return "not found";
  }
  has(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    //search for the value using the key which is located at index 0
    if (!this.buckets[index]) {
      return false;
    } else {
      let toBeChecked = this.buckets[index].getHead();
      while (toBeChecked) {
        if (toBeChecked.getValue()[0] === key) {
          return true;
        }
        toBeChecked = toBeChecked.getNextNode();
      }
    }

    return false;
  }
  remove(key) {
    let exist = this.has(key);
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (!exist) {
      return exist;
    } else {
      if (this.buckets[index].size() === 1) {
        this.buckets[index] = null;
        this.arrayCount--;
      } else {
        let toBeRemoved = this.buckets[index].getHead();
        for (let i = 0; i < this.buckets[index].size(); i++) {
          if (toBeRemoved.getValue()[0] === key) {
            this.buckets[index].removeAt(i);
            this.keyCount -= 1;
            break;
          }
          toBeRemoved = toBeRemoved.getNextNode();
        }
      }
    }
    return true;
  }

  clear() {
    this.buckets = Array(this.capacity).fill(null);
  }

  keys() {
    let keys = [];
    this.buckets.forEach((key) => {
      if (key) {
        let head = key.getHead();
        while (head) {
          let obtainedKey = head.getValue()[0];
          keys.push(obtainedKey);
          head = head.getNextNode();
        }
      }
    });
    return keys;
  }
  values() {
    let values = [];
    this.buckets.forEach((value) => {
      if (value) {
        let head = value.getHead();
        while (head) {
          let obtainedvalue = head.getValue()[1];
          values.push(obtainedvalue);
          head = head.getNextNode();
        }
      }
    });
    return values;
  }
  entries() {
    let entries = [];
    this.buckets.forEach((value) => {
      if (value) {
        let head = value.getHead();
        while (head) {
          let obtainedvalue = [head.getValue()[0], head.getValue()[1]];
          entries.push(obtainedvalue);
          head = head.getNextNode();
        }
      }
    });
    return entries;
  }
  resize() {
    this.capacity = this.capacity * 2;
    let oldbuket = this.buckets;

    this.buckets = Array(this.capacity).fill(null);
    this.keyCount = 0;
    this.arrayCount = 0;
    for (let bucket of oldbuket) {
      if (bucket != null) {
        let node = bucket.getHead();
        while (node) {
          // Re-insert each key-value pair since we are repopulating the list
          this.set(node.getValue()[0], node.getValue()[1]); 
          node = node.getNextNode();
        }
      }
    }
  }
}

export { hashMap };
