function sumFor(array) {
  let sum = 0;
  for (let i of array) {
    sum += array[i];
  }
  return sum;
}

function sumWhile(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
  }
  return sum;
}

function sumRecursion(array) {
  if(array.length === 0) { return 0; }
  return array[0] + sumRecursion(array.slice(1, array.length));
}

function sumTheSimpleWay(array) {
  return _.reduce(array, function (sum, num) { return sum += num})
}

const array = [1, 2, 3, 4, 5];
console.log(sumFor(array));
console.log(sumWhile(array));
console.log(sumRecursion(array));
console.log(sumTheSimpleWay(array));