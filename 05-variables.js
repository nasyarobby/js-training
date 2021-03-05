// cara mendeklarasikan variable

// ada 3 tipe variable: var, let dan const

var a; // a akan bernilai undefined
var b=1; // b akan bernilai 1
let c; // c akan bernilai undefined
let d, e; // d dan e akan jadi...?
let g, h = 100;
const i=1; // f akan bernilai 1

// var dan let bisa diubah setelah diinisiasi
a = 2 // a semula ... menjadi ...
d = "test" // d semula ... menjadi ...

// const tidak bisa diubah setelah diinisiasi
// dan saat diinisiasi harus ada nilainya
// const x; // error
const x=undefined; // tidak error
const z="ok"; // ok

// Nama variable:
let _a;
let ABC; // cocok untuk user constants
let a_;
let x123;
let $; // bisa, tapi tidak disarankan
let snake_case; // tidak disarankan
let camelCase; // disarankan
let CamelCase; // disarankan untuk penamaan objek. Variabel Case sensitif
let 123; // tidak bisa
let 123a; // tidak bisa
let *;
let #; // tidak bisa