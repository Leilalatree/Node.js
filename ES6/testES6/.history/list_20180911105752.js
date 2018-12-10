//Object 静态方法
// 静态方法：
Object.assign()
Object.create()// 使用现有的对象来提供新创建的对象的_proto_。返回值：一个带着指定原型对象的和属性的新对象
Object.defineProperties(obj,props)
    // e.g
    let obj = {};
    Object.defineProperties(obj,{
        'property1': {
            value: true,
            writable: true
        },
        'property2': {
            value: 'hello',
            writable: false
        }
    })

Object.defineProperty(obj, prop, descriptor);
    // 使用_proto_
    let obj2 = {};
    let descriptor = Object.create(null);// 没有继承属性
    // 默认没有enumerable、configurable、writable
    descriptor.value = 'static';
    descriptor.defineProperty(obj2, 'key', descriptor);

    // 显式
    object.defineProperty(obj, "key", {
        enmurable: false,
        configurable: false,
        writable: false,
        value: "static"
    }),

    // 循环使用同一对象
    function withValue(value){
        let d = withValue.d || (
            withValue.d = {
                enmurable: false,
                configurable: false,
                writable: false,
                value: null 
            }
        );
        d.value = value;
        return d;
    }
    Object.defineProperty(obj2, "key", withValue("static"));// {key: "static"}key: "static"__proto__: Object


Object.entries(obj)// 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用for...in 遍历该对象时返回的顺序一直(区别:for-in循环也枚举原型链中的属性) 
    //e.g
    const objEntries = { foo: 'bar', baz: 42};
    console.log(Object.entries(objEntries));// ["foo", "bar"]、["baz", 42]

Object.freeze(obj)// 冻结一个对象(不能向这个对象添加新的属性，不能修改已有属性的值，不能修改该对象已有属性的可枚举性、可配置性、可写性)返回被冻结对象

Object.isFrozen(obj);// determines if an object is frozen
    // e.g
    const obj = {
        property1: 42
    };
    Object.isFrozen(obj)// false


Object.getOwnPropertyDescriptor()// 返回指定对象上一个自由属性对应的属性描述符。(自有属性:不需要从原型链上查找直接赋予该对象的属性)
Object.getOwnPropertyDescriptors()
Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Object.getPrototypeOf()
Object.is(value1,value2)// 返回值：表示两个参数是否相同的Boolean。
/*
 两个值相同的情况：
    *两个值都是undefined；
    *都是null；
    *都是true或者false
    *都是由相同个数的字符按照相同的顺序组成的字符串
    *都指向同一个对象
    *都是数字并且(都是+0||都是-0||都是NaN||都是除0和NaN外的其他同一个数字)
*/
// 特例
    Object.is(0, -0);// false
    Object.is(-0, -0);// true
    Object.is(NaN, 0/0);// true
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
Object.create(proto/*新创建对象的原型对象*/,[PropertiesObject/*null or 一个对象*/])

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
}// "q"

