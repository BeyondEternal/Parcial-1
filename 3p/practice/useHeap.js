import MaxH from "./maxheap.js"
import MinH from "./minheap.js"

console.log('Max Heap');


const maxTree = new MaxH();
maxTree.add(3);
maxTree.add(4);
maxTree.add(31);
maxTree.add(6);
  console.log(maxTree.values)
  console.log(maxTree.extractMin());
  console.log(maxTree.values)
  console.log(maxTree.extractMax());
  console.log(maxTree.values)

console.log('Min Heap');

  const minTree = new MinH();
  minTree.add(3);
  minTree.add(4);
  minTree.add(31);
  minTree.add(6);
  console.log(minTree.values)
  console.log(minTree.extractMin());
  console.log(minTree.values)
  console.log(minTree.extractMax());
  console.log(minTree.values)