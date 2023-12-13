//CallBack function:- is nothing but passing the function as a parameter in another function

function myFun(CallBack){
    console.log('part 1')
    CallBack();
}

myFun(()=>{
    console.log('Part 2')
})

