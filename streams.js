const fs = require('fs');

//READING STREAM::

const readStream = fs.createReadStream("./docs/blog3.txt");
// const readStream = fs.createReadStream("./docs/blog3.txt",{encoding:'utf-8'});//converts data into a readable format

readStream.on('data',(chunk)=>{
    console.log("\n---------NEW CHUNK---------\n");
    console.log(chunk);//not in readable format
    console.log(chunk.toString());//in readable format
})

//WRITING STREAM

const writeStream = fs.createWriteStream('./docs/blog4.txt');
writeStream.write('Holaaa!!!!!!\n');
const msg = 'Welcome User!'
writeStream.write(msg);

//PIPING::

console.log("-------TRADITIONAL WAY-------");//All are asynchronous functions, so this prints first , while others are doing their tasks

readStream.on("data", (chunk) => {
  console.log("\n---------NEW CHUNK---------\n");
  console.log(chunk); //not in readable format
  writeStream.write("Holaaa!!!!!!\n");
  writeStream.write(chunk);

});

console.log("-------EFFICIENT PIPING-------");

readStream.pipe(writeStream);