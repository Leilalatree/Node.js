const express = require('express');
const multer = require('multer');
const fs = require('fs');
const  app = express();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './my-uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});//存储

const upload = multer({ dest:  'my-uploads/'});
app.use(express.static('public'));

app.post('/upload',upload.single('file'), (req,res)=>{
    console.log(req.file);
    const file = req.file;
    let filename = file.filename;
    const  name = file.originalname;

    const newName = name;
    console.log(newName);
  fs.renameSync(`./my-uploads/${filename}`,`./my-uploads/${newName}`);

    res.statusCode = 201;
    res.send('ok');
});

app.listen(5656,()=>console.log('报告大王！电波发射成功~'));

