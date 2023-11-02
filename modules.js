const xyz = require('./filex');//executing this will execute whatever it is in the filex

console.log(xyz);//returns empty object if nothing is exported in the imported file
// console.log(names); --> u cannot access the variable directly without the local object, to do this u need to import using {names}

//normal export w/o explicitly mentioning name of the keys
// console.log(xyz.names);
// console.log(xyz.ages);

//when exported with different names of properties
console.log(xyz.alias);
console.log(xyz.old);

//To extract only specific property4
const {alias} = require('./filex');

console.log(alias);
