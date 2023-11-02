const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
//import Blog model
const Blog = require('./models/blog');

const app = express();

//connect to mongodb
const dbURI ="mongodb+srv://sunny:sunny123@cluster0.qgcp8tk.mongodb.net/nodejs?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then((result)=>{
    console.log('connected to the db');
    app.listen(3000);
  })
  .catch(err=>console.log(err));

app.set("view engine", "ejs");


//middleware & static files
app.use(express.static("public"));

app.use(morgan("dev"));
// app.use(morgan('tiny'));


//add data to the collection
app.get('/add-blog',(req,res)=>{
  const blog = new Blog({
    title : 'new-blog1',
    snippet : 'about new-blog1',
    body : 'more about new blog1'
  })
  blog.save()
    .then(result=>{
      res.send(result);
    })
    .catch(err=>console.log(err))
})

//retrieve all the blogs from collection
app.get('/all-blogs',(req,res)=>{
  Blog.find()
  .then((result)=>{
    res.send(result);
  })
  .catch(err=>console.log(err));
})


//to get single blog
app.get("/get-blog", (req, res) => {
  Blog.findById("6474e356dde2a5e0a8fd441e")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});


app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
