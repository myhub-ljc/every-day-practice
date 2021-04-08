//上次使用的是栈，下面使用字典实现
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    //方法一：使用栈实现
// if (s.length % 2 === 1) {
//     return false;
// }

// const stack = [];

// for (let i = 0; i < s.length; i++) {
//     const a = s[i];
//     if (a === '(' || a === '[' || a === '{') {
//         stack.push(a);
//     } else {
//         const b = stack[stack.length - 1];
//         if (
//             (b === '(' && a === ')') ||
//             (b === '[' && a === ']') ||
//             (b === '{' && a === '}')
//         ) {
//             stack.pop();
//         } else {
//             return false;
//         }
//     }
// }
// return stack.length === 0 ? true : false;

    //方法二：使用字典实现
    //创建一个字典
    const map = new Map();
    //将所有括号存放进字典中
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');

    const stack = [];
    for(let i = 0; i < s.length; i++) {
        const a = s[i];
        if(map.get(a)) {
            stack.push(a);
        } else {
            const b = stack[stack.length - 1];
            if(map.get(b) === a) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
};