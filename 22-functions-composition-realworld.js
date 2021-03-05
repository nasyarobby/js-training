// contoh implementasi dengan kasus di lapangan

function simpanKeObjectStorage(namaFile, data) {
  console.log("Simpan ke object storage");
  // misalnya
  // ObjectStorage.storeFile(namaFile, data)
}

function simpanKeLocalStorage(namaFile, data) {
  require("fs").writeFile(namaFile, data, () =>
    console.log("Saved as local file.")
  );
}

function simpanFile(namaFile, data, fungsiSimpan) {
  //otomatis menambahkan txt
  const namaFileWithExt = namaFile + ".txt";
  fungsiSimpan(namaFileWithExt, data);
}

simpanFile('test', 'isi file', simpanKeObjectStorage)
