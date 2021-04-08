/**
 * 先序遍历的算法口诀：
 *      先访问根节点
 *      对根节点的左节点进行先序遍历
 *      对根节点的右节点进行先序遍历
 */
const tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

const preload = (root) => {
    if (root === null) return;
    //先访问根节点
    console.log(root.val);
    //对根节点的左子树进行先序遍历
    preload(root.left);
    //对根节点的右子树进行先序遍历
    preload(root.right);
}

preload(tree);
