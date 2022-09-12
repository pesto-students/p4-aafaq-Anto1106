//! BIGO NOTATION FOR
function maxSubArray(array, length) {
  let maxint = Math.pow(2, 53);
  let max_so_far = -maxint - 1;
  let max_ending_here = 0;
  for (i = 0; i < length; i++) {
    max_ending_here = max_ending_here + array[i];
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }
    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
  }
  return max_so_far;
}

var a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log('Maximum contiguous sum is', maxSubArray(a, a.length));

/*
  Time Complexity: O(n)
  Space Complexity : O(1)
*/
