const express = require('express')
const app = express();

app.use(express.urlencoded({extended: true})) // to fetch the body part in a post request
app.use(express.json());


app.get('/', function (req, res) {
  console.log("HTTP Method: "+req.method);
  res.send('Hello World!')
})

app.get('/abcd', function (req, res) {
    res.send({
      a:10,
      b:true,
      c:"Asfdgk",
      d:{
        e:"Asigjgg"
      }
    });
  })

app.post('/abcd', function (req, res) {
    res.send('WOW! You posted on abcd')
    console.log(req.body);
  })

app.get('/greet',(req,res)=>{ //http://localhost:3001/greet?name=teja
    console.log(req.query)
    if(req.query.name)
    res.send("Hello "+ req.query.name);
    else
    res.send("Hello guest");
})
app.get('/arr',(req,res)=>{
  res.send([
    'asfd',
    'jhfujfvu',
    'poiopyu'
  ])
})
app.listen(3001,()=>{
    console.log('Example app listening on port 3000');
})