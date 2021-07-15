var inorderTraversal = function (root) {
    // //先使用递归版本实现一下吧
    // const result = [];

    // const inorder = root => {
    //     if(!root) {
    //         return;
    //     }

    //     //先递归遍历左子树
    //     inorder(root.left);

    //     //再遍历根节点root
    //     result.push(root.val);

    //     //最后再递归遍历右子树
    //     inorder(root.right);
    // }
    // inorder(root);

    // return result;

    //我们再使用非递归实现一下吧
    const stack = [];
    const result = [];

    const inorder = (root) => {
      if (!root) {
        return;
      }

      let p = root;
      while (stack.length || p) {
        while (p) {
          //这里分别先将根节点和其左子节点入栈
          stack.push(p);
          p = p.left;
        }

        //依次访问左子树、根节点、右子树
        const head = stack.pop();
        result.push(head.val);

        //最后再将右子树入栈
        p = head.right;
      }
    };
    inorder(root);

    return result;
};