// two pointers approach to solve the problem in linear time.
// w/o any additional space complexity or use of built-in funcs.
// simply traversing the array from the start and the end at the same time.

function isPalindrome(s) {
  // intialize two pointers
  let left = 0,
    right = s.length - 1;

  while (left <= right) {
    // check if current pair of ele are identical or not.
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    // move index to the middle
    left++;
    right--;
  }
  // return true if you reach the middle of the string w/o finding a mismatch
  return true;
}

// test cases
console.log(isPalindrome("kayak"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("RACEACAR"));
console.log(isPalindrome("A"));
console.log(isPalindrome("ABCDABCD"));
console.log(isPalindrome("DCBAABCD"));
