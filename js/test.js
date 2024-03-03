function dotCalculator(arr) {
  let casa = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 25) {
      casa += 25;
    }
    if (arr[i] > 25) {
      if (casa - arr[i] < 0) {
        console.log("false", false);
        return
      } else {
        casa += arr[i];
        casa -= arr[i] - 25;
      }
    }
    if (casa < 0) {
      console.log("false", false);
      // return false;
    }
    console.log("true", true);
    console.log("casa", casa);
    // return true;
  }
}

// dotCalculator([25, 25, 50, 25, 75, 25, 25, 100]);
dotCalculator([25, 25, 50, 25, 100, 100, 175]);

// [25, 25, 50, 25, 75, 25, 25, 100] true;
// [25, 25, 50, 75, 50] false
