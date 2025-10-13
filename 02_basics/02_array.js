const marvel_heros =["thor", "Ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

// // push
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros[3]);

// // concat
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread prefered
const all_new_heros =[...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// arre within arrray
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array= another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("coder"))
console.log(Array.from("coder"))
console.log(Array.from({name:"coding"}))

let score1 = 100;
let score2 = 100;
let score3 = 100;

console.log(Array.of(score1, score2, score3));