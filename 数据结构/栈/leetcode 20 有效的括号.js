/**
 * 解题步骤：
 *  新建一个栈，扫描字符串，遇到左括号便入栈，遇到和栈顶括号类型匹配的右括号就出栈，类型不匹配直接判定为不合法。 
 */
if (s.length % 2 === 1) {
    return false;
}

const stack = [];

for (let i = 0; i < s.length; i++) {
    const a = s[i];
    if (a === '(' || a === '[' || a === '{') {
        stack.push(a);
    } else {
        const b = stack[stack.length - 1];
        if (
            (b === '(' && a === ')') ||
            (b === '[' && a === ']') ||
            (b === '{' && a === '}')
        ) {
            stack.pop();
        } else {
            return false;
        }
    }
}
return stack.length === 0 ? true : false;