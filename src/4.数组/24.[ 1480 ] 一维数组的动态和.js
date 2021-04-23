/**
 * * 题目名称：一维数组的动态和
 * * 题目地址：https://leetcode-cn.com/problems/running-sum-of-1d-array
给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

请返回 nums 的动态和。

示例 1：

输入：nums = [1,2,3,4]
输出：[1,3,6,10]
解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
示例 2：

输入：nums = [1,1,1,1,1]
输出：[1,2,3,4,5]
解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。
示例 3：

输入：nums = [3,1,2,10,1]
输出：[3,4,6,16,17]

 */

// * 思路一：从前向后遍历，记录累加和

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const res = []
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    res.push((sum += nums[i]))
  }
  return res
}

// * 思路二：直接使用数组的reduce方法

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum1 = function (nums) {
  if (!nums.length) return []
  const res = []
  nums.reduce((pre, cur) => {
    res.push(pre + cur)
    return pre + cur
  }, 0)
  return res
}

// 测试用例
let nums = [1, 2, 3, 4]
let nums1 = [3, 1, 2, 10, 1]

console.time("执行用时")
console.log(runningSum(nums))
console.log(runningSum(nums1))
console.log(runningSum1(nums))
console.log(runningSum1(nums1))
console.timeEnd("执行用时")
