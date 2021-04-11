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

const preorder = (root) => {
    if (!root) { return; }
    
    //创建一个栈，并将根节点入栈
    const stack = [root];

    while (stack.length) {
        //因为首先要访问根节点，所以应该先将栈顶元素弹出并访问
        const n = stack.pop();
        console.log(n.val);

        //最后需要访问右子树
        if (n.right) stack.push(n.right);

        //接下来需要访问左子树(因此需要先将右子树入栈)
        if (n.left) stack.push(n.left);
    }
}

preorder(tree);
