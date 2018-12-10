const fs = require('fs');
const path = require('path')

let dirPath = 'public/uploads';
dirPath = path.join(__dirname, dirPath);

// 一级一级判断该路径下文件夹是否存在
function isFileExist(pathArg) {
    return new Promise((resolve, reject) => {
        fs.stat(pathArg, (err, stats) => {
            if (err) {
                resolve(stats);
                return;
            }
            resolve(false);

        })
    })
}

function makeDir(pathArg) {
    return new Promise((resolve, reject) => {
        fs.mkdir(pathArg, (err) => {
            if (err) {
                reject(err);
            }else{
                resolve(true)
            }
        })
    })
}
async function ifFileNullMake(pathArg) {
    let isExist = await isFileExist(pathArg);
    let isParentExist = true;
    let newPathArg ;
    if (isExist && isExists.isDirectory()) {
        while (isParentExist && isParentExist.isDirectory()) {
            parentDir = path.parse(pathArg).dir;
            isParentExist = isFileExist(parentDir);
            newPathArg = pathArg;
            pathArg = parentDir;
        }
    }


}


