const fs = require('fs');
const path = require('path')

let dirPath = 'public/uploads';
dirPath = path.join(__dirname, dirPath);

// 一级一级判断该路径下文件夹是否存在
// function isFileExist(pathArg) {
//     return new Promise((resolve, reject) => {
//         fs.stat(pathArg, (err, stats) => {
//             if (err) {
//                 reject(stats);
//                 return;
//             }
//             resolve(false);

//         })
//     })
// }

// function makeDir(pathArg) {
//     return new Promise((resolve, reject) => {
//         fs.mkdir(pathArg, (err) => {
//             if (err) {
//                 reject(err);
//             }
//         })
//     })
// }
function isFileExist(){
    try{

        fs.accessSync(dirPath,fs.F_OK);
        
        console.log('the file was already existed.');
        
        }catch(e)
        
        {
        
            console.log('the file not exist...');
        
        }
}

