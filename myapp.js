var express = require("express");
var mysql = require("mysql"); // include thêm module mysql
var app = express();
// Tạo kết nối với Database
var pool = mysql.createPool({
host: "localhost",
port:"8889",
user: "root",
password: "root",
database: "mydata"
});
app.get("/user", function(req, res){
// Viết câu truy vấn sql
var sql = "SELECT * FROM tbl_singer";// Thực hiện câu truy vấn và show dữ liệu
pool.query(sql, function(error, result){
if (error){
  res.json("loi:"+error);
}
console.log("– USER TABLE — " , result);
res.json(result); // Trả kết quả về cho client dưới dạng json
});
});
app.listen("2244","127.0.0.1");
console.log("—– server is listening —–");
