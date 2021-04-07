//上次使用的是集合，下面我们使用字典
/**
 * 解题步骤：
 *      新建一个字典，遍历nums1，填充字典
 *      遍历nums2，遇到字典里的值就选出来，并从字典中删除
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    // //方法一：使用集合
    //    //先利用集合对两个数组进行去重
    //    const set1 = [...new Set(nums1)];
    //    const set2 = new Set(nums2);
    
    //    //遍历求交集
    // //    return set1.filter(item => set2.has(item));
    //     return set1.filter(item => set2.has(item));
    
    //方法二：使用字典
     //创建一个字典
    const map = new Map();
    //遍历并填充
    nums1.forEach(n => {
        map.set(n, true);
    });

    const arr = [];
    //遍历判断nums2中和nums1中相同的值
    nums2.forEach(n => {
        if(map.get(n)) {
            arr.push(n);
            map.delete(n);
        };
    })
    return arr;

};