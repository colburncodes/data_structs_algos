// time complexity: O(n^2)
// space complexity: O(1)
function twoSum(arr, target) {
  // outer Loop
  for (let i = 0; i < arr.length; i++) {
    // inner Loop
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Checking ${arr[i]} and ${arr[j]}...`);

      // if the current elements sum to 'target', return them
      if (arr[i] + arr[j] === target) {
        console.log("Found a match!");
        return [i, j];
      }
    }
  }
}

console.log(twoSum([15, 11, 2, 7, 5, 3, 5, 7, 11], 9));
