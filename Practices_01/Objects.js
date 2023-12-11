//Object() ---> singleton

//object literal

const designation =Symbol("Software Engineer");

let userDetails={
    name:"Mohammed",
    "Full Name":"Mohammed Tajammul",
    [designation]:"Software developer",
    age:24,
    location:"Raichur",
    email:"tajammulgoogle.com",
    isLogged:false,
    lastLoggedInDate:["Monday","Friday","Sunday"]
}

console.log(userDetails["Full Name"]);
console.log(userDetails.email)

console.log(typeof userDetails[designation])

userDetails.email="Tajammul@microsoft.com"
// Object.freeze(userDetails) //freeze() is used when we dont wanna allow changes in the object
userDetails.email="Tajammul@gyansys.com"

// console.log(userDetails);

userDetails.greeting= function (){
    console.log(`Hello ${this["Full Name"]}`)
}

console.log(userDetails.greeting())