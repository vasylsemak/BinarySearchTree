class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(val) {
    this.root = new Node(val);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;
    let newNode = new Node(value);

    const search = node => {
      if (value < node.value) {
        if (!node.left) node.left = newNode;
        search(node.left);
      }
      if (value > node.value) {
        if (!node.right) node.right = newNode;
        search(node.right);
      }
    };

    search(this.root);
  }

  min() {
    let curNode = this.root;
    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode.value;
  }

  max() {
    let curNode = this.root;
    while (curNode.right) {
      curNode = curNode.right;
    }
    return curNode.value;
  }

  contains(val) {}

  // dfs
  // bfs
}

let x = new BST(5);
x.insert(3);
x.insert(8);
x.insert(4);
x.insert(1);

console.log(x.min());
