const bt = {
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

//非递归实现中序遍历
const inorder = root => {
    //避免root为空
    if (!root) { return; }
    
    //新建一个栈
    const stack = [];
    let p = root;
    while (stack.length || p) {
        //直到访问完所有的左子树
        while (p) {
            stack.push(p);
            p = p.left;
        }

        //这里会依次打印左子树、根节点、右子树
        const head = stack.pop();
        console.log(head.val);

        //最后访问右子树
        p = head.right;
    }
}

inorder(bt);