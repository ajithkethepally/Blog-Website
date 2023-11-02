const http = require('http');
const fs = require('fs');

//Sending Plain Text
const server = http.createServer((req,res)=>{
    console.log('Request Made!');
    res.setHeader('Content-Type','text/plain');//plain text
    res.write('Welcome to my website!!');//content
    res.end();//ending response
})

//Sending HTML 
const server = http.createServer((req, res) => {
  console.log("Request Made!");
  res.setHeader("Content-Type", "text/html"); //plain text
  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write('<p>Welcome to my website!!</p>'); //content
  res.end(); //ending response
});

//Sending direct html page!! --> require filesystem
const server = http.createServer((req,res)=>{
    console.log('request made!');

    res.setHeader('Content-Type','text/html');
    
    //file reading
    fs.readFile('./views2/index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end();//if not , if there is error, just hangs there, so to end that
        }
        else{
            // res.write(data);
            // res.end();
            res.end(data);//for single data file
        }
    })
})


server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
})