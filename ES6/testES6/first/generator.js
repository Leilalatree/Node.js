/*Generator调用的方法与普通函数一样，但是：调用Generator以后函数并不执行，
返回的也不是函数运行的结果而是一个指向内部状态的指针对象
*   Generator函数是分段执行的，yield表达式是暂停执行的标记，next（）方法可以恢复执行；
*    调用Generator函数返回一个遍历对象，代表Generator函数内部的指针
* */
function* helloWorldGenerator() {
    yield'hello';
    yield'world';
    return 'ending';
}
var hw = helloWorldGenerator();

/*函数f是一个Generator函数，只有调用next方法时，函数f才会执行*/
function* f(){
    console.log('执行了！');
}
var generator = f();

setTimeout(function () {
    generator.next()
},2000);

//yield 只能用在Generator函数中
 var arr = [1,[[2,3],4],[5,6]];
var flat = function *(a) {
    var  length = a.length;
    for (var i = 0;i<length;i++) {
        var item = a[i];
        if (typeof item !=='number'){
            yield* flat(item);
        } else {
            yield item;
        }
    }
};
for (var f of flat(arr)) {
    console.log(f);
}
//yield表达式如果用在另一个表达式之中，必须放在圆括号之中
function* demo() {
    console.log('Hello'+(yield));
    console.log('world'+(yield 123))
}

function foo(param, param2) {

}

//yield表达式用作函数参数或者放在赋值表达式右边，可以不加括号
function* demo1() {
    foo(yield 'a',yield 'b');
    let input = yield;
}

//for...of 循环可以自动遍历Generator函数时生成的Iterator对象，且此时不需要再调用next方法

//异步任务的封装
var fetch = require('node-fetch');
function* gen() {
    var url = 'https://api.github.con/users/github';
    var result = yield fetch(url);
    console.log(result.bio);
}
//执行方法
var g = gen();
var result = g.next();
result.value.then(function (data) {
    return data.json();
}).then(function (data) {
    g.next(data);
});

//基于Thunk函数的Generator执行器
function run(fn) {
    var gen = fn();
    function  next(err,data){
        var result = gen().next(data);
        if (result.done)return;
        result.value(next);
    }
    next();
}
function* g() {
    //
}
run(g);