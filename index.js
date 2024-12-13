const words = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "grape",
];

const r = words.reduce((arr, word) => {
  if (arr[word]) {
    arr[word] += 1;
  } else {
    arr[word] = 1;
  }
  return arr;
}, {});

console.log(r);
