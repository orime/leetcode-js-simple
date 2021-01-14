/**
 * * 题目名称：链表的中间结点
 * * 题目地址：https://leetcode-cn.com/problems/middle-of-the-linked-list
给定一个头结点为 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

示例 1：

输入：[1,2,3,4,5]
输出：此列表中的结点 3 (序列化形式：[3,4,5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
示例 2：

输入：[1,2,3,4,5,6]
输出：此列表中的结点 4 (序列化形式：[4,5,6])
由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。

 */

// * 思路一：两次遍历，第一次找到链表长度；第二次根据 长度/2 找到目标节点

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let index = 0,
    cur = head
  while (cur) {
    index++
    cur = cur.next
  }
  let targetIndex = Math.floor(index / 2)
  let i = 0
  cur = head
  while (i < targetIndex) {
    cur = cur.next
  }
  return cur
};

// * 思路二：一次遍历双指针，一个指针i在 cur ，另一个j在 target，每当 i % 2 === 0(可以被2整除)，j++

/**
 * @param {ListNode} head
 * @return {ListNode}
 * [1,2,3,4,5,6]
 *i 0 1 2 3 4 5
 *j 0 1 1 2 2 3
 * 初始 i === j , 每当 i%2 === 1，j++
 */
var middleNode1 = function (head) {
  let i = 0,
    cur = head,
    target = head
  while (cur) {
    if (i % 2 === 1) {
      target = target.next
    }
    i++
    cur = cur.next
  }
  return target
};

// * 思路三：快慢双指针，快指针每次走两步，慢指针每次走一步，快指针到结尾时则到中间位置

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode2 = function (head) {
  let slow = head,
    fast = head
  while (fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');