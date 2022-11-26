class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.middle=null
        this.right=null
    }
}

export default class TernaryTree{
    constructor(){
        this.root=null
    }
    
    insert(data){
        let newNode = new Node(data)
        if(this.root==null){
            this.root=newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(node,newNode){
        if(newNode.data==node.data){
            if(node.middle==null){
                node.middle=newNode
            }
            else{
                this.insertNode(node.middle,newNode)
            }
        }
        else if(newNode.data<node.data){
            if(node.left==null){
                node.left=newNode
            }
            else{
                this.insertNode(node.left, newNode);
            }
        }
        else{
            if(node.right==null){
                node.right=newNode
            }
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data){
        this.root= this.removeNode(this.root,data)
    }

    removeNode(node,key){
        if(node==null){
            return null
        }
        else if(key<node.data){
            node.left=this.removeNode(node.left,key)
            return node
        }
        else if(key>node.data){
            node.right=this.removeNode(node.right,key)
            return node
        }
        else{
            if(node.middle==null){
                node=node.middle
                return node
            }
            node.middle=this.removeNode(node.middle,key)
            return node
        }
    }

    inorder(node){
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.preorder(node.middle);
            this.inorder(node.right);
        }
    }

    preorder(node){
        if(node !== null)
        {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.middle);
            this.preorder(node.right);
        }
    }

    postorder(node){
        if(node !== null)
        {
            this.postorder(node.left);
            this.preorder(node.middle);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    findMinNode(node){
        if(node.left==null){
            return node
        }
        else{
            return this.findMinNode(node.left)
        }
    }

    getRootNode(){
        return this.root;
    }

    search(data){
        return this.searchNode(this.root,data)
    }

    searchNode(node,data){
        if(node==null){
            return false
        }
        else if(data<node.data){
            return this.searchNode(node.left,data)
        }
        else if(data>node.data){
            return this.searchNode(node.right,data)
        }
        else{
            return true
        }
    }
}


