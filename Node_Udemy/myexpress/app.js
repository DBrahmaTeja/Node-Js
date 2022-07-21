var express=require('express');
var bodyparser=require('body-parser');
var path=require('path');
//var pug=require('pug');
var port=3000
var app=express();


 app.use(function (req,res,next) {
    console.log('Time: ',Date.now());
    next();
});

//app.set('view engine','pug');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false})); //for post requests
app.use(express.static(path.join(__dirname,'public')));//to use the static files like html,css

app.get('/',function(req,res) {
    //res.send('Hello World!');
    res.render('index',{
        title:req.query.name, //http://localhost:3001/?name=teja
        showtitle: true,
        people:['John','Steeve','Jose'],
    });
});
app.get('/about',function(req,res) {
    res.send('About Page');
});
app.listen(port);
console.log('Server started on  port: '+port);

module.exports=app;