function maxSubArray(nums) {
  let pre = 0
  let maxNums = nums[0]
  nums.forEach(item => {
    pre = Math.max(item, item + pre)
    maxNums = Math.max(pre, maxNums)
  });
  return maxNums
}