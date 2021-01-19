/**
 * * 题目名称：二叉树的镜像
 * * 题目地址：https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof
请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 

示例 1：

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]

 */

// * 思路：这不就是翻转二叉树吗

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) return root
    ;[root.left, root.right] = [root.right, root.left]
  mirrorTree(root.left)
  mirrorTree(root.right)
  return root
};

// * 思路二：BFS翻转二叉树吗

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree1 = function (root) {
  if (!root) return root
  let queue = [root]
  while (queue.length) {
    const stack = []
    for (let node of queue) {
      [node.left, node.right] = [node.right, node.left]
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
    }
    queue = stack
  }
  return root
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');