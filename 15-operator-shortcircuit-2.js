// Shortcircuit
// Operator || akan stop evaluasi jika nilainya true dan nilai nya akan dikembalikan dengan nilai saat itu
// jika evaluasi = false, operasi dilanjutkan ke operasi selanjutnya.

// Contoh
// A || B || C
// 1. A dievaluasi apakah true/false
// 2. Jika A = false, evaluasi akan dilanjutkan ke B
// 3. Jika B = false, evaluasi akan dilanjutkan ke C

// 1. A dievaluasi apakah true/false
// 2. Jika A = true, maka evaluasi stop. dan nilai yang dikembalikan adalah nilai A

let A = true;
let B = 'string';
let C = 1;
let D = ''
let E = 0;
let F = false;
let G = {};
let H = new Date();
let I = [];
let J;

console.log(E || J || C)
