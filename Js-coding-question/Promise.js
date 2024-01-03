
// let id=1;
// const s_id= setInterval(()=>{
//     console.log(`$s_id print ${id++}` )
//     if(s_id>10){
//       clearInterval(s_id)
//     }
// },1000)
// const create=new Promise((resolve,reject)=>{
//      const success=false;

//      if(success){
//       resolve("Promise r objects ")
//      }else{
//       reject('hbsd')
//      }
//   })
// create.then((result)=>{
//   console.log(result)
// }).catch((result)=>{
//   console.log(result)
// }) 

// //Promise chaining
// const firstPromise =new Promise( resolve =>{
//   setTimeout(()=>{
//     resolve('first Promise is completed')
//   },1000)
// });

// const secondPromise =new Promise( resolve =>{
//   setTimeout(()=>{
//     resolve("second Promise is completed")
//   },7000)
// })

// const thirdPromise =new Promise(resolve =>{
//   setTimeout(()=>{
//     resolve("third Promise is solved")
//   },500)
// })

// firstPromise.then((result)=>{
//    console.log(result);
//    return secondPromise 
// }).then((result)=>{
//   console.log(result)
//   return thirdPromise
// }).then((result)=>{
//   console.log(result)
// })

// Fetching User Data and Posts

// function userDetails(userId){
//     return new Promise((resolve, reject)=>{
//         setTimeout (()=>{
//             const userData={
//                 id:userId,
//                 fullName:"Mohammed Tajammul",
//                 role:'developer'
//             }
//             resolve(userData)
//         },1000)
//     })
// }

// function userDetailsPost(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         const userPost =[
//             {
//                 id:1,
//                 titile:'A'
//             },
//             {
//                 id:2,
//                 titile:'B'
//             }
//         ];
//         resolve(userPost)
//       },7000)
//    })
// }


// userDetails(123).then((data)=>{
//     console.log(data);
//     return userDetailsPost(data.id)
// }).then((data)=>{
//     console.log(data)
// })

// function processingData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const userData=data.map(item=>item*2)
//             resolve(userData)
//         },1000)
        
//     })
// }

// function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            console.log(data);
//            resolve("processed data successfully")
//         },8000)
//     })
// }

// let arr=[1,2,3,3,4,5,6];
// processingData(arr).then((data)=>{
//     console.log(data);
//     return getData(data)
// }).then((data)=>{
//     console.log(data)
// })

function one(){
    return new Promise((resolve,reject)=>{
        let success=true;
        if(success){
            resolve("one step is completed")
        } else{
            reject("please review previous step")
        }
    },1000)
};

function two(data){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=false;
            if(success){
                resolve('oops somethings wents wrong...',data)
            }else{
                reject('let move to the further step')
            }
        },8000)
    })
};

function three(data){
    return new Promise((resolve)=>{
       setTimeout(()=>{
        console.log(`final step ${data}`)
       })
    })
}

one().then(data=>two(data))
.then(data=>three(data))
.catch(err=>console.log("Error",err))

async function fetchdata(){
    try{
        let response= await fetch('httwsd/asdas');
        let data =response.json();
        console.log(data)
    }catch(err){
        console.log(`Error while fetchin the data ${err}`)
    }
}
fetchdata()