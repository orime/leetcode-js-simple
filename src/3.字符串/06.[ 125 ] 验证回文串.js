/**
 * * 题目名称：验证回文串
 * * 题目地址：https://leetcode-cn.com/problems/valid-palindrome
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

 */

// * 思路：先转成小写字符，再双指针对撞验证回文

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase()
  let i = 0,
      j = str.length - 1,
      res = true
  while(i <= j){
    if(str[i++] !== str[j--]){
      res = false
      break
    }
  }
  return res
};

// 测试用例
let test = "A man, a plan, a canal: Panama"

console.time('执行用时');
console.log(isPalindrome(test));
console.timeEnd('执行用时');