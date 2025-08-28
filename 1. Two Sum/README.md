# Two Sum

## Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Hash Map Approach

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

The optimal solution uses a hash map (JavaScript Map) to store numbers we've seen and their indices. For each number, we calculate its complement (target - current number) and check if we've seen it before.

**Algorithm:**
1. Create an empty hash map
2. Iterate through the array
3. For each element, calculate the complement (target - current element)
4. Check if the complement exists in the hash map
5. If yes, return the indices of the complement and current element
6. If no, store the current element and its index in the hash map
7. Continue until solution is found

## Usage

Run the solution:
```bash
node twoSum.js
```

This will execute the test cases and display the results.
