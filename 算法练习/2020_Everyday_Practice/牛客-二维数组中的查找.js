const inputArray = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
];
const findNumber = 1;

function Find(target, array) {
  const numbArray = array.length;
  const numbArray2 = array[0].length;
  let i = numbArray2 - 1;
  let j = numbArray - 1;
  while (i >= 0 && j >= 0) {
    if (array[j][i] === target) {
      return true;
    } else if (array[j][i] < target) {
      i++;
      j--;
    } else {
      if (i === 0) {
        j--;
      } else {
        i--;
      }
    }
  }
  return false;
}

function Find2(target, array) {
  // write code here
  lenX = array.length;
  lenY = array[0].length;
  for (var i = lenX - 1, j = 0; i >= 0 && j < lenY; ) {
    if (target > array[i][j]) {
      j++;
    } else if (target < array[i][j]) {
      i--;
    } else {
      return true;
    }
  }
  return false;
}
console.log("result:", Find(findNumber, inputArray));
console.log("result2:", Find2(findNumber, inputArray));