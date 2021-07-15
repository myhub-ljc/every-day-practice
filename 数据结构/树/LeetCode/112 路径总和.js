/**
 * 解题思路：
 * 实现深度优先遍历的过程中，记录当前路径节点值的和，在叶子节点处判断当前路径节点值的和是否等于目标值
 * 
 * 解题步骤：
 * （1）深度优先遍历二叉树，在叶子节点处，判断当前路径节点值的和是否等于目标值，是就返回true
 * （2）遍历结束，如果没有匹配就返回false
 */

 var hasPathSum = function(root, targetSum) {
    //先实现树的深度优先遍历
     if (!root) {
         return false;
     }

     let res = false;
     const dfs = (n, sum) => {
         //先访问根节点
        //  console.log(n.val, sum);
         //最后便是比较每个叶子节点处的路径节点值的和是否相等于目标值
         if (!n.left && !n.right && sum === targetSum) {
             res = true;
         }

         //再访问左子树
         if (n.left) {
             dfs(n.left, sum + n.left.val);
         }

         //最后再访问右子树
         if (n.right) {
             dfs(n.right, sum + n.right.val);
         }
     }

     //深度优先遍历完成后，接下俩便是需要记录每个路径节点值的和
     dfs(root, root.val);

     return res;
};