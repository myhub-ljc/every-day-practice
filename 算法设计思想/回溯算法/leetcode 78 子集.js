/**
 * 解题思路：
 * （1）要求：所有没有重复的子集
 * （2）有出路，有死路
 * （3）考虑使用回溯算法
 * 
 * 解题步骤：
 * （1）使用递归模拟出所有的情况
 * （2）保证接的数字都是后面的数字
 * （3）收集所有到达递归终点的情况并返回
 */

 var subsets = function(nums) {
    const res = [];
    const backTrack = (path, l, start) => {
        if(path.length === l) {
            res.push(path);
            return;
        }

        for(let i = start; i < nums.length; i++) {
            backTrack(path.concat(nums[i]), l, i + 1);
        }
    }

    for(let i = 0; i <= nums.length; i++) {
        backTrack([], i, 0)
    }
    return res;

    /*
        时间复杂度：O(2^n) 因为每个元素存在两种情况：存在或不存在
        空间复杂度：O(n)
     */
};