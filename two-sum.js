//Two Sum

//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly ONE solution, and you may may NOT use the same element twice.


const twoSum = (nums, target) => {
    var newArray = [];
    //var target = 9;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            //console.log(nums[i], nums[j])
            if (nums[i] + nums[j] === target) {
                newArray.push(i);
                newArray.push(j);
            }
        }
    }
    return newArray;
}
console.log(twoSum([2, 7, 11, 15], 9));

// More efficient solution

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const previousValues = {}
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]
        const neededValue = target - currentNumber
        const index2 = previousValues[neededValue]
        if (index2 != null) {
            return [index2, i]
        } else {
            previousValues[currentNumber] = i
        }
    }
};

twoSum([5, 7, 6, 8], 12)
