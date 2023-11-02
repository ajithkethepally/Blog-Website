const express = require('express');

const app = express();

//listen for request, by default local host
app.listen(3000);

app.get('/',(req,res)=>{

    // res.send('<p>Home Page</p>')//by default sets content type according to response and status code to 200

    res.sendFile('./views2/index.html',{root:__dirname});
});

app.get("/about", (req, res) => {
//   res.send("<p>About Page</p>");

    res.sendFile('./views2/about.html',{root:__dirname});
});

//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})

//404
app.use((req,res)=>{
    res.status(400).sendFile('./views2/404.html',{root:__dirname});
})
