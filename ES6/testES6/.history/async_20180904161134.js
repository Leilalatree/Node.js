//Generator 函数的语法糖——async

// async function foo() {};

// const foo = async function () {};

// let obj = {async foo(){}};
// obj.foo().then();

// async function main() {
//     try{
//         await new Promise(function (resolve,reject) {
//             throw new Error('出错了');
//         });
//     }catch (e) {
//         console.log(e);
//     }
// }

// throw {toString: () => { return "I'm an Object!"; } } 
//如果想要保持继承链，可以采用下面的代码。

function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}
class body{

}
clone(body);

const obj = {
    a:1,
    b:2,
    c:3,
}
 const obj1 = Object.assign(obj, { c: 4, d: 5} )
 console.log(obj1)