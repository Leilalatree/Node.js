const fs = require('fs');
const path = require('path')

let dirPath = 'public/uploads';
dirPath = path.join(__dirname, dirPath);

// 一级一级判断该路径下文件夹是否存在
function isFileExist(pathArg) {
    return new Promise((resolve, reject) => {
        fs.stat(pathArg, (err, state) => {
            if (err) {
                resolve(false);
                return;
            }
            resolve(true);

        })
    })
}

function makeDir(pathArg) {
    return new Promise((resolve, reject) => {
        fs.mkdir(pathArg, (err) => {
            if (err) {
                reject(err);
            }
        })
    })
}
async function result() {
    try {
        let isExist = await isFileExist(dirPath);
        
    } catch (error) {

    }

}


