// function timeout(ms) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms,'done');
//     });
// }
// // timeout(100).then((value)=>{
// //     console.log(value);
// // });
//
// let promise = new Promise(function (resolve,reject) {
//     console.log('Promise');
//     resolve();
// });
// promise.then(function () {
//     console.log('resolved.');
// });
// console.log('Hi');
//
// const getJson = function (url) {
//     const promise = new Promise(function (resolve,reject) {
//         const handler = function () {
//             if (this.readyState !== 4){
//                 return;
//             }
//             if (this.status ===200){
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };
//         const client = new XMLHttpRequest();
//         client.open("get",url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept","application/json");
//         client.send();
//     });
//     return promise;
// };
// getJson("/post.json").then(function(json) {
//     console.log('contents: ' + json);
// },function (error) {
//     console.log('出错了',error);
// });
//
// const p1 = new Promise(function (resolve,reject) {
//     setTimeout(()=>reject(new Error('fail')),3000)
// });
// const  p2 = new Promise(function (resolve,reject) {
//     setTimeout(()=>resolve(p1),1000)
// });
// p2
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
//
// p.then((val) =>console.log('fullfilled:',val))
//     .catch((err)=>console.log('rejected',err));
//
// const promise1 = new Promise(function(resolved,reject){
//     try {
//         throw new Error('test');
//     }catch (e) {
//         reject(e);
//     }
// });
// promise1.catch(function (error) {
//     console.log(error);
// });
// //写法二
// const promise2 = new Promise(function (resolve,reject) {
//     reject(new Error('test'));
// });
// promise2.catch(function (error) {
//     console.log(error);
// });
//
// //promise.prototype.finally
// /*
// promise
//     .then(result=>{...});
//     .catch(error => {...});
//     .finally(()=>{});
//
// */
//
// Promise.prototype.finally = function (callback) {
//     let p = this.constructor;
//     return this.then(
//         value => p.resolve(callback()).then(()=> value),
//         reason => p.resolve(callback()).then(()=>{throw reason})
//
//     );
// };
//
//promise.all
const p1 = new Promise(function (resolve,reject) {
  resolve('hello');
})
    .then(result => result)
    .catch(e => e);

const p2 = new Promise((resolve,reject) => {
    throw new Error('报错了');
})
    .then(result =>result)
    .catch(e => e);
Promise.all([p1,p2])
    .then(result => console.log(result))
    .catch(e => console.log(e));

