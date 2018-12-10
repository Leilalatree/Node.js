/*request 支持https和重定向

* */
let request = require('request');
request('http://baidu.com',(error,response,body)=>{
    if(!error && response.statusCode == 200){
        console.log(body);
    }
});

//http认证
