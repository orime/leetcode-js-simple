/**
 * * 题目名称：二叉搜索树的最小绝对差
 * * 题目地址：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst
给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

示例：

输入：

   1
    \
     3
    /
   2

输出：
1

解释：
最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。

 */

// * 思路：二叉搜索树 左<根<右，比较次序为 根 - 左 ---> 右 - 根

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let ans = Infinity, pre
  const dfs = (node) => {
    if (!node) return
    dfs(node.left)
    if (typeof pre !== 'undefined') {
      ans = Math.min(ans, node.val - pre)
    }
    pre = node.val
    dfs(node.right)
  }
  dfs(root)
  return ans
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');