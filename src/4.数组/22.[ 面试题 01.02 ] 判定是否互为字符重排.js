/**
 * * 题目名称：判定是否互为字符重排
 * * 题目地址：https://leetcode-cn.com/problems/check-permutation-lcci
给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

示例 1：

输入: s1 = "abc", s2 = "bca"
输出: true 
示例 2：

输入: s1 = "abc", s2 = "bad"
输出: false

 */

// * 思路一：逐个遍历
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    let targetChar = s1[i]
    let index = s2.indexOf(targetChar) // * indexOf用于字符串寻址
    if (index === -1) return false // * indexOf找不到不是undefined，而是-1
    const arr2 = s2.split("")
    arr2.splice(index, 1) // * splice的返回值是被截取的元素组成的数组
    s2 = arr2.join("") // * join必须写空字符串，否则会默认以,分隔
  }
  return !s2.length
}

// * 思路二：直接sort
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation1 = function (s1, s2) {
  return s1.split("").sort().join("") === s2.split("").sort().join("")
}
// 测试用例
let s1 = "abc",
  s2 = "bca"

console.time("执行用时")
console.log(CheckPermutation(s1, s2))
console.log(CheckPermutation1(s1, s2))
console.timeEnd("执行用时")
