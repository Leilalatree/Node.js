var http = require('http');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');
var url = require('url');
const stream = require('stream');

let server = http.createServer((req,res)=>{

    if (req.method.toLowerCase() === 'post') {
        let name = Date.now();
        const _ext = req.headers['content-type'];
        console.log(_ext);

        switch(_ext){
            case 'image/jpeg': name = `${name}.jpeg`
                break;
            case 'image/JPEG': name = `${name}.JPEG`
                break;
            case 'image/png': name = `${name}.png`
                break;
            case 'text/plain': name = `${name}.txt`
                break;
            case 'application/msword': name = `${name}.doc`
                break;
            case  'application/pdf': name = `${name}.pdf`
                break;
        }
        const writer = fs.createWriteStream(`/Users/Obstacle/Downloads/${name}`);//模板字符串



//             req.on('data',chunk =>{
//                 //TODO: 把buffer写入指定的一个文件中
// /*
//       方法1          const alldata = writer.write(chunk);//用writer.write()的方法把stream存进磁盘
// */
//
//             });
            req.pipe(writer);
            req.on('end',()=>{
                //TODO: 告知客户端完成，应该返回http code 201
                 res.statusCode = 201;
                 res.end('success');

            });

    }
});
server.listen(5656,()=>console.log('good!'));

