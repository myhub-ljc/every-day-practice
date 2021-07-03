/**
 *  深度优先遍历算法口诀：
 *      先访问根节点
 *      然后再对children节点进行深度优先遍历
 */

 let tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {  
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: []
                },
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
}

const dfs = root => {
    //先访问根节点
    console.log(root.val);

    //然后再依次循环遍历其子节点(这里默认遍历的就是元素节点)
    root.children.forEach(child => {
        //如果子节点也有自己的子节点, 再次调用循环遍历即可
        dfs(child);
    })
}

dfs(tree);
