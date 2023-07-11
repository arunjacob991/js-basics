const arr = [1, 2, 3, 4, 5, 6, 7, 11, 9];
const arr1 = ["a", "b", "c"];

console.log(arr.map((x) => x + 10));

arr.forEach((ele) => console.log(ele));

console.log(arr.filter((x) => x > 5));

console.log(arr.sort((a, b) => b - a));

console.log(arr.concat(arr1));

const numbers = [10, 20, 30, 40, 50, [100, 200, ["a", "b"]]];

console.log(Array.from(numbers, (x) => x + 10));

console.log(numbers.flat());

console.log(arr1.join(""));

console.log(arr.reduce((accu, currentVal) => accu + currentVal));
