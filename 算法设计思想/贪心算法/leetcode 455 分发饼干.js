/**
 * 解题思路：
 *  （1）局部最优：既能满足孩子，还消耗最少
 *  （2）因此先将‘较小的饼干’分给‘胃口最小的孩子’
 * 
 * 解题步骤：
 *  （1）对饼干数组和胃口数组进行升序排序
 *  （2）遍历饼干数组，找到能满足第一个孩子的饼干
 *  （3）然后继续遍历饼干数组，找到满足第二、三、····、n个孩子的饼干
 */

 var findContentChildren = function(g, s) {
    //先对饼干数组和孩子胃口数组进行升序排序
    g.sort(function sortFn(a, b) {
        return a - b;
    });
    s.sort(function sortFn(a, b) {
        return a - b;
    });

    //依次循环遍历饼干数组,挑选出满足孩子胃口的值
    //这里我们用i来记录最优解
    let i = 0;
    s.forEach(n => {
        if(n >= g[i]) {
            i++;
        }
    })
    return i;
};