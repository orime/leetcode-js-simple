/**
 * * 题目名称：顺时针打印矩阵
 * * 题目地址：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

示例 1：

输入：matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
  ]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：

输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]

 */

// * 思路二：while循环简化代码

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder1 = function (matrix) {
  if (matrix.length == 0) return [];
  const res = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) res.push(matrix[top][i]);   // 上层
    for (let i = top; i < bottom; i++) res.push(matrix[i][right]); // 右层
    for (let i = right; i > left; i--) res.push(matrix[bottom][i]);// 下层
    for (let i = bottom; i > top; i--) res.push(matrix[i][left]);  // 左层
    right--;
    top++;
    bottom--;
    left++;
  }
  if (top == bottom) { // 剩下一行，从左到右依次添加
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
  } else if (left == right) { // 剩下一列，从上到下依次添加
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left]);
    }
  }
  return res;
}
// * 思路：

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix || matrix.length === 0) return []
  const res = []
  const listLen = matrix.length
  const len = matrix[0].length
  // ! i 为层数
  for (let i = 0; i < len; i++) {
    // * 如果是第一层，扒一层皮
    for (let j = i; j < len - i; j++) {
      res.push(matrix[i][j])
    }

    if (res.length === len * listLen) return res
    for (let k = i + 1; k < listLen - i; k++) {
      res.push(matrix[k][len - i - 1])
    }

    if (res.length === len * listLen) return res
    // break
    for (let l = len - i - 2; l >= i; l--) {
      res.push(matrix[listLen - i - 1][l])
    }

    if (res.length === len * listLen) return res
    // break
    for (let m = listLen - i - 2; m > i; m--) {
      res.push(matrix[m][i])
    }

    if (res.length === len * listLen) return res

  }
  return res;
};

// 测试用例
let test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
// 测试用例
let test1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]

console.time('执行用时');
console.log(spiralOrder(test1));
console.timeEnd('执行用时');