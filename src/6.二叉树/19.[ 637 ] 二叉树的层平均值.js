/**
 * * 题目名称：二叉树的层平均值
 * * 题目地址：https://leetcode-cn.com/problems/average-of-levels-in-binary-tree
给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。


示例 1：

输入：
    3
   / \
  9  20
    /  \
   15   7
输出：[3, 14.5, 11]
解释：
第 0 层的平均值是 3 ,  第1层是 14.5 , 第2层是 11 。因此返回 [3, 14.5, 11] 。
 
 */

// * 思路：BFS层序遍历分分钟

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  if (!root) return root
  const res = []
  let queue = [root]
  while (queue.length) {
    const stackCur = []
    const stackNext = []
    for (let node of queue) {
      stackCur.push(node.val)
      node.left && stackNext.push(node.left)
      node.right && stackNext.push(node.right)
    }
    queue = stackNext
    res.push(stackCur.reduce((cur, pre) => cur + pre) / stackCur.length)
  }
  return res
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');