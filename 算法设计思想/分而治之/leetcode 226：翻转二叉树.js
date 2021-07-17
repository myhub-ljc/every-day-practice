/**
 * 解题思路：
 * （1）先将左右子树互换位置，再将子树互换位置
 * （2）符合“分、解、合”特性
 * 
 * 解题步骤：
 * （1）分：获取左右子树
 * （2）解：递归的翻转左右子树
 * （3）合：将翻转后的左右子树换个位置放到根节点上
 */

 var invertTree = function(root) {
    //如果根节点为空, 直接返回null
    if(!root) {
        return null;
    }

    return {
        //每个根节点的值肯定是保持不变的
        val: root.val,
        //将递归好的右子树放在左边
        left: invertTree(root.right),
        //将递归好的左子树放在右边
        right: invertTree(root.left)
    }

    /**
        时间复杂度：O(n)
        空间复杂度：O(n) 相当于二叉树的深度
     */
};