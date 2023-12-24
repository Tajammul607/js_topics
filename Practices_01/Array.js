let arr=[1,2,3,4,5];

for (const i of arr){
    console.log(i);
};
arr.forEach( (item,index,arr)=> {
    // console.log(item,index,arr)
})


for (let i in arr){
    console.log(i)
    console.log(arr[i])
}


const map=new Map();

map.set("1","India");
map.set('2','usa');
map.set('3','uae');
map.set('1',"India")

// console.log(map)

for (let [key , value] of map){
    console.log(key ,":- " , value)
}
// for (let key in map){
    // console.log(map[key])}
let myObj={
    js:'javaScript',
    cpp:'c++',
    java:'j2EE'
}// forOf loop will not work in the object for itearation

for (let key in myObj){
    // console.log(myObj.value)  get undefined
    console.log(myObj[key]);
    console.log(`${key} value is ${myObj[key]}`)
}

//array inside object


let arrayInsideObject=[
    {
        languageName:"Javascript",
        fileExtension:"js"
    },
    {
        languageName:"Java",
        fileExtension:"java"
    },
    {
        languageName:"Python",
        fileExtension:"py"
    },
    {
        languageName:"Golang",
        fileExtension:"go"
    },
]

arrayInsideObject.forEach( (item)=>{
    console.log(item.languageName)
    console.log(item.fileExtension)
})
