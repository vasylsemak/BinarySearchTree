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

  contains(val) {
    let curNode = this.root;

    while (curNode) {
      if (val === curNode.value) return true;
      if (val < curNode.value) curNode = curNode.left;
      else curNode = curNode.right;
    }
    return 'No value!';
  }

  // Depth First Search
  dfsPreOrder() {
    const treeArr = [];
    const traverse = node => {
      treeArr.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return treeArr;
  }

  dfsInOrder() {
    const treeArr = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      treeArr.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return treeArr;
  }

  dfsPostOrder() {
    const treeArr = [];
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      treeArr.push(node.value);
    };
    traverse(this.root);
    return treeArr;
  }

  // Breath First Search
  bfs() {
    const treeArr = [];
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const curNode = queue.shift();
      treeArr.push(curNode.value);

      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }
    return treeArr;
  }
}

let x = new BST(15);
x.insert(3);
x.insert(36);
x.insert(2);
x.insert(12);
x.insert(28);
x.insert(39);

console.log(x.dfsPreOrder());
