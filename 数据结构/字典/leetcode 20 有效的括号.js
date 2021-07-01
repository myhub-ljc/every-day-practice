/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    //新建一个字典map用来存放三种类型的括号
    const map = new Map();
    map.set("(", ")");
    map.set("{", "}");
    map.set("[", "]");

    //新建一个空栈
    const stack = [];
    //循环遍历拿到s中的每一个元素
    for(let i = 0; i < s.length; i++) {
        const a = s[i];
        //判断字典中是否有该值，有则push进入stack中
        if(map.get(a)) {
            stack.push(a);
        } else {
            //拿到栈顶元素
            const b = stack[stack.length - 1];
            //如果栈顶元素与s中的某个元素相同，则pop出去
            if(map.get(b) === a) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};