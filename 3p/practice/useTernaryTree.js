import TernaryTree from "./ternaryTree.js";



let ternary = new TernaryTree()

ternary.insert(5)
ternary.insert(4)
ternary.insert(6)
ternary.insert(5)
ternary.insert(5)
ternary.insert(5)
ternary.insert(7)

 console.log(ternary)

 ternary.remove(5)
 console.log(ternary)

console.log(ternary.search(5))

ternary.preorder(ternary.root)

