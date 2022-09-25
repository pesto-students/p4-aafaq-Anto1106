class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const isBinarySearchTree = (root) => {
  if (root === null) {
    return true;
  }
  if (root.left !== null && root.left.data > root.data) {
    return false;
  }
  if (root.right !== null && root.right.data < root.data) {
    return false;
  }
  if (!isBinarySearchTree(root.left) || !isBinarySearchTree(root.right)) {
    return false;
  }

  return true;
};

const addTree = (arr) => {
  return addToTree(arr, 0);
};

const addToTree = (arr, i) => {
  let curr = null;
  if (i < arr.length) {
    curr = new Node(arr[i]);
    curr.left = addToTree(arr, 2 * i + 1);
    curr.right = addToTree(arr, 2 * i + 2);
  }
  return curr;
};

let root1 = addTree([2, 1, 3]);
let root2 = addTree([5, 1, 4, null, null, 3, 6]);

console.log(isBinarySearchTree(root1));
console.log(isBinarySearchTree(root2));

/**
 * Time Complexity - O(logn ^ 2) (As we are traversing through all nodes)
 * Space Complexity - O(n) (As n function calls get's created in worst case)
 */
