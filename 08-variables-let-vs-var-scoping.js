function varTest() {
    var x = 1;
    if (true) { // scope if mulai
      var x = 2;  // variable yg sama
      console.log(x);  // 2
    } // scope if selesai
    console.log(x);  // 2
  }
  
function letTest() {
    let x = 1;

    if (true) { // scope if mulai
        let x = 2;  // variable berbeda dgn line 11
        console.log(x);  // 2
    } // scope if selesai

    console.log(x);  // 1
}

varTest()
letTest()