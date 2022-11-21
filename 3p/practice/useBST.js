import BinarySearchTree from "./BST.js"

let BST = new BinarySearchTree()

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

let root = BST.getRootNode()

BST.inorder(root)

// BST.remove(5)

// BST.inorder(root)
// BST.preorder(root)
// BST.postorder(root)