# 2. Add Two Numbers

## Problem Description

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Examples

**Example 1:**
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807
```

**Example 2:**
```
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 3:**
```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
Explanation: 9999999 + 9999 = 10009998
```

## Solution Approach

**Time Complexity:** O(max(m, n)) where m and n are the lengths of the two linked lists  
**Space Complexity:** O(max(m, n)) for the result linked list

**Algorithm Steps:**
1. Initialize a dummy head node to simplify list construction
2. Use a carry variable to track overflow from previous addition
3. Iterate while either list has nodes OR there's a remaining carry
4. For each position:
   - Get digit values (0 if node is null)
   - Calculate sum = digit1 + digit2 + carry
   - New carry = sum ÷ 10 (integer division)
   - Current digit = sum % 10
   - Create new node with current digit
   - Advance pointers if nodes exist
5. Return the result (skip dummy head)


## Usage

Run the solution:
```bash
node addTwoNumbers.js
```

This will execute all test cases including edge cases and display the results.
