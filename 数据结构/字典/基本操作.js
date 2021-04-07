//键值对的增删改查
const m = new Map();

//增加
m.set('a', 'aa');
m.set('b', 'bb')
console.log(m);

//查
m.get('a');

//删除
m.delete('a');

//改(再次覆盖就行)
m.set('b', 'ccc');
console.log(m)