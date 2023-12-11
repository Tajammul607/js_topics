let _heros= ["SRK","Salman Khan","Amir khan"];

let _heroine=["Kareena","Kaif","Alia"];

// console.log(_heros.push(_heroine));

// let newChar=_heroine.concat(_heros);

const all_Character=[..._heroine,..._heros];

console.log(all_Character)

let another_array=[1,2,3,4,[1,2,3],6,[8.9,7],5,7];

let real_array=another_array.flat(Infinity)

console.log(real_array)

console.log(Array.from("Tajammul"));

console.log(Array.from({name:"Tajammul"}))//when it can't make it to array o/p is []
