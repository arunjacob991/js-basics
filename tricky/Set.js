
const arr = [1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7];

console.log(arr);

function removeDup(data) {
  console.log([...new Set(data)]);
}

removeDup(arr);
