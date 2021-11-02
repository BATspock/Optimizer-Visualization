const simple = require('./modulesecond');
const subjects = require('./sub.js');
const Hindi = require('./hindi.js');

let a = Object.keys(subjects);
//console.log(a[0])
//for (let i = 0; i < a.length; i++) {
//    console.log(a[i]);
//}

let sub = "English";
console.log(Object.keys(Hindi))
let subtop = "sandhi";
console.log(Hindi[subtop]);


//simple();
const json = require('./example.json');

console.log(json);