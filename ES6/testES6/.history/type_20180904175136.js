//Object 静态方法
const obj = {
    a: 1,
    b: 2,
    c: 3,
}

const obj1 = Object.assign(obj, { c: 4, d: 5} )
console.log(obj1);//{ a: 1, b: 2, c: 4, d: 5 }
//克隆到一个空对象
function clone(orign){
    return Object.assign({},orign);
}
//克隆并保持继承链
function clonePrototype(orign){
    let originProto = Object.getPrototypeOf(orign);
    return Object.assign(Object.create(originProto),orign);
}
Object.defineProperty(obj,"key",{
    name: "Leila",
    age: 22
})
let target = clone(obj);
// target = clonePrototype(obj)
console.log(target.hasOwnProperty(key) );
