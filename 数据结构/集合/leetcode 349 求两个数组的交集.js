/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const arr = [...new Set(nums1)]; //先利用集合去重再转回数组
    const arr2 = new Set(nums2); //利用集合进行去重 

    //判断arr2中是否含有arr1中的元素即二者的交集
    const arr3 = arr.filter(item => arr2.has(item)) 
    return arr3;
};