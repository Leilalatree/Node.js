//Object 静态方法
const obj = {
    a: 1,
    b: 2,
    c: 3,
}
const obj1 = Object.assign(obj, { c: 4, d: 5} )
console.log(obj1);