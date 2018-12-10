// var i = 0;
// while (true) {
//     i++;
// }

var c = 0;
function printInt() {
    console.log(c)
}
function plus(callback) {
   setTimeout(function () {
       c +=1;
       callback();
   },1000);
}
plus(printInt);

let [foo,bar] = await Promise.all([getFoo(),getBar()]);

let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;


async function dbFuc(db){
    let docs = [{},{},{}];
    for(let doc of docs){
        await db.post(doc);
    }
}


//   如果确实希望多个请求并发执行，可以使用Promise.all方法。当三个请求都会resolved时，下面两种写法效果相同。
  async function dbFuc(db){
      let docs = [{},{},{}];
      let promises = doc.map((doc)=>doc.post(doc));

      let result = await Promise.all(promises);
      console.log(result);
  }
  
  // 或者使用下面的写法
  async function dbFuc(db){
      let docs =[{},{},{}];
      let promises = docs.map(doc => db.post(doc));

      let result = [];
      for(let promise of promises){
          results.push(await promise);
      }
      console.log(results);
  }

  
  person.sayName(); // "张三"

  let person = new class{
      constructor(name){
          this.name = name;
      }
      sayName(){
          console.log(this.name);
      }
  }('李四');
   person.sayName();//李四


   function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function add1(x) { 
    var a = await resolveAfter2Seconds(20); 
    var b = await resolveAfter2Seconds(30); 
    return x + a + b; 
  }
   
  add1(10).then(v => { 
    console.log(v); // prints 60 after 4 seconds. 
  });
  
  async function add2(x) {
    var a = resolveAfter2Seconds(20);
    var b = resolveAfter2Seconds(30);
    return x + await a + await b;
  }
  
  add2(10).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
  });

async function test(x){
    let promise = resolveAfter2Seconds(20)
    return await promise
}