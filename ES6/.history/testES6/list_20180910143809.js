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

// 使用Object.create的propertyObject参数
let o;
// 创建原型为null的空对象；
o = Object.create(null);

o = {}
// 以字面量方式创建的空对象相当于
o = Object.create(Object.prototype);

o = Object.create(Object.prototype,{
    // foo会成为所创建对象的数据属性
    foo: {
        writable: true,
        configurable: true,
        value: 'hello'
    },
    bar: {
        configurable: false,
        get: () => { return 10; },
        set: (value) => {console.log("Setting`o.bar`to", value);}
    }
});
function Constructor(){};
o = new Constructor();
// 上面这一句相当于
o = Object.create(constructor.prototype);
// 如果在constructor函数中有一些初始化代码，Object.create不能执行那些代码

// 创建一个以另一个空对象为原型，且拥有一个属性p的对象
o = Object.create({}, { p: {value: 42}});

// 省略了的属性特性默认为false，所以属性p是不可写的，不可枚举，不可配置
o.p = 24;
console.log(o.p)// 42
o.q = 12;
for(let prop in o){
    console.log(prop);
}