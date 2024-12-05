const myArr = [0, 1, 2, 3, 4, 5];
const myHero = ["ayan", "ahmed"];

console.log(myArr + myHero);

const myArr2 = new Array(0, 1, 2, 3)
// console.log(myArr2);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(6)

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
// console.log(myn1);

// console.log("B ", myArr);
const myn2 = myArr.splice(1,3)

// console.log("C ", myArr);
// console.log(myn2);



const marvel_heros = ["Ayan", "Ahmed", "Salman"]
const dc_heros = ["Alqamah", "Abubakar", "Tanveer"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][2]);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5,], 5, 6, [9, 8, [9, 6]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
