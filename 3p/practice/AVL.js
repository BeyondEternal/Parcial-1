class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
        this.height=0
    }
    insert(data,node){
        if(node==null)
            return new Node(data)
        if(data<node.data)
            node.left = this.insert(data,node.left)
        else if(data>node.data)
            node.right = this.insert(data,node.right)
        node.height = Math.max(this.getHeight(node.left),this.getHeight(node.right))+1
        if(this.getBalanced(node)==2 && this.getBalanced(node.left)>=0)
        return this.rightRotation(node)
        else if(this.getBalanced(node)==2 && this.getBalanced(node.left)<0){
            node.left = this.leftRotation(node.left)
            return this.rightRotation(node)
        }
        else if(this.getBalanced(node)==-2 && this.getBalanced(node.right)<=0)
        return this.leftRotation(node)
        else if(this.getBalanced(node)==-2 && this.getBalanced(node.right)>0){
            node.right = this.rightRotation(node.right)
            return this.leftRotation(node)
        }
        return node
    }

    delete(data,node){
        if(data<node.data && node.left)
        node.left=this.delete(data,node.left)
        else if(data>node.data && node.right)
        node.right=this.delete(data,node.right)
        else{
            if(node.data==data){
                if(node.right && node.left){
                    let minVal = this.findMin(node.right)
                    node.data=minVal
                    node.right=this.delete(minVal,node.right)
                }
                else if(node.left)
                    return node.left                
                else if(node.right)
                    return node.right
                else
                    return null
            }
        }
        node.height=Math.max(this.getHeight(node.left),this.getHeight(node.right))+1
        if(this.getBalanced(node)==2 && this.getBalanced(node.left)>=0)
        return this.rightRotation(node)
        else if(this.getBalanced(node)==2 && this.getBalanced(node.left)<0){
            node.left = this.leftRotation(node.left)
            return this.rightRotation(node)
        }
        else if(this.getBalanced(node)==-2 && this.getBalanced(node.right)>=0)
        return this.rightRotation(node)
        else if(this.getBalanced(node)==2 && this.getBalanced(node.right)<0){
            node.right = this.leftRotation(node.right)
            return this.rightRotation(node)
        }
        return node
    }

    getHeight(node){
        return node==null ? -1 : node.height
    }

    getBalanced(node){
        return this.getHeight(node.left)-this.getHeight(node.right)
    }

    leftRotation(x){
        const y = x.right
        const yLeftChild = y.left
        y.left = x
        x.right = yLeftChild
        x.height = Math.max(height(x.left),height(x.right))+1
        y.height = Math.max(height(x.left),height(x.right))+1
        return y
    }
    
    rightRotation(x){
        const y = x.left
        const yRightChild = y.right
        y.right = x
        x.left = yRightChild
        x.height = Math.max(height(x.left),height(x.right))+1
        y.height = Math.max(height(x.left),height(x.right))+1
        return y
    }
}

export default class AVL{
    constructor(){
        this.root=null
    }

    insert(data){
        if(this.root){
            this.root=this.root.insert(data,this.root)
        }
        else{
            this.root = new Node(data)
        }
    }

    delete(data){
        if(this.root)
        this.root = this.root.delete(data,this.root)
    }

}

export function preOrder(node) {
    if (node != null) {
      console.log(node + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
}



