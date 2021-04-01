//leetcode 20
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