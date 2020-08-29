/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let preNum = {}
    for(let i = 0; i< nums.length; i++) {
        let currentNum = nums[i]
        let targetNum = target - currentNum
        let targetNumIndex = preNum[targetNum]
        if(targetNumIndex != undefined) {
            return [targetNumIndex,i]
        }
        preNum[currentNum] = i

    }
};