// average time complexity: O(n^2)
// space complexity: O(1)
function bubbleSort(arr) {
  // length of array
  const n = arr.length;
  // track whether any swaps have been made.
  let swapped;
  // iterate through the array until no swaps are made.
  do {
    // reset the swap beginning of each iteration.
    swapped = false;
    let i = 0;
    while (i < n - 1) {
      // Compare current element with next element.
      if (arr[i] > arr[i + 1]) {
        // if current element is greater than next element, swap them.
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
      // move next element in array
      i++;
    }
  } while (swapped); // Continue until no swaps are made.
  // return the sorted array.
  return arr;
}

const array = [64, 25, 12, 22, 11, 33, 45, 1, 2, 3, 4, 5, 6, 7, 8];

console.time("bubbleSort");
const sorted = bubbleSort(array);
console.timeEnd("bubbleSort");

console.log(`The sorted array ${sorted}.`);
