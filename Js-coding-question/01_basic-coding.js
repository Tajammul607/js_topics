function sumOfTwoNumber(a,b){
    return a + b;
}

console.log(sumOfTwoNumber(9,7));

// reverse a string

function reverseSting(str){
  return str.split(" ").reverse()
}
let str = "Mohammed Tajammul"

console.log(reverseSting(str));



let college="Navodaya Institute of technology"

let savedReverse=college.split(" ").map(function(word){ //map return a new array
   return  word.split("").reverse().join("");// reversed for each word 
})

console.log(savedReverse.join(" "));

// how to check if an object is an array or not

// let myObj=[1,2,3,4,5];
let myObj="aabbbacccc";

if(Array.isArray(myObj)){
  console.log("It's and array")
}else{
  console.log("isn't an arry")
}

let removeDublicate=new Set(myObj);
console.log(removeDublicate);

let checkIObject=(obj)=>{
  let result=Array.isArray(obj);

  if(result){
    console.log(`it's an array ${result}`)
  }else{
    console.log(`oops isn't an array`)
  }
}

let array=[1,3,4];
checkIObject(array)

let array1=[2,5];
let append= [...array,...array1].sort((a,b)=> b-a)

console.log(append)

let id=1;
const s_id= setinterval(()=>{
    console.log(`$s_id print i++` )
    if(s_id<10){
      clearInterval(s)
    }
},1000)


