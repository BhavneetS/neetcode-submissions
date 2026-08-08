/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */

    /* 
        // Build a sample list: 1 → 2 → 3 → 4 → 5
        const head = new ListNode(
        1,
        new ListNode(
            2,
            new ListNode(
            3,
            new ListNode(
                4,
                new ListNode(5)
            )
            )
        )
        );
    
     */
    middleNode(head: ListNode | null): ListNode {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}
