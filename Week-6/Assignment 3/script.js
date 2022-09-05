var sortArray = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  for (let i = 0; i <= end; i++) {
    if (nums[i] == 0) {
      nums[start] = [nums[i], (nums[i] = nums[start])][0];
      start++;
    } else if (nums[i] == 2) {
      nums[end] = [nums[i], (nums[i] = nums[end])][0];
      end--;
      i--;
    }
  }
  return nums;
};

arr = [0, 2, 1, 2, 0];
arrSecond = [0, 1, 0];
console.log('result One', sortArray(arr));
console.log('result Two', sortArray(arrSecond));

/*
  Time Complexity: O(n)
  Space Complexity : O(1)
*/
