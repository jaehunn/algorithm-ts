// @see https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // if (!l1 || !l2) return l1 || l2;

  let r = new ListNode();
  let t = r;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      t.next = l1;
      l1 = l1.next;
    } else {
      t.next = l2;
      l2 = l2.next;
    }

    t = t.next;
  }

  // while (l1 || l2) if (!l2 || ...) 로 한쪽에만 남는 리스트를 즉시 처리하지 못함
  // -> 빈 리스트에 대해서 val 을 참조하지 못함
  t.next = l1 || l2;

  return r.next;
};
