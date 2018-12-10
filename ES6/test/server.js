const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');


http.createServer('resquest',(req,response)=>{
    let {path:arg}=url.parse(decodeURI(req.url),true);
        const filePath = path.resolve('/Users/Obstacle/Downloads');
        const imgPath = path.join(filePath, arg);
        fs.readFile(imgPath, (err, origin) => {
            if (err) {
                response.statusCode = 404;
                // response.writeHead(404, { 'Content-Type': 'text/plain' });
                console.log('1');
            } else {
                response.writeHead(200,{'Content-Type':'image/png'});
                response.write(origin, 'binary');
            }
            response.end();
        });


}).listen(5656,()=>console.log('good!'));

// http.get(urlPath,)


// http.get('http://baidu.com', response => {
// var querystring = require('querystring');
//
//     var body = [];
//     console.log(response.statusCode);
//     console.log(response.headers);
//     console.log(response);
//     response.on('data',chunk => body.push(chunk));
//
//     response.on('end', function () {
//         body = Buffer.concat(body);
//         console.log(body.toString());
//     });
// });