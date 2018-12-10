//Object 静态方法
// 静态方法：
Object.assign()
Object.create()// 使用现有的对象来提供新创建的对象的_proto_。返回值：一个带着指定原型对象的和属性的新对象
Object.defineProperties()
Object.defineProperty()
Object.entries()
Object.freeze()
Object.getNotifier()
Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()
Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Object.getPrototypeOf()
Object.is()
Object.isExtensible()
Object.isFrozen()
Object.isSealed()
Object.keys()






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
let target = clone(obj);//false
target = clonePrototype(obj)//
console.log(Object.getPrototypeOf("key") );



// 使用Object.create 实现类式继承

// Shape - 父类(superclass)
function Shape(){
    this.x = 0;
    this.y = 0;
}

// 父类的方法
Shape.prototype.move = (x, y) => {
    this.x += x;
    this.y += y;
    console.info(' Shape moved.')
}

// Rectangle - 子类
function Rectangle(){
    Shape.call(this);// call super constructor; (call详解留后)
}

// 子类继承父类
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle();

console.log('Is rect an instance of Rectangle? ', rect instanceof Rectangle); // Is rect an instance of Rectangle?  true
console.log('Is rect an instance of Shape?', rect instanceof Shape);// Is rect an instance of Shape? true
rect.move(1,1); // Shape moved.
