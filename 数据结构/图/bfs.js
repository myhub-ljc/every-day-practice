const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
};

const visited = new Set();
//新建一个队列
const stack = [2];

const bfs = () => {
    while (stack.length) {
        //将队头出队并访问
        const n = stack.shift();
        console.log(n);
        //将访问过的加入
        visited.add(n);
        graph[n].forEach((item) => {
            if (!visited.has(item)) {
                stack.push(item);
            }
        });
    }
}

bfs();