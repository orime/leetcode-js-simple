/**
 * * 题目名称：移除重复节点
 * * 题目地址：https://leetcode-cn.com/problems/remove-duplicate-node-lcci
编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

示例1:

 输入：[1, 2, 3, 3, 2, 1]
 输出：[1, 2, 3]
示例2:

 输入：[1, 1, 1, 1, 2]
 输出：[1, 2]

 */

// * 思路：应该是节点值比较贴切

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
  const map = {}
  let fakeHead = { next: head }
  let cur = fakeHead
  while (cur) {
    let next = cur.next
    if (!next) return head
    if (map[next.val] === 1) {
      // * 删除当前节点
      cur.next = next.next
      continue
    } else {
      map[next.val] = 1
    }
    cur = cur.next
  }
  head = fakeHead.next
  return head
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');