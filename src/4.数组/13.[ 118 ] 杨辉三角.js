/**
 * * 题目名称：杨辉三角
 * * 题目地址：https://leetcode-cn.com/problems/pascals-triangle
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

 */

// * 思路一：发现规律，从第三个三角开始，多出一个数为左右上角相加和

/**
 * @param {number} numRows
 * @return {number[][]}
 * * 动态规划解法，第 n 行的结果为 dp(n) = genNew(n-1)
 * * 再把这个结果加到最后的 result 中
 */
var generate = function (numRows) {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]
  const result = [[1], [1, 1]]
  for (let i = 3; i <= numRows; i++) {
    result.push(genNew(result[result.length - 1]))
  }
  return result
};

/**
 * * 根据一个数组生成新的插入数组 [1, 1] [1, 2, 1]
 * @param {number[]} 
 */
function genNew(list) {
  if (list.length === 1) return [1, 1]
  if (list.length === 2) return [1, 2, 1]
  const res = [list[0]]
  for (let i = 1; i < list.length; i++) {
    res.push(list[i - 1] + list[i])
  }
  res.push(list[list.length - 1])
  return res
}

// * 思路二：直接利用杨辉三角的规律生成

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate1 = function (numRows) {
  const result = []
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1)
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j]
    }
    result.push(row)
  }
  return result
};

// 测试用例
let test = 5

console.time('执行用时');
console.log(generate(test));
console.log(generate1(test));
// console.log(genNew([1, 3, 3, 1]));
console.timeEnd('执行用时');