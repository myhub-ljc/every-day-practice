/**
 * 解题思路：
 * （1）转化为：左右子树是否镜像
 * （2）分解为：树1的左子树和树2的右子树是否镜像，树1的右子树和树2的左子树是否镜像
 * （2）符合“分、解、合的特性”，考虑使用分而治之
 * 解题步骤：
 * （1）分：获取树的左右子树
 * （2）解：递归的判断树1的左子树和树2的右子树是否镜像，树1的右子树和树2的左子树是否镜像
 * （3）合：如果上述都成立并且根节点的值也相同，两个树就镜像
 */

 var isSymmetric = function(root) {
    //如果根节点为空，直接返回true
    if(!root) {
        return true;
    }

    //将对称问题转为镜像问题
    const isMirror = (l, r) => {
        //递归的终点
        if(!l && !r) {
            return true;
        }

        if(l && r && l.val === r.val &&
        isMirror(l.left, r.right) && 
        isMirror(l.right, r.left)) {
            return true;
        }

        //否则返回false
        return false;
    }

    //调用一下
    return isMirror(root.left, root.right);

    /*
        时间复杂度：O(n)
        空间复杂度：O(n)
     */
};