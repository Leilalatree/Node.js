const fs = require('fs');
const path = require('path')

const dirPath = '../public/uploads';
function isFileExist(dirPath){
    return new Promise ((resolve,reject) => {
        fs.stat(path.join(__dirname,dirPath), (err,state) => {
            if(err){
                resolve(err);
                return;
            }
            resolve(state);

        })
    })
}
let isExist =  isFileExist(dirPath);
console.log(isExist)