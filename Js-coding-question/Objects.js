// what's the draw back of declaring the methods directly in object

let obj = (fullName,company,salary)=>{
  this.fullName=fullName,
  this.company=company,
  this.salary=salary,

  this.salaryformate=function(){
     return " $ " + this.salary;
  }
}
// memory usage : the copy of methods created whenever the new object is created
var emp1 = new obj('Yuri Garagin', 'Company 1', 1000000);
var emp2 = new obj('Dinesh Gupta', 'Company 2', 1039999);
var emp3 = new obj('Erich Fromm', 'Company 3', 1299483);


//  closure is nothing but calling a function inside a function or returning

const c=()=>{
    console.log("this's gonna call inside of the function")
};

const b =()=>{
    c();
}



const mul =(a)=>{
    return function(b){
     return function(c){
        return a*b*c
     }
    }
}

console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48

// empty the array in js

var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];

// 1st methods

arrayList=[]

//2nd methods 
arrayList.length=0;

// 3rd methods
while(arrayList.length){
    arrayList.pop();
}