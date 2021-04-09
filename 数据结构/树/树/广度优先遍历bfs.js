/**
 * 广度优先遍历的算法口诀：
 *      新建一个队列，将根节点入队
 *      把队头出队并访问
 *      把队头的children挨个入队
 *      重复二三步骤，直到队列为空
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

const bfs = root => {
    //新建一个队列,并将根节点入队
    const queue = [root];

    while (queue.length > 0) {
        
        //将队头出队并访问
        const n = queue.shift();
        console.log(n.val);

        //然后对children挨个进行遍历
        n.children.forEach((child) => {
            //重复二三步骤
            queue.push(child);
        })
    }
}

bfs(tree);
