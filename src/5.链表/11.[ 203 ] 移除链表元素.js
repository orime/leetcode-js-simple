/**
 * * 题目名称：移除链表元素
 * * 题目地址：https://leetcode-cn.com/problems/remove-linked-list-elements
删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5

 */

// * 思路一：虚拟头结点

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let fakeHead = { next: head }
  let cur = fakeHead
  while (cur) {
    let next = cur.next // head
    if (!next) return fakeHead.next
    if (next.val === val) {
      cur.next = next.next
      continue // ! cur 的 next 变更之后，继续比较变更后的 next，所以 cur 当前不用变
    }
    cur = cur.next
  }
  head = fakeHead.next
  return head
};

// * 思路二：递归，

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements1 = function (head, val) {
  if (!head) return head
  head.next = removeElements1(head.next, val)
  if (head.val === val) {
    return head.next
  } else {
    return head
  }
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');