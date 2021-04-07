//模拟创建链表
const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

//遍历链表
let p = a;
while (true) {
    console.log(p.val);
    p = p.next;
}

//插入
const e = { val: 'e' };
c.next = e;
e.next = d;

//删除某个节点
c.next = d;
