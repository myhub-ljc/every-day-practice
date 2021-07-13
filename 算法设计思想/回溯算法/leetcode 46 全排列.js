/**
 * 解题思路：
 *  （1）所有排列；没有重复元素。
 *  （2）有出路，有死路。
 * 
 * 解题步骤：
 * （1）使用递归模拟出所有的情况
 * （2）遇到包含重复元素的情况，就回溯
 * （3）收集所有到达递归终点的情况并返回
 */

var permute = function (nums) {
    //新建一个空的数组用于存放所有的排列结果
    const res = [];

    //递归模拟出所有的可能情况
    const backtrack = path => {
        //递归的终点并将满足的情况返回
        if (path.length === nums.length) {
            return res.push(path);
        }
        //遍历数组中的每一个元素得到所有可能的结果
        nums.forEach(n => {
            if (path.includes(n)) {
                return;
            }
            backtrack(path.concat(n));
        })
    }
    backtrack([]);
    return res;
};