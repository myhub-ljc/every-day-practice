/**
 * 解题思路：两个相同的树：根节点的值相同、左子树相同、右子树相同
 * 解题步骤：
 * （1）分：获取两个树的左右子树 
 * （2）解：递归的判断两个树的左右子树是否相同
 * （3）合：将上述结果进行合并，如果根节点的值也相同，则两棵树相同
 */

 var isSameTree = function(p, q) {
    //左右子树如果为空，则两棵树相同，返回ture
    if(!p && !q) {
        return true;
    }

    //两棵树的根节点值、左右子树相同
    if(p && q && p.val === q.val && 
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
    ) {
        return true;
    }
    return false;

    /**
        时间复杂度：O(n)
        空间复杂度：O(n)
     */
};