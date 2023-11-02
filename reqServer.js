const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);//returns request object in console
  console.log(req.url);
  console.log(req.method);
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000 for the request!");
});
