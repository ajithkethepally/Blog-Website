const mongoose = require('mongoose');

//create schemas
const Schema = mongoose.Schema; // constructor

//creating instance of the schema
const blogSchema = new Schema({
    title : {//for extra validation
        type : String,
        required : true
    },
    snippet : {
        type : String,
        required : true
    },
    body : {
        type: String,
        required : true
    }
},{timestamps:true});

//creating models
const Blog = mongoose.model('Blog',blogSchema);

//export the model
module.exports = Blog;