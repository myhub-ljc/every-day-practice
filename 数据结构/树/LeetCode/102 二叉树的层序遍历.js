/**
 * 解题思路：层序遍历顺序就是广度优先遍历，有一点不同的是需要记录当前节点所处的层级，方便将其添加到不同的数组中
 * 解题步骤：
 * （1）广度优先遍历二叉树
 * （2）遍历过程中，记录每个节点所在的层级，并将其添加到不同的数组中
 */


var levelOrder = function (root) {
    //在完成广度优先遍历的同时记录每个节点所在的层级
    if (!root) {
        return [];
    }
    //新建一个空的队列并将根节点入队
    const queue = [[root, 0]];
    
    //新建一个空的数组用以将结果按照要求输出
    const res = [];

    while (queue.length) {
        //将根节点出队并访问
        const [head, level] = queue.shift();
        // console.log(head.val);
        if (!res[level]) {
            res.push([head.val]);
        } else {
            res[level].push([head.val]);
        }

        //最后再将root的左右子节点入队
        if (head.left) {
            queue.push([head.left, level + 1]);
        }
        if (head.right) {
            queue.push([head.right, level + 1]);
        }
    }
    return res;
};