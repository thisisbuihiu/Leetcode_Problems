/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Use a hash map to store numbers and their indices
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if the complement exists in our map
        if (numMap.has(complement)) {
            // Return the indices of the complement and current number
            return [numMap.get(complement), i];
        }
        
        // Store the current number and its index
        numMap.set(nums[i], i);
    }

    return [];
};
