/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    //定义一个左指针
    let left = 0;
    //定义初始无重复字符的子串长度为0
    let length = 0;

    //创建一个字典, 用于判断是否是无重复字符的子串
    const map = new Map();
    //定义一个右指针, 遍历s长度, 使得右指针滑动起来
    for(let right = 0; right < s.length; right++) {
        //判断字典中是否含有该字符
        if(map.has(s[right]) && map.get(s[right]) >= left) {
            //如果有的话, 左指针移动到重复字符的下一位
            left = map.get(s[right]) + 1;
        }  
        //记录每一次滑动时无重复字符的子串的长度
        length = Math.max(length, right - left + 1);
        //字典中如果没有该字符, 则存储起来
        map.set(s[right], right);
    }
    return length;
};