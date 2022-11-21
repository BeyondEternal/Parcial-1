export default class Node
{
    constructor(data)
    {
        this.root = data
        this.left = null
        this.right = null
    }

    insert(data) {
        let node = new this.Node(data)
        if (this.root === null) {
           this.root = node
           return
        }
     
        let currNode = this.root
        while (true) {
           if (data < currNode.data) {
              if (currNode.left === null) {
                 currNode.left = node
                 break
              } else {
                 currNode = currNode.left
              }
           } else {
              if (currNode.right === null) {
                 currNode.right = node
                 break
              } else {
                 currNode = currNode.right
              }
           }
        }
     }
}