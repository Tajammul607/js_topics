// const body=document.body;
// console.log(body);

// const button=document.querySelector("button");
// const intervalId= setInterval(()=>{
//     const red=Math.floor(Math.random()*126);
//     const green=Math.floor(Math.random() *126);
//     const blue =Math.floor(Math.random());
//     const rgb=rgb(`${red},${green},${blue}`)
//     body.style.background=rgb
// },1000)

// button.addEventListener("Click",()=>{
//     clearInterval(intervalId);
//     button.textContent=body.style.background;
// })


let change1=document.querySelector('.heading1');
let change2=document.querySelector('.heading2');
let change3=document.querySelector('.heading3');
let change4=document.querySelector('.heading4');
let change5=document.querySelector('.heading5');
let change6=document.querySelector('.heading6');

//callback hell 
setTimeout(()=>{
  change1.textContent="Hello One";
  change1.style.color="violet";
  setTimeout(()=>{
    change2.textContent="Hello Two";
    change2.style.color="Red"
    setTimeout(()=>{
      change3.textContent="Hello Three";
      change3.style.color="yellow"
      settimeout(()=>{
        change4.textContent="Hello Four"
        change4.style.color="green"
        setTimeout(()=>{
          change5.textContent="Hello Five";
          change5.style.color="purple";
          setTimeout(()=>{
            change6.textContent="Hello Six";
            change6.style.color="pink"
          },3000)
        },2000)
      },1000)
    },3000)
  },2000)
  
},1000);