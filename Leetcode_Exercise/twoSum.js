let nums = [3, 4, 5, 1, 7];
let target = 9;
let number = [];
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                number = [i, j];
            }
        }

    }
    return number;
};

twoSum(nums, target);