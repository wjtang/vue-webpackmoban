//  var express = require('express');
//  var app = express();
//  app.all('*',function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

//   if (req.method == 'OPTIONS') {
//     res.send(200); /让options请求快速返回/
//   }
//   else {
//     next();
//   }
// });
//  app.get('/hello',function(req,res){
//      console.log(req.query.name);
//      console.log(req.query.email);
//      res.send(req.query.name);
//  });
//  app.post('/hello1',function(req,res){
//     console.log(req.query);
//      res.send("5555");
//  });
//  app.listen(8080);
//  console.log('listen on port 8080');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var marked = require('marked')

app.use(bodyParser.urlencoded({    
  extended: true
}));
 app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});

app.post('/hello', function (req, res) {
  console.log(req.body);
  res.send(req.body);

});
app.get('/test',function(req,res){
   res.send('okokok');
})
app.get('/mark',function(req,res){
    fs.readFile('../README.md',function(err,data){
         if(err){
           console.log('文件不存在');
           res.send('file not find');
         }else{
            htmlStr = marked(data.toString());
            res.send(htmlStr);
         }
    })
})
var PORT = process.env.PORT || 8002;
server.listen(PORT);