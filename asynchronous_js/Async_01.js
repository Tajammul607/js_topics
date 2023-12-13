//JS is synchronous and single threaded programming language
// async can be achieve in js by using some methods like setTimeOut,setTimeInterval ... and etc.


// console.log("starting...");

// for(let i=1;i<100; i++){
//     console.log(i)    after this loop the next line will execute
// };

// console.log("ending...");


// console.log("Starting....");

// setTimeout(()=>{
//     console.log("it'll not distrub the flow of execution");
// });
// console.log("Ending.....")

// console.log('1');

// setTimeout(()=>console.log('2'),0);

// for(let i=1; i<99; i++){
//     console.log('3')
// }
// console.log('4')

console.log("Starting...");

const id =setTimeout(()=> console.log('inside the setTimeout'),1000);

for(let i=1; i<9; i++){
    console.log('OOps')
}

console.log(`clear the setTimeout ${id}`);

clearTimeout(id);

console.log('End....')