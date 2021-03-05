// truthiness: bagaimana JS mengevaluasi sebuah nilai menjadi true atau false

console.log('True')
// variable dengan nilai berikut akan dievaluasi sebagai true
console.log(Boolean("something")) // string tidak kosong
console.log(Boolean(1)) // Number bukan 0
console.log(Boolean(-1)) // Number bukan 0
console.log(Boolean(0.01)) // Number bukan 0
console.log(Boolean({nama: "Robby"})) // Object
console.log(Boolean({})) // Object kosong
console.log(Boolean([])) // Array, karena array adalah object

console.log('\nFalse')
// variable dengan nilai berikut akan dievaluasi sebagai false
console.log(Boolean("")) // string kosong
console.log(Boolean(null)) // null
console.log(Boolean(undefined)) // undefined
console.log(Boolean(0)) // Number 0
console.log(Boolean([].length)) // karena array kosong, length = 0, 

// Contoh
const nama = "true" // ganti dengan string kosong dan jalankan ulang
if(nama) {
    console.log("Nama sudah terisi", nama)
}
else {
    console.log("Nama belum terisi")
}

// Pertanyaan
// apakah truthy value untuk
// "a"
// b
// "false"
// !false