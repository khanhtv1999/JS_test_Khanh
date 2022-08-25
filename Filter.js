function filterNumbersFromArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (typeof arr[i] === "string") {
      arr.splice(i, 1);
    }
  }
}

var arr = [1, "a", "b", 2];
filterNumbersFromArray(arr);
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
