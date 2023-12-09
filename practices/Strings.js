let fullName= "Mohammed Tajammul"
let repoCount=5;

console.log(`${fullName} created  ${repoCount} Repository`);
//string type is Objects and it's store the values in key-value pairs
let gameName = new String('Sub-Way');
console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName.__proto__);

console.log(gameName.charAt(3));

console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,5);
console.log(newString);

const newAnother=gameName.slice(0,4);
console.log(newAnother);

const stringtrim = "      Tajammul       ";
console.log(stringtrim);
console.log(stringtrim.trim());

//Replace

const url ="https://organic%20spoon%207j59rv7xx9frx66";

console.log(url.replace('%20','-'))//it'll replace only at first match 
console.log(url.replaceAll('%20','-'))//it'll replace all the matching characters

console.log(url.includes('git'))

console.log(url.split('%20'));//split will take the string and split into and array or list 
console.log(url[2]);