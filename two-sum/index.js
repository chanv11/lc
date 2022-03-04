function twoSum(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i]
    if (map[rest] !== undefined) {
      return [map[rest], i]
    }
    map[nums[i]] = i
  }
  return []
}

nums = [2, 7, 11, 15], target = 9

console.log(twoSum(nums, target))