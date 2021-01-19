/**
 * * 题目名称：合并二叉树
 * * 题目地址：https://leetcode-cn.com/problems/merge-two-binary-trees
给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

示例 1:

输入: 
  Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
输出: 
合并后的树:
       3
      / \
     4   5
    / \   \ 
   5   4   7
注意: 合并必须从两个树的根节点开始。

 */

// * 思路：需要同时遍历两棵树，最好使用层序遍历

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
var mergeTrees = function (t1, t2) {
  if (!t1) return t2
  if (!t2) return t1
  let root = new TreeNode(t1.val + t2.val)
  root.left = mergeTrees(t1.left, t2.left)
  root.right = mergeTrees(t1.right, t2.right)
  return root
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');