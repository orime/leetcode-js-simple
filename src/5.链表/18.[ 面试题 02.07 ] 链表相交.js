/**
 * * 题目名称：链表相交
 * * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci
 */

// * 思路：

var getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null
  let curA = headA,
    curB = headB
  while (curA !== curB) {
    curA = curA ? curA.next : headB
    curB = curB ? curB.next : headA
  }
  return curA
}

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');