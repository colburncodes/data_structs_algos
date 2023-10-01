function findSumOfThree(nums, target) {
  // sort in ascending order
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1;
    let high = nums.length - 1;
    let sum = nums[i] + nums[low] + nums[high];
    if (sum < target) low++;
    if (sum > target) high--;
    if (sum === target) return true;
  }
  console.log(nums);
  return false;
}

console.log(findSumOfThree([1, -1, 0]));
console.log(findSumOfThree([3, 7, 1, 2, 8, 4, 5]));
console.log(findSumOfThree([3, 7, 1, 2, 8, 4, 5]));
console.log(findSumOfThree([-1, 2, 1, -4, 5, -3]));
console.log(findSumOfThree([-1, 2, 1, -4, 5, -3]));
