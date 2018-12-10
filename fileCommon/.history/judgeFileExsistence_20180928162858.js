const fs = require('fs');
const path = require('path')

function isFileExist(){
    return new Promise ((resolve,reject) => {
        fs.stat(path.join(__dirname,'../public/uploads'), (err))
    })
}