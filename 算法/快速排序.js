/**
 * 快速排序的思路：
 *      首先分区并挑选一个元素作为基准，所有比基准小的元素放在基准的前面，否则相反
 *      最后使用递归再次分区
 */

Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length === 1) {
            return arr;
        }
        const left = [];
        const right = [];
        const ref = arr[0];
        //分区
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < ref) {
                left.push(arr[i]);
            } else if (arr[i] > ref) {
                right.push(arr[i]);
            } else {
                return ref;
            }
        };
        return [...rec(left), ref, ...rec(right)];
    }
    const res = rec(this);
    res.forEach((n, i) => {
        this[i] = n;
    })
};

const arr = [1, 2, 4, 5];
arr.quickSort();