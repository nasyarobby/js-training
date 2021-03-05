// const artinya constant
// nilainya tidak dapat diassign ulang

const x = 10;
//pi = 20; // error
//  jgn lupa comment line 5

// SCOPING
console.log(x) //10
function test() {
  const x = 30;
  console.log(x); //30
}
test() // panggil fungsi test
console.log(x); // 10

// sebisa mungkin gunakan
// const terlebih dahulu
// jika perlu assign ulang, gunakan let
// hindari var.