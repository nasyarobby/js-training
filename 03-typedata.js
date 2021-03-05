// type type data di Javascript

// number
console.log(1, "tipe data", typeof 1);
console.log(0.15, "tipe data", typeof 0.15);
console.log(1e3, "tipe data", typeof 1e3);
console.log(1e-3, "tipe data", typeof 1e-3);

// string
// deklarasinya dengan diapit ' atau " atau ``
const text1 = "ok";
const text2 = "15"; // walaupun isinya angka, tapi karena diapit " maka 15 menjadi string.
const text3 = `ok`;

console.log(text1, "tipe data", typeof text1);
console.log(text2, "tipe data", typeof text2);
console.log(text3, "tipe data", typeof text3);

// Boolean
const benar = true
const salah = false

console.log("benar", benar, typeof benar)
console.log("salah", salah, typeof salah)

// object
const x = { nama: "Robby" };
console.log(x, "tipe data", typeof x);

// object ada banyak
// contoh array, Date, null
const arr = ['Satu', 'Dua', 'Tiga']
console.log(arr);
console.log(typeof arr)
console.log('Jumlah element pada arr', arr.length)

// null
const z = null;
console.log('z =',z,'tipenya:',typeof z)