let nums = [1,-6,5,7,-98]
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 0)
    continue;
  console.log(nums[i])
}