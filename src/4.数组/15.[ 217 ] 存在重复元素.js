/**
 * * 题目名称：存在重复元素
 * * 题目地址：https://leetcode-cn.com/problems/contains-duplicate
给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true

 */

// * 思路：

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length
};

// 测试用例
let test = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

console.time('执行用时');
console.log(containsDuplicate(test));
console.timeEnd('执行用时');