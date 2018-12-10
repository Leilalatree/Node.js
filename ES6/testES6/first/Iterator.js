function makeIterator(array) {
    var nextIndex = 0;
    return{
        next:function () {
            return nextIndex < array.length ?
                {value:array[nextIndex++]}:
                {done:true};
        }
    }
}
/*
* 原生具备 Iterator 接口的数据结构如下:
Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象*/
let arr = ['a','b','c'];
let iter = arr[Symbol.iterator]();
iter.next();

//通过遍历器实现指针结构的例子
function Obj(value) {
    this.value = value;
    this.next = null;
}
Obj.prototype[Symbol.iterator] = function () {
    var iterator = {next:next};
    var current = this;
    function next() {
        if (current) {
            var value = current.value;
            current = current.next;
            return {done:false,value:value};
        }else {
            return{done:true};
        }
    }
    return iterator;
}
var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for (var i of one){
    console.log(i);
}
//在构造函数的原型链上部署了Symbol.irterator方法，调用该方法返回遍历器iterator

//为一个对象添加iterator
let obj = {
    data:['hello','world'],
    [Symbol.iterator](){
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data.[index++],
                        done: false
                    };
                } else {
                    return {value: undefined, done: ture};
                }
            }
        };

    }
}

