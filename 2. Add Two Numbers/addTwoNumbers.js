/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    
    // Process both lists while at least one has nodes or there's a carry
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Get values from current nodes (or 0 if node is null)
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        
        // Calculate sum and new carry
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;
        
        // Create new node with the digit
        current.next = new ListNode(digit);
        current = current.next;
        
        // Move to next nodes if they exist
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    // Return the result (skip dummy head)
    return dummyHead.next;
};

// Helper function to create linked list from array
function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    
    return dummyHead.next;
}

// Helper function to convert linked list to array for easy display
function linkedListToArray(head) {
    let result = [];
    let current = head;
    
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    
    return result;
}

