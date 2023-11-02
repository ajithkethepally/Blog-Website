const fs = require('fs');

//READING FILES::

console.log("--------READING FROM FILE-------");

fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);//buffer data-->unreadable
    console.log(data.toString());//converts to readable format
})

// //u can also encoding format to directly convert the data into readable format w/o the need of toString method!!!
fs.readFile('./docs/blog1.txt',{encoding :'utf-8'},(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);//buffer data-->unreadable
    // console.log(data.toString());
})


//WRITING TO FILES::

console.log("--------WRITING INTO FILE-------");

//if file exists replaces, if not creates
fs.writeFile('./docs/blog2.txt','\nHola!\n',()=>{
    //callback function
    console.log('written into the file');
})

//DIRCTORIESS::


//creates folder if not exists
//RETURNS ERR IF ALREADY EXISTS
fs.mkdir('./assets',(err)=>{
console.log("--------MAKING DIRECTORY-------");
    if(err) console.log(err);
    console.log('Folder created!');
})

//To avoid getting error for existed directories, we just skip the step 
if(!fs.existsSync('./assets')){
    console.log("--------MAKING DIRECTORY-------");
    fs.mkdir("./assets", (err) => {
      if (err) console.log(err);
      console.log("Folder created!");
    });
}
//can give else part also
else{
    console.log("--------REMOVING DIRECTORY-------");
    fs.rmdir('./assets',(err=>{
        if(err) console.log(err);
        console.log('Folder deleted!');
    }))
}

//DELETING FILES::

console.log("--------DELETING FILES-------");

if(fs.existsSync('./docs/blog2.txt')){
    //deletes only if exists, if doesnt exists, gives error, that is why inside existsSync condition
    fs.unlink("./docs/blog2.txt",(err)=>{
        if(err) console.log(err);
        console.log('File deleted!');
    });
}
