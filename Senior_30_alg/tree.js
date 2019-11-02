function TreeNode(val) {
    this.val = val;
    this.leftChild = null;
    this.rightChild = null;
}
TreeNode.prototype.left = function (val) {
    if (val) {
        this.leftChild = new TreeNode(val)
    }
    return this.leftChild;
}
TreeNode.prototype.right = function (val) {
    if (val) {
        this.rightChild = new TreeNode(val)
    }
    return this.rightChild;
}
var root = new TreeNode("A");
root.left("B").left("D");
root.left().right("E");
root.right("C").left("F").right("I");
root.right().right("G").right("h");
root.right().right().left("J");
// root.left("B").right('D');
// root.right("C").left("E").left("G").right("l");
// root.right().right("F").left("H");
// root.right().right().right("I").right("J").left("k");

//前序遍历
function preTrav(root) {
    if (!root) {
        return
    }
    console.log(root.val);
    if (root.leftChild) {
        preTrav(root.leftChild)
    }
    if (root.rightChild) {
        preTrav(root.rightChild)
    }
}
//中序遍历
function InorderTrav(root) {
    if (!root) {
        return
    }
    if (root.leftChild) {
        InorderTrav(root.leftChild)
    }
    console.log(root.val)
    if (root.rightChild) {
        InorderTrav(root.rightChild)
    }
}
//后序遍历
function postTrav(root) {
    if (!root) {
        return
    }
    if (root.leftChild) {
        postTrav(root.leftChild)
    }
    if (root.rightChild) {
        postTrav(root.rightChild)
    }
    console.log(root.val)

}

//层序遍历
function printFromTopToBottom(root) {
    if (!root) {
        return
    }
    var res=[];
    var tree=[];
    //res.push(root.val);
    tree.push(root);
    while(tree.length!=0){
        var node=tree.shift();
        if(node.leftChild){
            tree.push(node.leftChild)
        }
        if(node.rightChild){
            tree.push(node.rightChild)
        }
        res.push(node.val)
    }
    while(res.length!=0){
        console.log(res.shift());
    }
}
function getHeight(root){
    if(!root){
        return;
    }
    if(!root.leftChild&&!root.rightChild){
        return 0;
    }
    var lHeight;
    var rHeight;
    if(root.leftChild){
        lHeight= getHeight(root.leftChild)+1
    }
    if(root.rightChild){
        rHeight=getHeight(root.rightChild)+1
    }
    if(!lHeight){
        return rHeight;
    }
    if(!rHeight){
        return lHeight;
    }
    return Math.max(lHeight,rHeight);
}
//preTrav(root);
//InorderTrav(root);
//postTrav(root);
//printFromTopToBottom(root);

function isBalanceTree(root){
    if(!root){//如果该节点是空的，则是平衡树
        return true;
    }
    if(!root.leftChild&&!root.rightChild){
        //叶子结点是平衡树
        return true;
    }
    //如果该节点左右子树高度差大于1，则不是平衡树
    if(Math.abs(getHeight(root.leftChild) - getHeight(root.rightChild))>1){
        return false;
    }
    //如果左右子树都是平衡树，那么该树是平衡树。
    return isBalanceTree(root.leftChild)&&isBalanceTree(root.rightChild);
}

console.log(isBalanceTree(root));