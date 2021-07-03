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
    //避免root为空 
    if (!root) { return; }
    
    //新建一个栈并将根节点入栈
    const stack = [root];
    //新建一个栈用于倒序输出
    const outputStack = [];

    //只要栈不为空
    while (stack.length) {
        //将栈顶元素出栈
        const head = stack.pop();
        //再将它入另外一个栈
        outputStack.push(head)

        if (head.left) {
            stack.push(head.left);
        }
        if (head.right) {
            stack.push(head.right);
        }
    }
    //这时候所有元素已经进入outputStack这个栈中了, 那么接下来只要让他倒序输出就行了
    while (outputStack.length) {
        const n = outputStack.pop();
        console.log(n.val);
    }
}

postorder(bt);
