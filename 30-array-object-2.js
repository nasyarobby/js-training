const antrianWp = ['Alice', 'Bob', 'Charlie', 'Daniel', 'Eka', 'Felicia'];

// ambil element terakhir, dan buang dari array. return hasilnya
const pop = antrianWp.pop();

console.log(pop)
console.log(antrianWp)

// ambil element pertama, dan buang dari array. return hasilnya
const shift = antrianWp.shift(); 
console.log(shift)
console.log(antrianWp)

// masukkan Alice ke belakang array
antrianWp.push(shift)
console.log(antrianWp)