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
};

const postorder = (root) => {
    if (!root) { return; }
    const stack = [root];
    //用于逆序输出
    const outputStack = [];

    while (stack.length) {
        const n = stack.pop();
        outputStack.push(n);
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }

    while (outputStack.length) {
        const n = outputStack.pop();
        console.log(n.val);
    }
}

postorder(bt);
