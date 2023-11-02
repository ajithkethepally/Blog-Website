const names = ['akash','sunny'];
const ages= [21,34];

console.log(names);

//To return the data from the imported file
module.exports = 'hello';//returns the string
//overrides the above export
module.exports = names;//returns the array name

//for exporting multiple things
module.exports = {
    names,ages
}
//we can export them with any name of the property 
module.exports = {
    alias : names,
    old : ages
}

