//Filter, Map , Reduce

// let coding=['js','java','py','cpp','c','go'];

// let i=coding.forEach( (item)=>{ in case of forecah its doesn't return any values
//     // console.log(item)        
//     return item
// })

// console.log(i)

let myNumber=[1,2,3,4,5,6,7,8,9,10];

let newNum=myNumber.filter( (item)=>{
//    if(item >5){
//     console.log(item);
//    }
   return item > 5

});

let useReduce=myNumber.reduce ( (accumulator,currentValue)=>{
   console.log(`${accumulator} and current value ${currentValue}`)
  return accumulator + currentValue
},0)

console.log(useReduce)


console.log(newNum)

let books =[
    {title :'Book one' ,genre :"Science" , year:1999},
    {title :'Book two' ,genre :"cse" , year:1993},
    {title :'Book three' ,genre :"cse" , year:1995},
    {title :'Book four' ,genre :"Science" , year:1996},
    {title :'Book five' ,genre :"cse" , year:1992},
    {title :'Book six' ,genre :"Science" , year:1991},
]

let newBooks= books.filter( (item) => item.genre === "cse")

let newBookYear =books.filter( (item) => item.year > 1995)

// console.log(newBooks)
console.log(newBookYear);



