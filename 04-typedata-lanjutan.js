// undefined
// adalah nilai suatu variable jika belum diset
var x;
console.log(typeof x);

console.log('jika kita asssign x dengan suatu nilai')
x = 4;
console.log('tipenya akan berubah mengikuti assignment tersebut')
console.log(typeof x)

console.log('=========pembatas===========')

// tipe data Function, yg sebenarnya adalah object jg
function add(a,b) {
    return a+b;
}
console.log('add adalah', typeof add)