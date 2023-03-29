
const express = require("express");
const https= require("https")
const body_parser= require("body-parser");
const app = express();
const port = 3000;
const cors= require("cors");
const http = require("http")
app.use(body_parser.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())
const server =http.createServer( (req, res)=>{
   try{ if(req.url==="/"){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("hello");
    res.end();}}
    catch(err){
        console.log(err)
    }
})
server.listen(5000,()=>{console.log("listening")});
app.post("/",(req,res)=>{
    const city=req.body.city;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=578c51226aa0a0e15717f2de88123947&units=metric"
    https.get(url,(response)=>{
       

        response.on("data",(data)=>{
            const weatherdata= JSON.parse(data);
            const icon =weatherdata.weather[0].icon
           const image= "http://openweathermap.org/img/wn/"+icon+"@2x.png"
          
          res.write("<h1>the temperature in "+city +" is "+ weatherdata.main.temp+" degree celcius</h1>");
          res.write("<img src="+image+">");
          res.send();
        })

    });
   
   
});

app.listen(3000,()=>{
    console.log(`Example app listening on port ${port}`)
});


fetch("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=578c51226aa0a0e15717f2de88123947&units=metric")
.then(data=> data.json())
//.then(data=> console.log(data.main.temp))
   

