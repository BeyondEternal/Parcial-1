import AVLTree from './AVL.js'


let tree = new AVLTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(25);

tree.preOrder(tree.root);