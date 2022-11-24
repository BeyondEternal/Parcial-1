class Node{
   constructor(data)
   {
       this.data = data;
       this.left = null;
       this.right = null;
   }
}

export default class BinaryTree{
   constructor(){
       this.root=null
   }
   

   insertNode(node,newNode){
            if(this.root==null){
               return this.root=newNode
            }
           if(node.left==null){
               return node.left=newNode
           }
           else if(node.right==null){
               return node.right=newNode
           }
           else{
               return false
           }
       }

       deleteDeepest(root, delNode)
    {
        let q = [];
        q.push(root);
 
        let temp = null;
 
        // Do level order traversal until last node
        while (q.length > 0)
        {
            temp = q[0];
            q.shift();
 
            if (temp == delNode)
            {
                temp = null;
                return;
 
            }
            if (temp.right!=null)
            {
                if (temp.right == delNode)
                {
                    temp.right = null;
                    return;
            }
            else
                q.push(temp.right);
        }
 
        if (temp.left != null)
        {
            if (temp.left == delNode)
            {
                temp.left = null;
                return;
            }
            else
                q.push(temp.left);
        }
    }
    }

       delete(root, key)
       {
           if (root == null)
               return;
    
           if (root.left == null &&
              root.right == null)
           {
               if (root.key == key)
               {
                     root=null;
                     return;
               }
               else
                   return;
           }
    
           let q = [];
           q.push(root);
           let temp = null, keyNode = null;
    
           // Do level order traversal until
           // we find key and last node.
           while (q.length > 0)
           {
               temp = q[0];
               q.shift();
    
               if (temp.key == key)
                   keyNode = temp;
    
               if (temp.left != null)
                   q.push(temp.left);
    
               if (temp.right != null)
                   q.push(temp.right);
           }
    
           if (keyNode != null)
           {
               let x = temp.key;
               deleteDeepest(root, temp);
               keyNode.key = x;
           }
       }

   search(data){
       this.searchNode(this.root,data)
   }

   searchNode(node,data){
       if(node==null){
           return null
       }
       else if(data<node.data){
           return this.searchNode(node.left,data)
       }
       else if(data>node.data){
           return this.searchNode(node.right,data)
       }
       else{
           return node
       }
   }
}


