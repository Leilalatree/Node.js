const express = require('express');
const app = express();
const path = require('path');
const router = require('./router.js');
const rout = require('./router.js');

const res = express.static(path.join(__dirname,'img'));
app.use('/res',res);
app.use('/demo',router);
app.use('/rout',rout);


app.listen(5656,()=>console.log('哇 光波发射'));