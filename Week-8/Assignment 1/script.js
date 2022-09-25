class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const maxDepth = (root) => {
  if (root === null) {
    return 0;
  } else {
    let leftTree = maxDepth(root.left);
    let rightTree = maxDepth(root.right);
    return 1 + Math.max(leftTree, rightTree);
  }
};

const createBinaryTree = (arr) => {
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

let root1 = createBinaryTree([1, null, 2]);
let root2 = createBinaryTree([3, 9, 20, null, null, 15, 7]);

console.log(maxDepth(root1));
console.log(maxDepth(root2));

/**
 * Space Compltexity - O(n) (As we are using recursive stack there may be 1 stack created with n function calls)
 * Time Complexity - O(logn*logn) (Recursively as we are checking all the nodes in worst case)
 */
