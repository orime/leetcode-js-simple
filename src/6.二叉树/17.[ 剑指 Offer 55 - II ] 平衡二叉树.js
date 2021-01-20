/**
 * * 题目名称：平衡二叉树
 * * 题目地址：https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。


示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

 */

// * 思路：只会自顶向下逐个比较并备忘录剪枝

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const map = new Map()
var isBalanced = function (root) {
  if (!root) return true
  return Math.abs(getDep(root.left) - getDep(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  function getDep(node) {
    if (!node) return 0
    if (map.get(node)) return map.get(node)
    const maxDep = Math.max(getDep(node.left), getDep(node.right)) + 1
    map.set(node, maxDep)
    return maxDep
  }
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');