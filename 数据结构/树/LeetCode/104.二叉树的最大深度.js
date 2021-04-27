/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
/**
 * 解题思路：
 *      （1）求最大深度，考虑使用深度优先遍历
 *      （2）在深度优先遍历过程中，记录每个节点所在的层级，然后找出最大的层级即可
 * 
 * 解题步骤：
 *      （1）新建一个变量，记录最大深度
 *      （2）深度优先遍历正棵二叉树，并记录所访问节点所在的层级，同时不断刷新最大深度这个变量
 *      （3）遍历结束返回这个最大深度即可
 */
    let res = 0;
    const dfs = (n, level) => {
        if(!n){return;}
        // console.log(n.val);
        //求出最大层级
        // res = Math.max(res, level);
        //优化一下：只比较叶子结点就行了
        if(!n.left && !n.right) {
            res = Math.max(res, level);
        }
        //遍历根节点的所有子节点并记录所访问节点所在的层级
        dfs(n.left, level+1);
        dfs(n.right, level+1);
    }
    dfs(root, 1);
    return res;
};