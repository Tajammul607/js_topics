//Array are nothing but collection of multiple element in a single variable

//js arrays are resizeable unlike other programming language

let array1= [1,3,4];

let array2 =["Muniba","Mariya","Hadi"]

// console.log(array1)

console.log(array2)

// Array Methods

//add the elements in the array
array1.push(7)
console.log(array1)

array1.unshift(12)//unshift() is used to add the element at the first index
console.log(array1)

//delete the element from the array
array1.pop();
console.log(array1)

array1.shift();// shift() is used to remove remove the first index element from the array
console.log(array1)

console.log(array1.includes(9))// it'll show is paticular element in present or not

console.log(array1.indexOf(8))// if index isn't present then will get -1

let newArray=array1.join(); // join() takes the array and converted it into string type

console.log(newArray);
console.log(typeof newArray)

/*slice and splice
  the main difference between slice and splice is 
  slice doesn't include the last index
  splice does include the last index 

  slice doesn't modify the original array
  splice modify the original array
*/


