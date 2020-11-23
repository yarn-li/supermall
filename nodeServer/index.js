const express = require("express");
const fs = require("fs");
const app = express();
// const router = app.Router();
app.set("view engine", "ejs");


let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen(5000, function () {
  console.log("服务器已启动");
});

app.route("/search/home/multidata").get(function(req,res){
  fs.readFile(`./public/home/multidata.json`, function (err, data) {
    if (err) console.log("服务器异常，读取失败");
    else {
      let datas =  data.toString(); 
      // res.render("data.ejs", { datas });
      res.send(datas)
     
    }
  });

})

app.route("/search/home/data").get(function(req,res){
  let type = req.query.type;
  let page = req.query.page;
  fs.readFile(`./public/data/${type}-${page}.json`, function (err, data) {
    if (err) console.log("服务器异常，读取失败");
    else {
      let datas =  data.toString(); 
      // res.render("data.ejs", { datas });
      res.send(datas)
     
    }
  });

})

app.route("/search/detail").get(function(req,res){

  let iid = req.query.iid 

  fs.readFile(`./public/detail/${iid}.json`, function (err, data) {
    if (err) console.log("服务器异常，读取失败");
    else {
      let datas =  data.toString(); 
      // res.render("data.ejs", { datas });
      res.send(datas)
    }
  });

})