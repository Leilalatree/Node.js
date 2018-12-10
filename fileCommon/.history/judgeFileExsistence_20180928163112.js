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
            console.log(state);
            resolve(state);

        })
    })
}