class BinarySearchTree {
  // your code here

  constructor(key=null, value=null, parent=null, left=null, right=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }


  insert(key, value) {
    if(this.key == null) {
      this.key = key,
      this.value = value;
    } else {
      // if key is left than existing key, place them to the left
      if(key < this.key) {
          if(this.left == null) {
            // Create a new Left Node
            this.left = new BinarySearchTree(key, value);
          } else {
            this.left.insert(key, value);
          }
      } else if (key > this.key) {
        // Create a right BST or Node
        if(this.right == null) {
          this.right = new BinarySearchTree(key, value);
        } else {
          this.right.insert(key, value);
        }

      }
    }
  }


  find(key) {
    if(this.key === key) {
      return this.value;
    } else if(key < this.key && this.key.left) {
      return this.left.find(key);
    } else if(key > this.key && this.key.right) {
      return this.right.find(key);
    }
  }

  _replaceWith(node) {
    if (this.parent) {
        if (this == this.parent.left) {
            this.parent.left = node;
        }
        else if (this == this.parent.right) {
            this.parent.right = node;
        }

        if (node) {
            node.parent = this.parent;
        }
    }
    else {
        if (node) {
            this.key = node.key;
            this.value = node.value;
            this.left = node.left;
            this.right = node.right;
        }
        else {
            this.key = null;
            this.value = null;
            this.left = null;
            this.right = null;
        }
    }

   
}

_findMin() {
    if (!this.left) {
        return this;
    }
    return this.left._findMin();
} 


dfsSearchInOrder(values = []) {

  // Go to left node
  if(this.left) {
    values = this.left.dfsSearchInOrder(values);
  }

  // Come to current Node
  values.push(this.value);

  // Go to right node
  if(this.right) {
    values = this.right.dfsSearchInOrder(values);
  }

  return values;

}

dfsSearchPreOrder(values = []) {

  if(this) {
    values.push(this.value);
  }

  if(this.left) {
    values = this.left.dfsSearchPreOrder(values);
  }

  if(this.right) {
    values = this.right.dfsSearchPreOrder(values);
  }

  return values;
}

dfsSearchPostOrder(values = []) {

  // Process Left Child
  if(this.left) {
    values = this.left.dfsSearchPostOrder(values);
  }
  // Process Right Child
  if(this.right) {
    values = this.right.dfsSearchPostOrder(values);
  }

  if(this) {
    values.push(this.value);
  }
  //Process current order
  return values;
}

}
let binarySearchTree = new BinarySearchTree(1, 1);
console.log(binarySearchTree);
binarySearchTree.insert(10, 10);
binarySearchTree.insert(20, 20);
binarySearchTree.insert(5, 5);
binarySearchTree.insert(40, 40);
binarySearchTree.insert(99, 99);
binarySearchTree.insert(35, 35);

binarySearchTree.find(5);

console.log(binarySearchTree.find(5));
console.log(binarySearchTree.dfsSearchInOrder());
console.log(binarySearchTree.dfsSearchPreOrder());
console.log(binarySearchTree.dfsSearchPostOrder());