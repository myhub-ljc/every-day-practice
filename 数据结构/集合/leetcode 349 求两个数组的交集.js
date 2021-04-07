/**
 * 解题步骤：
 *      使用集合对nums1去重
 *      遍历nums1，筛选出nums2也包含的值
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    //先利用集合对两个数组进行去重
    const set1 = [...new Set(nums1)];
    const set2 = new Set(nums2);
 
    //遍历求交集
 //    return set1.filter(item => set2.has(item));
     return set1.filter(item => set2.has(item));
 };