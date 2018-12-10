const fs = require('fs');
const path = require('path')

let dirPath = 'public/uploads';
dirPath = path.join(__dirname, dirPath); 

// 一级一级判断该路径下文件夹是否存在
function isFileExist(dirPath){
    return new Promise ((resolve,reject) => {
        fs.stat(dirPath, (err,state) => {
            if(err){
                resolve(err);
                return;
            }
            resolve(true;

        })
    })
}

function makeDir(makePath){
    return new Promise ((resolve,reject) => {
        fs.mkdir(makePath,(err) => {
            if(err){
                reject(err);
            }else{
                resolve('success!');
            }

        })
    })
}
async function result(){
    let isExist = await isFileExist(dirPath);
    console.log(isExist);
}

makeDir(dirPath).then(
    (val) => { console.log(val)},
    (reason) => { console.log(reason)}
)

