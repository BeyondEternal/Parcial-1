import binaryTree from "./binaryTree.js";

let p = new binaryTree('+')
let o1 = new binaryTree(3)
let o2 = new binaryTree(-1)

p.left = o1
p.right = o2

console.log(p);