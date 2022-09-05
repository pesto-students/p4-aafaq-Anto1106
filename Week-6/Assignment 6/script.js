function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let tempSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(tempSum - target) < Math.abs(closestSum - target)) {
        closestSum = tempSum;
      }
      if (tempSum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return closestSum;
}
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2

//Time complexity is O(n^2)
//Space complexity is O(1)
