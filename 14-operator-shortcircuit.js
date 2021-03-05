// Shortcircuit
// Operator && akan melanjutkan evaluasi ke operasi selanjutnya jika nilainya true
// jika evaluasi = false, operasi dihentikan dan nilai nya akan dikembalikan dengan nilai evaluasi saat itu.

// Contoh
// A && B && C
// 1. A dievaluasi apakah true/false
// 2. Jika A = true, evaluasi akan dilanjutkan ke B
// 3. Jika B = true, evaluasi akan dilanjutkan ke C

// 1. A dievaluasi apakah true/false
// 2. Jika A = false, maka evaluasi stop. dan nilai yang dikembalikan adalah nilai A

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


//console.log(A && B && C)
