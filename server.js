const express = require('express');
const hbs = require('hbs');

var app = express();

app.use((req,res,next)=>{
  res.render('maintainance.hbs');
});

hbs.registerHelper('year',() => {
  return new Date().getFullYear();
});

hbs.registerPartials(__dirname+"/views/partials")

app.set('view engine','hbs');

app.use(express.static(__dirname+"../public"));

app.get('/',(req,res) => {
  res.render("home.hbs");
});

app.get('/about',(req,res) => {
  res.render('about.hbs',{
    pageTitle:"About Us",
  }); //end render
});

app.listen(3000);
