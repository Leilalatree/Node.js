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


Object.getOwnPropertyDescriptor(obj, prop)// 返回指定对象上一个自由属性对应的属性描述符。(自有属性:不需要从原型链上查找直接赋予该对象的属性)
Object.getOwnPropertyDescriptors(obj)

Object.getOwnPropertyNames(obj)// 返回一个由指定对象的所有自身属性的属性名(包括不可枚举属性但不包括Symbol值作为名称的属性)组成的数组。
Object.getOwnPropertySymbols(obj)// 返回一个给定对象自身的所有Symbol属性的数组。

Object.getPrototypeOf(obj)// 返回指定对象的原型(内部[[Prototype]]属性的值);返回值:给定对象的原型.如果没有继承属性，则返回null；
Object.setPrototypeOf(obj,prototype)// 

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

Object.isExtensible(obj)// 判断一个对象是否是可扩展的(是否可以在它上面添加新的属性)。返回值：Boolean；
Object.preventExtensions(obj)// 让一份对象变的不可扩展，也就是永远不能再添加新的属性。

Object.isSealed(obj)// 判断一个对象是否被密封。返回值：Boolean；(密封对象是指那些不可扩展的，并且自身属性都不可配置且因此不可删除(但不一定是不可写)的对象)
Object.seal(obj)

Object.keys(obj)// 返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性的排列属性和使用for...in循环遍历该对象时返回的顺序抑制
Object.values(obj)// 属性值





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

// 实例化方法
Object.prototype.hasOwnProperty(prop)// 返回布尔值，指示对象自身属性是否具有指定的属性； 
Object.prototype.isPrototypeOf(obj)// 测试一个对象是否存在于另一个对象的原型链上；
Object.prototype.propertyIsEnumerable(prop)// 返回布尔值表示指定的属性是否可枚举；
Object.prototype.toLocaleString();
Object.prototype.toString();
Object.prototype.valueOf()// 返回指定对象的原始值