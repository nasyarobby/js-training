// logical operator

// && AND
// || OR
// ! NOT

console.log('true  && true : ', true && true);
console.log('true  && false: ', true && false);
console.log('false && true : ', false && true);

// ------------------------------

// || (Logical OR) - returns true if one of the operand is true
console.log('true  || true : ', true || true);
console.log('true  || false: ', true || false);
console.log('false || true : ', false || true);

// NOT
const terdaftar = true;
console.log("Belum terdaftar: ", !terdaftar)

// CONTOH
// bisa ambil kredit hanya jika domisili di Jakarta dan sudahDewas
const domisiliJakarta = true;
const sudahDewasa = false;
console.log('Bisa ambil kredit:', domisiliJakarta && sudahDewasa)

// CONTOH
// bisa daftar NPWP jika sudah menikah atau minimal 17 tahun
const menikah = true;
const umurLebihDari17Tahun = false;
console.log('Bisa daftar NPWP:', menikah && umurLebihDari17Tahun)