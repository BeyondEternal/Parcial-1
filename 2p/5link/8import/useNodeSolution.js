//
// imports ES5
// Node (Node4stu5es.js)
//
import Node from '../../../masc/linked/node.js'

function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.insertAfter = insertAfter
  this.insertBefore = insertBefore
}

function getHead(){return this.head}

function prepend(n){//new node
  n.next = this.head
  this.head=n
  this.size++
}

function append(n){//new node
  n.next = null//
  this.tail.next=n
  this.tail=n
  this.size++
}

function traverse(){
  let c=this.head
  while(c){//exists
//console.log(c.key)
console.log(c.data)
c=c.next
  }
  console.log('\n')
}

//
// exercises
//
function contains(v){
  let c = this.head
  while(c){
      if(v==c.data){
          return true
      }        
      c=c.next
  }
  return false
}
function getTail(){
  return this.tail.data    
}
function insertAfter(position,newNode){
  let c=this.head
  let currNode
  while(c){
    if(position===c){
      currNode = c.next
      c.next = newNode
      newNode.next = currNode

    }
    c = c.next
  }
}
function insertBefore(position,newNode){
  let c=this.head
  let prevNode,currNode
  while(c){
    if(position === this.head){
      this.prepend(newNode)
    }
    else if(position===c){
      currNode = prevNode.next
      prevNode.next = newNode
      newNode.next = currNode
    }
    else{
      prevNode = c
    }
    c = c.next
  }
}




let n = new Node('a')
let n1 = new Node('b')
let n2 = new Node('d')
let n3 = new Node('c')
let  l = new Linked(n)
l.append(n1)
l.append(n2)
l.insertAfter(n2,n3)
l.traverse()