function reverseStringRecursion(str){
    if(str.length===0){
        return str;
    }else{
        return reverseStringRecursion(str.slice(1))+str[0];
    }
}

function isPalindrome(str){
    let a=str.split('').reverse().join('');

    return str==a
}


function mergeTwoArr(arr,arr1){
    let a=arr.sort((a,b)=>a-b);
    let b=arr1.sort((a,b)=>a-b)
    let empty=a.concat(b).sort((a,b)=>a-b)
    return empty
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeTwoArr(arr1,arr2))

function factorial(num){
    if(num===0){
        return 1
    }else{
        return num * factorial(num-1)
    }
}

console.log(factorial(5))

function sumOfOddNumber(num){
    return num.filter(num=> num%2 !==0).reduce((a,b)=> a+b,0)

}

console.log(sumOfOddNumber([1,2,3,4,5,6,7]))



// console.log(isPalindrome('ababa'))
// console.log(reverseStringRecursion("abc"))