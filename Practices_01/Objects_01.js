//when we create an object using new Object() this's known as singleton or constructor

const tinderUser=new Object();
// const user={}

tinderUser.id=123;
tinderUser.name="XYZ";
tinderUser.isLoggedIn=false;

// console.log(tinderUser)

const regularUser={
    "email":"Tajammul@intuit.com",
    "Full Name":{
        userFullName:{
            firstName:"Mohammed",
            lastName:"Tajammul"
        }
    }
}

console.log(regularUser);
console.log(regularUser["Full Name"]);
console.log(regularUser["Full Name"].userFullName);
console.log(regularUser["Full Name"].userFullName.firstName)
