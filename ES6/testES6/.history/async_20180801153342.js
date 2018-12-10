//Generator 函数的语法糖——async

async function foo() {};

const foo = async function () {};

let obj = {async foo(){}};
obj.foo().then();

async function main() {
    try{
        await new Promise(function (resolve,reject) {
            throw new Error('出错了');
        });
    }catch (e) {
        console.log(e);
    }
}