/**
 * * 题目名称：多数元素
 * * 题目地址：https://leetcode-cn.com/problems/majority-element
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1：

输入：[3,2,3]
输出：3
示例 2：

输入：[2,2,1,1,1,2,2]
输出：2

 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length
  const map = {} // * 结构为 {'2': 4, 1: 3}
  const limit = len / 2
  let res = null
  for (let i = 0; i < len; i++) {
    const val = nums[i]
    map[val] = map[val] ? map[val] + 1 : 1
    if (map[val] >= limit) {
      res = val
      break
    }
  }
  return res
};

// 测试用例
let test = [2, 2, 1, 1, 1, 2, 2]

console.time('执行用时');
console.log(majorityElement(test));
console.timeEnd('执行用时');