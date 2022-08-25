function numberOfItems(arr, item) {
  const flatten = (arr) => {
    const result = [];
    arr.forEach((i) => {
      if (Array.isArray(i)) {
        result.push(...flatten(i));
      } else {
        result.push(i);
      }
    });
    return result;
  };
  let counter = 0;
  flatten(arr).forEach((value) => {
    if (value === item) {
      counter = counter + 1;
    }
  });
  return counter;
}
var arr = [25, "apple", ["banana", "strawberry", "apple", 25]];
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));
