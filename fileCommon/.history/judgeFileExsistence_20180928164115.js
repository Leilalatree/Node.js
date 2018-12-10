const fs = require('fs');
const path = require('path')

let dirPath = 'public/uploads';
dirPath = path.join(__dirname, dirPath); 
function isFileExist(dirPath){
    return new Promise (dirPath,(resolve,reject) => {
        fs.statdirPath, (err,state) => {
            if(err){
                resolve(err);
                return;
            }
            resolve(state);

        })
    })
}

function makeDir(makePath){
    return new promise ((resolve,reject) => {
        fs.mkdir()
    })
}
async function result(){
    let isExist = await isFileExist(dirPath);
    console.log(isExist);
}
result();
