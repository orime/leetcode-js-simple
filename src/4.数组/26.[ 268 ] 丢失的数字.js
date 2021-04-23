/**
 * * 题目名称：丢失的数字
 * * 题目地址：https://leetcode-cn.com/problems/missing-number
给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

 

进阶：

你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?
 

示例 1：

输入：nums = [3,0,1]
输出：2
解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
示例 2：

输入：nums = [0,1]
输出：2
解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
示例 3：

输入：nums = [9,6,4,2,3,5,7,0,1]
输出：8
解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
示例 4：

输入：nums = [0]
输出：1
解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。

 */

// * 思路：nums 为 3 的数组，[0, 1, 3] target为 6，公式为 (1 + nums.length)/2 * (nums.length)
// * 思路：nums 为 4 的数组，[0, 1, 2, 3, 4]总和为 10，公式为 (nums[1] + nums[nums.length - 1])/2 * (nums.length - 1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const target = ((1 + nums.length) / 2) * nums.length
  return target - nums.reduce((pre, cur) => pre + cur, 0)
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber1 = function (nums) {
  const obj = {}
  for (let v of nums) {
    obj[v] = 1
  }
  console.log(obj)
  for (let i = 0; i < nums.length + 1; i++) {
    if (!obj[i]) {
      return i
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber2 = function (nums) {
  const set = new Set(nums)
  for (let i = 0; i < nums.length + 1; i++) {
    if (!set.has(i)) return i
  }
}

// 测试用例
let test = [9, 6, 4, 2, 3, 5, 7, 0, 1]

console.time("执行用时")
console.log(missingNumber(test))
console.timeEnd("执行用时")
