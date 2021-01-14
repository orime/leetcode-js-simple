/**
 * * 题目名称：删除排序链表中的重复元素
 * * 题目地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 示例 1:
 输入: 1->1->2
 输出: 1->2
 示例 2:
 输入: 1->1->2->3->3
 输出: 1->2->3
 */

// * 思路：每次提取出被比较元素，依次向下查找

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let cur = head
  while (cur) {
    let next = cur.next
    if (!next) {
      // * 没有下一个节点
      return head
    }
    if (next.val === cur.val) {
      cur.next = next.next
    } else {
      cur = next
    }
  }
  return head
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(deleteDuplicates(test));
console.timeEnd('执行用时');