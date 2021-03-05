const condition1 = true;
if (condition1) {
  console.log("Condition 1 is true");
}

const condition2 = false;
if (condition2) {
  console.log("Condition 2 is true");
} else {
  console.log("Condition 2 is false");
}

const condition3 = false;
const condition4 = false;
if (condition3) {
  console.log("Condition 3 is true");
} else if (condition4) {
  console.log("Condition 4 is true");
} else {
  console.log("Condition 3 and 4 is false");
}

// {} diperlukan untuk multi baris
// {} bisa tidak ditulis jika hanya 1 baris
if (condition3) console.log("Condition 3 is true");
else if (condition4) console.log("Condition 4 is true");
else console.log("Condition 3 and 4 is false");


// atau kaya gini, yang penting ; nya jangan lupa (tapi bikin pusing)
if (condition3) 
  console.log("Condition 3 is true");
else 

if (condition4) 
console.log("Condition 4 is true");
else console.log("Condition 3 and 4 is false");
