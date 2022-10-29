//
// 
//

function preorder(n){
  if (n){//exists
    console.log(n.d)

    preorder(n.l)
    preorder(n.r)
  }
}
