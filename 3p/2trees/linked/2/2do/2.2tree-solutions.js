function Node(o) {
    this.d = o//bject<->data
    this.l = null//eft
    this.r = null//ight
  }
  
  function preorder(n) {
    if (n) {
      console.log(n.d)
      preorder(n.l)
      preorder(n.r)
    }
  }

  function inorder(n) {
    if (n) {
        preorder(n.l)
        console.log(n.d)
        preorder(n.r)
      }
  }
  function posorder(n) {
    if (n) {
        preorder(n.l)
        preorder(n.r)
        console.log(n.d)
      }
  }

  let p = new Node('+')
  let o1 = new Node(3)
  let o2 = new Node('/')
  let q1 = new Node(2)
  let q2 = new Node(7)
  
  p.l = o1
  p.r = o2
  o2.l = q1
  o2.r = q2

  console.log('preorder');
  preorder(p)
  console.log('inorder');
  inorder(p)
  console.log('posorder');
  posorder(p)