/**
 * 解题步骤：
 *      新建一个字典
 *      遍历nums中的值
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //新建一个字典
    const map = new Map();

    //一次循环遍历
    for(let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const n2 = target - n;
        if(map.has(n2)) {
            return [map.get(n2), i];
        } else {
            map.set(n, i);
        }
    }
};