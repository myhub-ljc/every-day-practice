/**
 * 解题步骤：
 *  新建一个栈，扫描字符串，遇到左括号便入栈，遇到和栈顶括号类型匹配的右括号就出栈，类型不匹配直接判定为不合法。 
 */

//可以首先判断一下s的长度如果除2的余数为1, 那么直接返回false, 也就不用再进行下面的一系列操作了
if (s.length % 2 === 1) {
    return false;
}

//先创建一个空栈
const stack = [];

for (let i = 0; i < s.length; i++) {
    //这里的a拿到的是s中的每一项
    const a = s[i];
    //遇到左括号便入栈
    if (a === '(' || a === '[' || a === '{') {
        //这里将遍历得到的所有左括号push进入栈中
        stack.push(a);
    } else {
        //这里拿到的是栈顶的元素
        const b = stack[stack.length - 1];
        //如果有遇到与栈顶元素相匹配的右括号a, 便将该栈顶元素pop出去
        if (
            (b === '(' && a === ')') ||
            (b === '[' && a === ']') ||
            (b === '{' && a === '}')
        ) {
            stack.pop();
        } else {
            //如果该没有与之匹配的右括号, 则直接返回false
            return false;
        }
    }
}
//最后再次根据剩余栈中元素的长度判断
return stack.length === 0 ? true : false;