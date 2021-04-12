Array.prototype.mySearch = function (a) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === a) {
            return i;
        }
    }
    return -1;
};

const arr = [1, 2, 3];
console.log(arr.mySearch(2));
