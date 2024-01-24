class Node{
    constructor(value,left,right){
        this.value=value;
        this.left=left;
        this.right=right
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null // this root initialization indicates and empty tree.
    }

    insert(value){
        const newNode=new Node(value,null,null);
        if(!this.root){
            this.root=newNode;
        }else{
            this._insertNode(this.root,value)
        }
    }

  _insertNode(current,value){ //helper function
    if(!current) return;

    if(value <current.value){
      if(!current.left){
        current.left=new Node(value,null,null)
      }else{
        this._insertNode(current.left,value)
      }
    }else{
        if(!current.right){
            current.right=new Node(value,null,null)
        }else{
            this._insertNode(current.right,value)
        }
    }
  }
   search(value){
    const current=this.root;

    while(value ==current.value){
        return current;
    }
    if(value<current.left){
        value=current.left
    }else{
        value=current.right
    }

    return null
   }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);



let foundValue=bst.search(4);

if(foundValue){
    console.log("found the value", foundValue.value)
}else{
    console.log("isn't present")
}

console.log(`root value ${bst.root.value}`)
console.log("left value " ,bst.root.left.value)
console.log("right value:", bst.root.right.value);