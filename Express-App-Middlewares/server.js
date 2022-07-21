const express=require('express');
const app= express();


function middleware1(req,res,next){
    console.log("Middleware1");
    next()
}


function sayhello(req,res)
{
    res.send("Hello World");

}


app.get('/',middleware1,sayhello);

app.listen(7788,()=>{
    console.log('Server started on http://localhost:7788 ');
})