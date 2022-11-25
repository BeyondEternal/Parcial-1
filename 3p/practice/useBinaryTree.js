import BinaryTree from "./binaryTree.js";

const tree = new BinaryTree(1, 'AB');

tree.insert(1, 11, 'AC');
tree.insert(1, 12, 'BC');
tree.insert(12, 121, 'BG', { right: true });

console.log([...tree.preOrderTraversal()].map(x => x.value))


console.log([...tree.inOrderTraversal()].map(x => x.value))


tree.root.value;                
tree.root.hasChildren;          

tree.find(12).isLeaf;           
tree.find(121).isLeaf;          
tree.find(121).parent.value;    
tree.find(12).left;             
tree.find(12).right.value;      

tree.remove(12);

[...tree.postOrderTraversal()].map(x => x.value);

