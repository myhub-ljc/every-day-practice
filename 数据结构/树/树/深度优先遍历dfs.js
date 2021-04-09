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

const dfs = (root) => {
    //先访问根节点
    console.log(root.val);

    //然后再对children进行深度优先遍历
    root.children.forEach((child) => {
        dfs(child);
    })
};

dfs(tree);
