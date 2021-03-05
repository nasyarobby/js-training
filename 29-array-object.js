// object adalah struktur data yang element (properties) tidak berurutan
const wajibPajak = {nama: "Robby", alamat:"Jakarta"}

// cara mengakses element nama pada object wajibPajak
console.log(wajibPajak["nama"]) 
// atau
console.log(wajibPajak.nama)


// array adalah object, yang merupakan struktur data yang memiliki URUTAN element
// array sendiri merupakan turunan dari Object
const kpp = ['721', '013', '215']

// indeks mulai dari 0
// element ke-0 adalah '721'
// element ke-1 adalah '013' dst

// cara mengakses element pada array
console.log(kpp[0]) // kpp.0 <- gak bisa

// cara memaniuplasi element pada array
kpp[1] = '333';
console.log(kpp[1])
console.log(kpp)

// cara mengetahui jumlah element
console.log(kpp.length)

console.log(typeof kpp) // object

// cara mengecek sebuah object adalah array
console.log(Array.isArray(kpp))

// cara lain menginisiasi array
const wp = new Array(2); // array kosong, dengan size 10;
console.log(wp)
wp[1] = 'Ujang'
console.log(wp)
console.log(wp.length) // 2
wp[5] = 'Annisa';
console.log(wp)
console.log(wp.length)