import trinaryTree from "./trinaryTree.js";



let p = new trinaryTree('root')
let o1 = new trinaryTree(3)
let o2 = new trinaryTree(-1)
let o3 = new trinaryTree(4)

p.left = o1
p.right = o2
p.center = o3

console.log(p)

