/**
 * * 题目名称：数组的相对排序
 * * 题目地址：https://leetcode-cn.com/problems/relative-sort-array
给你两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

示例：

输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]

 */

// * 思路一：数组2遍历

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let res = []
  for (let i = 0; i < arr2.length; i++) {
    const cur = arr2[i]
    let index = arr1.indexOf(cur)
    while (index !== -1) {
      res.push(arr1.splice(index, 1)[0])
      index = arr1.indexOf(cur)
    }
  }
  res = res.concat(arr1.sort((a, b) => a - b))
  return res
}

// * 思路二：数组1遍历

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray1 = function (arr1, arr2) {
  let curArr = []
  let obj2 = {}
  for (let v of arr2) {
    obj2[v] = 1
  }
  for (let i = 0; i < arr1.length; i++) {
    const cur = arr1[i]
    let index = arr2.indexOf(cur)
    if (index === -1) {
      curArr.push(cur)
    } else {
      if (obj2[cur]) {
        obj2[cur] = 0
      } else {
        arr2.splice(index, 0, cur)
      }
    }
  }
  return arr2.concat(curArr.sort((a, b) => a - b))
}

// 测试用例
let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  arr2 = [2, 1, 4, 3, 9, 6]

console.time("执行用时")
// console.log(relativeSortArray(arr1, arr2))
console.log(relativeSortArray1(arr1, arr2))
console.timeEnd("执行用时")
