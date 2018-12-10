const express = require('express');
const router = express.Router();
//
router.get('/index',(request,response)=>{
    console.log(1);
    response.send('你瞅啥==！');
});
router.get('/display',(request,response)=>{
    //
    return response.redirect("/wow.jpg");
});

const muilter = require('./download');
const uplpoad = muilter.single('file');

router.post('/down',(request,response)=>{
    console.log(1);
    uplpoad(request,response,(err)=>{
        if(err)response.statusCode = 404;
        console.log(response);
    });
    response.send('???')
});

module.exports = router;