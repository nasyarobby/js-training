function cetak(text) {
    console.log(text);
}

function cetakDenganGaris(text) {
console.log('-------------');
console.log(text);
console.log('-------------');
}

function cetakNama(nama, fungsiCetak) {
    fungsiCetak(nama);
}

cetakNama("Logan", cetak)
cetakNama("Logan", cetakDenganGaris)