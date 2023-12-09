const score=100;

console.log(score);

const balance=new Number(1000);

console.log(balance);

console.log(balance.toString());

console.log(balance.toFixed(2));

const precisionNumber=122.86732;
console.log(precisionNumber.toPrecision());

console.log(precisionNumber.toPrecision(5));

const calculateMoney=10000000000;
console.log(calculateMoney.toLocaleString());
console.log(calculateMoney.toLocaleString('en-IN'));

// ----------------  MATH -------------------

console.log(Math)
console.log(Math.abs(-78833));
console.log(Math.round(7899.9));
console.log(Math.ceil(34556.1));
console.log(Math.floor(23333.9));

console.log(Math.min(2,1,0,-1,6));
console.log(Math.max(2,1,0,-1,6));
console.log(Math.sqrt(9));
console.log(Math.pow(3,5));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1)

let min =20;
let max=30;

console.log(Math.floor(Math.random()*(max-min +1))+ min)
