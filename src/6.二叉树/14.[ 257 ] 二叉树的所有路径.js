/**
 * * 题目名称：二叉树的所有路径
 * * 题目地址：https://leetcode-cn.com/problems/binary-tree-paths
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3

 */

// * 思路：字符串回溯法

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = []
  dep(root, '')
  return res
  function dep(node, path) {
    if (!node) return
    path += node.val + '->'
    if (!node.left && !node.right) {
      res.push(path.slice(0, path.length - 2))
      return
    }
    dep(node.left, path)
    dep(node.right, path)
  }
};

// * 思路二：数组回溯法

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths1 = function (root) {
  const res = []
  const path = []
  dep(root)
  return res
  function dep(node) {
    if (!node) return
    if (!node.left && !node.right) {
      path.push(node.val)
      res.push(path.join('->'))
      path.pop()
      return
    }
    path.push(node.val)
    dep(node.left)
    dep(node.right)
    path.pop()
  }
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');