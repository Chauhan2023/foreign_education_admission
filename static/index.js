const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Contact');
//app.use(express.static('static',Options));
//Express specific STUFF
app.use("/static", express.static("static"));
app.use(express.urlencoded());

//make our mongo
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    Email: String,
    desc: String,
  });
var Contact = mongoose.model('contact', contactSchema);

//PUG specific STUFF
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const param = {};
  res.status(200).render("index.pug", param);
});


app.post('#contact', (req, res) => {
    var mydata=new Contact(req.body);
    mydata.save().then(()=>{
        res.send("this have Successfully Submitted")
    }).catch(()=>{
        res.status(400).send("This item not saved to the data base")
    });
});

app.listen(port, () => {
  console.log(`This application started successfully at Port: ${port}`);
});
