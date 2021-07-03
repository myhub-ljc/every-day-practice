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
    if (!root) { return;}
    //先访问根节点的左子树(递归实现)
    postorder(root.left);

    //再访问根节点的右子树(递归实现)
    postorder(root.right);

    //最后访问根节点
    console.log(root.val);
}

postorder(bt);
