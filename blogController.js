//as per mdn convention
//blog_index, blog_create_get, blog_create_post, blog_details, blog_delete

const Blog = require("../models/blog");

const blog_index= (req,res)=>{
    Blog.find()
      .sort({ createdAt: 1 }) //recent one will be first
      .then((result) => {
        res.render("index", { title: "All Blogs", blogs: result });
      })
      .catch((err) => console.log(err));
};

const blog_create_get = (req, res) => {
  res.render("create", { title: "New Blog" });
};

const blog_create_post = (req, res) => {
  console.log(req.body); // Add this line to check the data being received
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: "Blog Details", blog: result });
    })
    .catch((err) => {
        res.status(404).render("404", { title: "404" });
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      //it is a AJAX Requestt so cant render it directly
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_create_get,
  blog_create_post,
  blog_details,
  blog_delete,
};