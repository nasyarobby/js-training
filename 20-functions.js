function showMessage() {
  console.log("Hello hello");
}

showMessage(); // <== cara memanggil fungsi

// function bisa mendapatkan argument, dan mengembalikan nilai
function addAB(a,b){
    return a+b // kembalikan nilai a+b
}

const hasil = addAB(4,5) // panggil fungsi addAB, simpan hasilnya ke variable hasil
console.log(hasil) // cetak hasil


// argument bisa menerima default value
function pangkat(num, pangkat=2) {
    return num**pangkat;
}

console.log(pangkat(4)) // 4^2
console.log(pangkat(2,3)) // 2^3

// cara lain mendeklarasikan fungsi
// arrow function
const kurangAB = (a,b) => {
    return a-b; // akan dibahas di bagian string
}

// sama dengan diatas
// arrow function tanpa {}
const kurangABSimple = (a,b) => a-b; 

// function sebagai variable juga bisa
const sisaPembagian = function(a,b) {
    return a%b;
}

// variable yang merefer ke fungsi lain jg bisa
const copyAddAB = addAB;
console.log(copyAddAB(1,2))

// jika argument tidak diisi, argument tersebut akan diisi dengan undefined
// contoh

function checkArg(arg) {
    if(arg) { // truthy, truthy...
        console.log("Argument diisi:", arg)
    }
    else {
        console.log("Argument belum diisi!", arg)
    }
}
checkArg()