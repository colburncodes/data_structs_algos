// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  let len = nums.length;
  let squared = [];

  let left = 0;
  let right = len - 1;

  // loop through the array starting at the end
  for (let i = len - 1; i >= 0; i--) {
    // square the numbers
    let leftSquared = nums[left] * nums[left];
    let rightSquared = nums[right] * nums[right];
    if (leftSquared > rightSquared) {
      squared[i] = leftSquared;
      left++;
    } else {
      squared[i] = rightSquared;
      right--;
    }
  }
  console.log(squared);
  return squared;
};

sortedSquares([-4, -1, 0, 3, 10]);
