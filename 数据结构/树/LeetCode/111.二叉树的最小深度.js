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
 var minDepth = function(root) {
/**
 * 解题思路：
 *      （1）求最小深度，考虑使用广度优先遍历
 *      （2）在广度优先遍历过程中，遇到叶子节点，停止遍历并返回该节点所在的层级
 * 解题步骤：
 *      （1）广度优先遍历整棵二叉树，并记录每个节点所在的层级
 *      （2）遇到叶子节点，停止遍历并返回该节点所在的层级
 */
     if (!root) { return 0; }
     
     //新建一个队列并将根节点以及它所在的层级入队
     const queue = [[root, 1]];
     while (queue.length > 0) {
         //将队头出队并访问
         const [head, level] = queue.shift();
         //如果左右子节点都为空,则直接返回当前所在的层级就可以了
         if (!head.right && !head.left) {
             return level;
         }

         //再将子节点分别入队
         if (head.right) {
             queue.push([head.right, level + 1]);
         }
         if (head.left) {
             queue.push([head.left, level + 1]);
         }
     }
};