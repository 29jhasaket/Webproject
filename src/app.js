const express = require("express");
const path = require('path');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 8000;
//public static path
const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/views/partials");
app.set("view engine","hbs");
app.set('views',templatepath);
hbs.registerPartials(partial_path);


app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    res.render("index");
});
//routing
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("404error");
});

app.listen(port,(err)=>{
    console.log(`listining to the port ${port}`);
});