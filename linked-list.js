const listSize = function () {
  let i = 0;
  const getSize = () => i;
  const increaseSize = () => i++;
  const decreaseSize = () => i--;
  return { getSize, increaseSize, decreaseSize };
};

class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.mySize = listSize();
  }
  append(value) {
    if (!this.head.getValue()) {
      this.head.setValue(value);
      this.tail = this.head;
    } else {
      let newNode = new Node();
      newNode.setValue(value);
      this.tail.setNextNode(newNode);
      this.tail = newNode;
    }
    this.mySize.increaseSize();
  }
  prepend(value) {
    if (!this.head.getValue()) {
      this.head.setValue(value);
      this.tail.setValue(value);
    } else {
      let newNode = new Node();
      newNode.setValue(value);
      newNode.setNextNode(this.head);
      this.head = newNode;
    }
    this.mySize.increaseSize();
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  size() {
    return this.mySize.getSize();
  }

  at(index) {
    let temp = this.head;
    let i = 0;
    while ((i) => index) {
      if (index >= this.mySize.getSize() || index < 0) {
        return "not found";
      }
      if (i === index) {
        return temp.getValue();
      }
      i++;
      temp = temp.getNextNode();
    }

    return "not found";
  }
  pop() {
    let temp = this.head;
    while (temp.getNextNode() !== null) {
      if (
        temp.getNextNode().getValue() === this.tail.getValue() &&
        !this.tail.getNextNode()
      ) {
        temp.setNextNode(null);
        this.tail = temp;
        this.mySize.decreaseSize();
        break;
      }
      temp = temp.getNextNode();
    }
  }

  contains(value) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.getValue() === value) {
        return true;
      }
      temp = temp.getNextNode();
    }
    return false;
  }

  find(value) {
    let temp = this.head;
    let i = 0;
    while (temp !== null) {
      if (temp.getValue() === value) {
        return i;
      }
      i++;
      temp = temp.getNextNode();
    }
    return "not found";
  }

  insertAt(value, index) {
    let temp = this.head;
    let prev = null;
    let i = 0;
    if(index === this.mySize.getSize() - 1) {
      this.append(value);
      return this.mySize.increaseSize();;
    } else if(index === 0) {
      this.prepend(value);
      return this.mySize.increaseSize();;
    }
    while (i <= index) {
      if (index >= this.mySize.getSize() || index < 0) {
        return "not found";
      }
      if (i === index) {
        let newNode = new Node();
        newNode.setValue(value);
        newNode.setNextNode(prev.getNextNode());
        prev.setNextNode(newNode); 
        return this.mySize.increaseSize();
      }

      i++;
      prev = temp;
      temp = temp.getNextNode();
    } 


    return "not found";
  }

  removeAt(index) {
    let temp = this.head;
    let prev = null;
    let i = 0;
    if(index === this.mySize.getSize() - 1) {
      this.pop();
      return;
    } else if(index === 0) {
      this.head = temp.getNextNode();
      
      return this.mySize.decreaseSize();;
    }
    while (i <= index) {
      if (index >= this.mySize.getSize() || index < 0) {
        return "not found";
      }
      if (i === index) {
        prev.setNextNode(temp.getNextNode());
      }

      i++;
      prev = temp;
      temp = temp.getNextNode();
    } 


    return "not found";
  }

  toString() {
    let temp = this.head.getNextNode();
    let toPrint = "node: " + this.head.getValue();
    while (temp !== null) {
      toPrint += " => " + temp.getValue();
      temp = temp.getNextNode();
    }
    toPrint += " => " + temp;
    return toPrint;
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }

  getNextNode() {
    return this.nextNode;
  }
  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }
}

export { LinkedList };
