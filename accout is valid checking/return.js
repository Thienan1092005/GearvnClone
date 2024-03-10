function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
  return null;
}
const nums = [5, 87, 44, 66, 22, 12];
const target = 110;
console.log(twoSum(nums, target));

// 5
//complement = target - nums[i];  <=> 110-5==105
// do số 105 không có trong numMap nên
//numMap = {
// 5    0
//
// }
//87
//============//
// 87
//complement = target - nums[i];  <=> 110-87==46
// do số 46 không có trong numMap nên
//numMap = {
// 5    0
//87    1
// }
//============//
// 44
//complement = target - nums[i];  <=> 110-44==66
// do số 66 không có trong numMap nên
//numMap = {
// 5    0
//87    1
//44    2
// }
//============//
// 66
//complement = target - nums[i];  <=> 110-66==44
// do số 44  có trong numMap nên
// return  2  3
