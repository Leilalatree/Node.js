const express = require('express');
const router = express.Router();

const cheerio = require('cheerio');
const rpn = require('request-promise-native');
const http = require('http');
const iconv = require('iconv-lite');
const mysql = require('../db/data.dao');

let dataArray = [];
for (let i=0;i<48;i++){
    let uri = 'http://www.guoxue.com/chengyu/cyx_024';
    if (i < 24) {
        if(i<9){
            uri = `http://www.guoxue.com/chengyu/cys_00${i+1}.htm`;
        }else if (i >= 9){
            uri = `http://www.guoxue.com/chengyu/cys_0${i+1}.htm`;
        }
    }else if (i >= 24) {
        j = i-23

        if (j <= 24)
            if(j <= 9){
                uri = `http://www.guoxue.com/chengyu/cyx_00{j}.htm`;
            }else if (j > 9) {
                console.log(i)
                uri = `http://www.guoxue.com/chengyu/cyx_0${j}.htm`;
            }
    }
    // else if (i === 47){
    //     uri = `${uri}cyx_024.htm`;
    // }
    // 测试uri:'http://127.0.0.1:3000'
    http.get(uri,res => {

        let chunks = [ ];
        res.on('data', chunk => {
            chunks.push(chunk);
        });
        res.on('end', async () => {
            console.log(uri)
            let html = iconv.decode(Buffer.concat(chunks), 'gb2312');
            let $ = cheerio.load(html);
            let data =  $("span:contains('【')").text()
            let dataObj = data.split('【');
            // console.log(dataObj)
            let a = 0;
            for(let key in dataObj){

                let singleLine = dataObj[key];
                if(singleLine !== ''){
                    a++
                    let singleLineObj = singleLine.split('】');
                    dataArray.push(singleLineObj);

                    // console.log(singleLineObj)
                    while (dataArray.length === 400){
                        console.log(dataArray[249]);
                        try {
                            await mysql.insetrLogs(dataArray);
                            dataArray.length = 0;
                        }catch (e) {
                            console.log(e);
                            throw (e);
                        }
                    }
                }
            }
            console.log(a)

            if (dataArray.length > 0) {
                try {
                    mysql.insetrLogs(dataArray);
                    dataArray.length = 0;
                } catch (error) {
                    console.log(error.message);
                }
            }
        });
    });

}




module.exports = router;