module.exports = function (a) {
    console.log(a);
};

let buffer = new ArrayBuffer(10);
console.log(buffer.byteLength);
let buffer2 = buffer.slice(2,5);
console.log(buffer2);