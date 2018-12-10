const express = require('express');
const app = express();
const multiparty = require('multiparty');
var router = express.Router();
const path = require('path');


const resImg = express.static(path.join(__dirname,'img'));
app.use(resImg);
// app.get('/*',(request,response,next)=>{
//     console.log( request.path);
//     response.send('哇 正在找路中');
// });

app.listen(5656,()=>console.log('哇 电波连接成功！'));

