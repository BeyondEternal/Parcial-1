//
// imports ES5
// Node (Node4stu5es.js)
//
import Node from '../../../masc/linked/node.js'

function Linked(n) {//node
  //this.node = new Node(n)
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.insertAfter = insertAfter
  this.contains = contains
}

function getHead() { return this.head }

function prepend(n) {//new node
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {//new node
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {//exists
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}

//
// exercises
//
function contains(v) {
  let currNode = this.head
  while (currNode != item) {
    currNode = currNode.next
  }
  return currNode
}

function insertAfter(newNode, element) {
  let currNode = contains(element)
  if(contains(element)===element){
    currNode.next = newNode
  }
}


let n = new Linked('b')
n.insertAfter('a', 'b')

console.log(n)