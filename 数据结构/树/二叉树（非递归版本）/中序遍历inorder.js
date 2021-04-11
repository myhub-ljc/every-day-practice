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

const inorder = (root) => {
    if (!root) { return; }
    
    //首先将左子树入栈
    const stack = [];
    let p = root;
    
    while (stack.length || p) {
        //然后访问左子树
        while (p) {
            stack.push(p);
            p = p.left;
        }

        //紧接着访问根节点
        const n = stack.pop();
        console.log(n.val);

        //最后访问右节点
        p = n.right;
    }
};

inorder(bt);

