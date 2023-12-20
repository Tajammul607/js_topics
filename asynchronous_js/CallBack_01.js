//CallBack function:- is nothing but passing the function as a parameter in another function

// function myFun(CallBack){
//     console.log('part 1')
//     CallBack();
// }

// myFun(()=>{
//     console.log('Part 2')
// })

function sumOfNumber(num1,num2,onSuccess,onFailure){
    if(typeof num1==="number" && typeof num2 === "number"){
        onSuccess(num1,num2);
    }else{
        onFailure();
    }
}

sumOfNumber(4,5,(num1,num2)=>{
    console.log(num1+num2)
},()=>{
    console.log("Opp mismatch");
    console.log("please enter the digit...")
})

