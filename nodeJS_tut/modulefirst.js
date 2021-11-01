const simple = require('./modulesecond');
const subjects = require('./sub.js');

let a = Object.keys(subjects);
console.log(a[0])
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

let sub = "English";
let subtop = "Grammar";
console.log(subjects[sub][subtop]);


simple();