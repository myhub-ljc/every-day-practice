const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
};

//用来记录该节点是否被访问过 
const visited = new Set();
const dfs = n => {
    //先访问你所指定的根节点
    console.log(n);

    //将已经访问过的节点记录下来
    visited.add(n);
    //下面便是循环遍历了
    graph[n].forEach(item => {
        //判断该节点是否已经被访问过
        if (!visited.has(item)) {
            dfs(item);
        }
    })
}

//测试一下
dfs(2);