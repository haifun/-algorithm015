/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) return nums.length;
    let i = 0, j =1;
    while(j<nums.length){
        if(nums[j] != nums[i]){
            nums[++i] = nums[j];
        }
        j++;
    }
    return i+1
};