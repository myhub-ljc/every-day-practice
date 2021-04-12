const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
};

const visited = new Set();
const dfs = n => {
    //先访问根节点
    console.log(n);

    //然后访问相邻的未访问过的节点
    visited.add(n);
    graph[n].forEach(item => {
        if (!visited.has(item)) {
            dfs(item);
        }
    });
}

dfs(2);
