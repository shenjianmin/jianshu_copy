// 通过mongoose方法连接数据库
let mongoose = require('mongoose')
let db = mongoose.createConnection('mongodb://127.0.0.1:27017/jianshu')
db.on('open',cb=>{
    console.log('数据库连接成功')
})
db.on('error',cb=>{
    console.log('数据库发生错误')
})
module.exports = db