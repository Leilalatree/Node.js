//Set
const s = new Set();
[1,2,3,4,5,2,2].forEach(x => s.add(x));
for (let i of s){
    // console.log(i);
}
//去除数组重复对象
const arr = [1,1,2,3,3,5];
// console.log([...new Set(arr)]);
function dedupe(array){
    return Array.from(new Set(array));
}

//对于set而言两个对象总是不相等的

s.add(6).add(7).add(7);
// console.log(s.has(2));

//对比：1_对象
const properties = {
    'width':1,
    'height':1
};
if (properties['width']){
    //dosomething
}

//2_set
const properties1 = new Set();
properties1.add('width');
properties1.add('height');
if (properties1.has('width')){
    //dosomething
}
//Array.from方法可以将 Set 结构转为数组
const items = new Set([1,2,3,4,5]);
const array = Array.from(items);
//set的遍历操作
/*1、keys(),values(),entries() 返回：遍历器对象
* notes:由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。*/
let set = new Set(['red','green','blue']);
for (let item of set.keys()){
    // console.log(item);
}
for (let item of set.values()){
    // console.log(item);
}
for (let item of set.entries()){
    // console.log(item);
}/*[ 'red', 'red' ][ 'green', 'green' ][ 'blue', 'blue' ]*/

/*Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。*/
for (let item of set){
    // console.log(item);
}
/*forEach*/
set.forEach((value,key)=>console.log(key+' : '+value));

//遍历的应用
//扩展运算符（...）内部使用for...of循环，所以可以用于Set结构
let arr1 = [...set];//返回一个数组

let set1 = new Set([1,2,3]);
set1 = new Set([...set1].map(x=>x*2));
set1 = new Set([...set1].filter(x => (x%2) == 0));

let a = new Set([1,2,3]);
let b = new Set([2,4,5]);
let union = new Set([...a,...b]);//并集
let intersect = new Set([...a].filter(x => b.has(x)));//交集
let difference = new Set([...a].filter(x => !b.has(x)));//差级

//改变set结构映射出一个新的结构，赋值给原来的set结构
/*方法1*/a = new Set([...a].map(val => val*2));
/*方法2*/a = new Set(Array.from(a,val => val*2));

//Map:本质上是键值对的集合;(对象只接受字符串作为键名)
const m = new Map();
const o = {p:'Hello World'};
m.set(o,'content');
m.get(o);

const map = new Map([
    ['name','Bob'],
    ['title','Author']
]);
console.log(map);


