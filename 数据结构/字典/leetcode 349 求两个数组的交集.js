/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    //新建一个字典
    const map = new Map();
    //遍历nums1数组
    nums1.forEach(n => {
        //填充字典
        map.set(n, true);
    });

    //新建一个数组用于存放交集
    var arr = [];
    //对nums2数组进行循环遍历
    nums2.forEach(n => {
        //如果字典中已经存在该元素则push进数组并且从字典中删除
        if(map.get(n)) {
            arr.push(n);
            map.delete(n);
        }
    })

    return arr;
};