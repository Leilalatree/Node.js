var path = require('path');
var fs = require('fs');

// console.log('__dirname：', __dirname);//'/Users/Obstacle/WebstormProjects/test' 获得当前执行文件所在目录的完整目录名
// console.log('__filename：', __filename);//' /Users/Obstacle/WebstormProjects/test/find.js' 获得当前执行文件的带有完整绝对路径的文件名
// console.log('process.cwd()：', process.cwd());//'/Users/Obstacle/WebstormProjects/test'获得当前执行node命令时候的文件夹目录名
// console.log('./：', path.resolve('./'));//'/Users/Obstacle/WebstormProjects/test' 文件所在目录


var filePath = path.resolve('/Users/Obstacle/Desktop/testNode');
// console.log(filePath);

function  display(filePath) {
    fs.readdir(filePath,function (err,files) {
        if(err){
            console.log(err);
        }else{
            files.forEach(function (filename) {
                //获取当前文件的绝对路径
                var filedir = path.join(filePath,filename);
                //根据文件路径获取文件信息，返回一个fs.stats对象
                fs.stat(filedir,function (error,stats) {
                    if(error){
                        console.warn('获取文件stats失败');
                    }else{
                        var isFile = stats.isFile();
                        var  isDir = stats.isDirectory()
                        if (isFile){
                            console.log(filedir);
                        } else if (isDir){
                            display(filedir);
                        }
                    }
                })
            })
        }
    })
}

module.exports = display;
// display('/Users/Obstacle/Desktop/testNode');

// var files = fs.readdir('Users/Obstacle/Desktop/testNode',function (err,files) {
//     if(err){
//         console.warn('获取文件stats失败');
//     }else{
//         var isFile = stats.isFile();
//         var  isDir = stats.isDirectory()
//         if (isFile){
//             console.log(filedir);
//         } else if (isDir){
//         }
//     }
// });
// console.log(files);