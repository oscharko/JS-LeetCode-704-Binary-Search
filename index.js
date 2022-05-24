let = nums = [], target = 5

const search = function(nums, target) {
  let index = nums.indexOf(target)
  if (nums.length > 0 || index != 0) {
    return index
  } else {
    return -1
  }
};

console.log(search(nums, target))