/**
 * * 题目名称：回文链表
 * * 题目地址：https://leetcode-cn.com/problems/palindrome-linked-list-lcci
编写一个函数，检查输入的链表是否是回文的。

示例 1：

输入： 1->2
输出： false 
示例 2：

输入： 1->2->2->1
输出： true 

 */

// * 思路：借助栈进行解决

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) return true
  const queue = []
  let cur = head
  while (cur) {
    queue.push(cur.val)
    cur = cur.next
  }
  while (queue.length >= 1) {
    if (queue.shift() !== queue.pop()) return false
  }
  return true
};

// 测试用例
let test = {
  val: 1,
  next: {
    val: 2
  }
}

console.time('执行用时');
console.log(isPalindrome(test));
console.timeEnd('执行用时');