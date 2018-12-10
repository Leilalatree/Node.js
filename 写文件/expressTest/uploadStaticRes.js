const express = require('express');
const app = express();
const path = require('path');

const resImg = express.static(path.join('./','img'));
app.use(resImg);
app.listen(5656,()=>console.log('哇 电波连接成功了'));