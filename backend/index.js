const express = require("express");
const app = express();
const axios = require("axios")
const cors= require("cors");
app.use(cors())
//const https = require("https")
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
let city;


app.get("/getData",(req,res)=>{
 try{res.sendFile('/frontend/src/App.js', { root: '../' });}
 catch(err){
  console.log(err.message);
 }

})
 app.post("/createData",(req,res)=>{ 
  try{const place = req.body;
  city= place.name;
 console.log(city);
 const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=578c51226aa0a0e15717f2de88123947&units=metric"
  axios.get(url)
  .then(response => {
      res.json(response.data);
  })
  .catch(error => {
      console.log(error);
  });
}  catch(err){
    console.log(err.message);
  }})

app.get("/weather",(req,res)=>{
  const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=578c51226aa0a0e15717f2de88123947&units=metric"
  axios.get(url)
  .then(response => {
      res.json(response.data);
  })
  .catch(error => {
      console.log(error);
  });
})


app.listen(5000,()=>{
    console.log("working");
})

