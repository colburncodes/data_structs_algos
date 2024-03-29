// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.
function containsCommonItem(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}

function containsCommonItem2(arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false;
}

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

console.log(containsCommonItem(array1, array2));
console.log(containsCommonItem2(array1, array2));
console.log(containsCommonItem3(array1, array2));
