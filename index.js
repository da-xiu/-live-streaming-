/**
 * Created by 10143 on 2018/10/16.
 */
//1,引入express
var express = require('express');
var app = express();

//2,设置模板引擎
var path = require('path');
//3,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//4,设置ejs引擎
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

//5,静态文件
app.use(express.static('public'));

//6,引入body-parser模块
var bodyParser = require('body-parser');
//7，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//1,首页
var indexControllers = require('./Controllers/IndexControllers');
app.get('/index',indexControllers.index);
var IndexControllers = require('./Controllers/LoginContrllers');
app.post('/login',urlencodedParser,IndexControllers.login);
app.post('/register',urlencodedParser,indexControllers.register);


//监听
app.listen(1006,function(){
    console.log("[Server is running at http://localhost:1006]");
});