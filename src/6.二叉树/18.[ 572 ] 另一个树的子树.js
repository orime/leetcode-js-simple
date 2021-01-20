/**
 * * 题目名称：另一个树的子树
 * * 题目地址：https://leetcode-cn.com/problems/subtree-of-another-tree
给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。

示例 1:
给定的树 s:

     3
    / \
   4   5
  / \
 1   2
给定的树 t：

   4 
  / \
 1   2
返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。

示例 2:
给定的树 s：

     3
    / \
   4   5
  / \
 1   2
    /
   0
给定的树 t：

   4
  / \
 1   2
返回 false。

 */

// * 思路：问题转化为，s上是否存在一个子节点，所在的子树是和t相等

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (!s && !t) return true
  if (!t) return true
  if (!s) return false
  return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};
function isSame(node1, node2) {
  if (!node1 && !node2) return true
  if (!node1 || !node2) return false
  return node1.val === node2.val && isSame(node1.left, node2.left) && isSame(node1.right, node2.right)
}

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');