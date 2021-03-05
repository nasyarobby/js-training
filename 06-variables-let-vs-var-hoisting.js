// apa bedanya?

// var vs let
// - var support hoisting (👎) 
// - var bisa diinisiasi ulang, let akan error jika diinisiasi ulang
// - scoping

// HOISTING
console.log(x); // x akan bernilai undefined walaupun baru diinisasi dibawah

var x='satu'

let y='yee';
console.log(y); // tidak akan error


console.log(z); // y akan error karena y baru diinisiasi dibawah
let z = 'zed' 