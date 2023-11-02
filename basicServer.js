const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('Request Made!');
})

server.listen(3000,'localhost',()=>{
    console.log('listening on port 3000 for the request!');
})