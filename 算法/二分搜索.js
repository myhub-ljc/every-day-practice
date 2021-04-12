/**
 * 二分搜索的思路：
 *      必须为有序数组，否则首先需要进行排序
 *      从数组中的中间元素开始，如果正好为目标值，则搜索结束
 *      如果目标值大于或者小于中间元素，则在大于或者小于的那一半数组元素中去进行搜索
 *      重复二三步骤
 */

Array.prototype.binarySearch = function (a) {
    let min = 0;
    let max = this.length - 1;
    while (min <= max) {
        //先拿到中间值的下标
        const mid = Math.floor((min + max) / 2);

        //如果该值小于目标值
        if (this[mid] < a) {
            min = mid + 1;

        //如果该值大于目标值
        } else if (this[mid] > a) {
            max = mid - 1;
        } else {
        //否则该值恰好为目标值
            return mid;
        }
    }
    //最终如果还是没有查找到的话，便返回-1
    return -1;
}

const arr = [1, 2, 3, 4];
//记得对数组进行排序
console.log(arr.binarySearch(2));
