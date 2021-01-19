/**
 * * 题目名称：左叶子之和
 * * 题目地址：https://leetcode-cn.com/problems/sum-of-left-leaves
计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

 */

// * 思路：BFS计算左叶子和，污染节点/节点标记

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) return 0
  let queue = [root]
  let res = 0
  while (queue.length) {
    const stack = []
    for (let node of queue) {
      if (node.isLeft && !node.left && !node.right) {
        res += node.val
        continue
      }
      if (node.left) {
        node.left.isLeft = true
        stack.push(node.left)
      }
      node.right && stack.push(node.right)
    }
    queue = stack
  }
  return res
};

// * 思路二：DFS计算左叶子节点val和

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves1 = function (root) {
  if (!root) return 0
  let res = 0
  if (root.left) {
    if (!root.left.left && !root.left.right) {
      res += root.left.val
    }
  }
  return res + sumOfLeftLeaves1(root.left) + sumOfLeftLeaves1(root.right)
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');