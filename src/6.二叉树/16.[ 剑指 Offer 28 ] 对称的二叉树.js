/**
 * * 题目名称：对称的二叉树
 * * 题目地址：https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof
请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

 
示例 1：

输入：root = [1,2,2,3,4,4,3]
输出：true
示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false
 
 */

// * 思路二

/**
 * @param {TreeNode} root
 * @return {boolean}
 * 只能说太强了，外星人解法
 */
var isSymmetric = function (root) {
  function isMirror(r1, r2) {
    if (!r1 && !r2) return true
    if (!r1 || !r2) return false

    return r1.val === r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left)
  }

  return isMirror(root, root)
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');