function findShortest(vectors) {
  const lengthVectors = vectors.map((items, index) => {
    let lengthVector = 0;
    let x = 0;
    for (let i = 0; i < items.length; i++) {
      x += items[i] * items[i];
      lengthVector = Math.sqrt(x);
    }
    return { lengthVector, index };
  });
  lengthVectors.sort((a, b) => a.lengthVector - b.lengthVector);
  return vectors[lengthVectors[0].index];
}
var vectors = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];
var shortest = findShortest(vectors);
console.log(shortest);
