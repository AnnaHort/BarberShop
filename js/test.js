function arrayPlusArray(arr) {
  console.log(arr);
  let goodArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "good") {
      goodArr.push(arr[i]);
    }
    console.log(goodArr);
  }
  if (goodArr.length === 1) {
    console.log("Publish");
  } else if (goodArr.length > 1) {
    console.log("I smell a series!");
  } else console.log("Fail!");
}
arrayPlusArray([
  "good",
  "bad",
  "bad",
  "bad",
  "bad",
  "bad",
  "bad",
  "bad",
  "good",
  "bad",
  "bad",
]);
