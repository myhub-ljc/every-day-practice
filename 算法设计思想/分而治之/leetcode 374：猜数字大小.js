/**
 * 解题思路：二分搜索同样具备“分、解、合”的特性。这里我们考虑使用分而治之的思想。
 * 解题步骤：
 *  分：计算中间元素，分割数组。
 *  解：递归的在较大或者较小子数组进行二分搜索。
 */

var guessNumber = function(n) {
    const mainCode = (low, high) => {
        //递归的结束点
        if (low > high) {
            return;
        };

        //获取到中间元素的下标
        const mid = Math.floor((low + high) / 2);
        const res = guess(mid);

        //依次作出判断
        if (res === 0) {
            return mid;
        } else if (res === -1) {
            return mainCode(low, mid - 1);
        } else {
            return mainCode(mid + 1, high);
        }
    }
    return mainCode(1, n);
};