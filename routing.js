const http = require("http");
const fs = require("fs");

//Sending direct html page!! --> require filesystem
const server = http.createServer((req, res) => {
  console.log("request made!");

  res.setHeader("Content-Type", "text/html");
  
  let path = './views2/';
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode=200;
      break;
      
    case "/about":
        path += "about.html";
        res.statusCode = 200;
        break;

    case "/about-me":
        res.statusCode=301//to indicate that resource moved
        res.setHeader('Location','/about');//makes redirection
        res.end();
        break;
          
    default:
        path += "404.html";
        res.statusCode = 400;
  }
  //file reading
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end(); //if not , if there is error, just hangs there, so to end that
    } else {
      // res.write(data);
      // res.end();
      res.end(data); //for single data file
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
