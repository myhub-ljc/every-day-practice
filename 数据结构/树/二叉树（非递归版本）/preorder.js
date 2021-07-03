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

//非递归实现二叉树的先序遍历
const preorder = root => {
    //避免root为空 
    if (!root) { return; }
    
    //先创建一个栈并将根节点入栈
    const stack = [root];

    while (stack.length) {
        //访问根节点并将根节点出栈
        const head = stack.pop();
        console.log(head.val);

        //再将右子树入栈
        if (head.right) {
            stack.push(head.right)
        };

        //最后再将左子树入栈（根据栈的先进后出原则）
        if (head.left) {
            stack.push(head.left)
        };
    }
}

preorder(tree);