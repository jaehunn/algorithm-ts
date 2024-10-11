/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  let cur = "";
  let rev = "";

  while (head) {
    cur += head.val;
    rev = head.val + rev;

    head = head.next;
  }

  return cur === rev;
}
