const mysql = require('mysql');
const uuidv4 = require('uuid/v4');
let connection = mysql.createConnection({
    // host: process.env.MYSQL_HOST,
    // user: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PASSWORD,
    // database: process.env.MYSQL_DATABASE
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dictionary'
});
connection.connect();

function insetrLogs(valuesArr) {
    let sql = "INSERT INTO idiom(word,content) VALUES ?";
    let pro = new Promise((resolve, reject) => {
        connection.query(sql, [valuesArr],  (err, rows, fields) =>{
            if (err) {
                reject(err);
                console.log(err+valuesArr)
                return;
            }
            resolve("INSERT SUCCESS");
            console.log('success')
        });
    })
    return pro;
}

module.exports = {insetrLogs}
