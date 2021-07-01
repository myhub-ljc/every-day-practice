/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //新建一个字典
    const map = new Map();

    //循环遍历nums中的每一个元素
    for(let i = 0; i < nums.length; i++) {
        var n1 = nums[i];
        var n2 = target - n1;

        if(map.has(n2)) {
            return [map.get(n2), i];
        } else {
            map.set(n1, i);
        }
    }
};