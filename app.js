const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
const { result } = require("lodash");
const blogRoutes = require('./Routes/blogRoutes');
const app = express();

const dbURI = "mongodb+srv://sunny:sunny123@cluster0.qgcp8tk.mongodb.net/nodejs?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then((result)=>{
    console.log("connected to db");
    app.listen(3000);
  })
  .catch(err=>console.log(err));


app.set("view engine", "ejs");


//middleware & static files
app.use(express.static('public'));

//middleware for passing the post data that we sent into the workable format
//it is going to attach this data into req object
app.use(express.urlencoded({extended : true}));

app.use(morgan("dev"));
// app.use(morgan('tiny'));

// app.use((req,res,next)=>{
//   console.log("New request:");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ",req.method);
//   next();
// })



// app.use((req, res, next) => {
//   console.log("In the first middleware!");
//   next();
// });

app.get('/add-blog',(req,res)=>{
  const blog = new Blog({
    title: "Cinema Bandi",
    snippet:
      "A tale that captures the purity of the people from village. Story is about a bunch of villagers who discovers a camera by chance and the innocent activities they do with it.",
    body: "cinemaaaa",
  });
  blog.save()
    .then((result)=>{
      res.send(result);
    })
    .catch(err=>console.log(err))
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

//blogRoutes that scope to specific url
app.use('/blogs',blogRoutes);


app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});



//this is not gonna fired if the above get statements fired before because render method ends the response automatically after sending the response to the browser 
// app.use((req, res, next) => {
//   console.log("In the next middleware!"); 
//   next();
// });


app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
