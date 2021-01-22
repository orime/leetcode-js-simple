/**
 * * 题目名称：岛屿的周长
 * * 题目地址：https://leetcode-cn.com/problems/island-perimeter
给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

示例 1：

输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
输出：16
解释：它的周长是上面图片中的 16 个黄色的边
示例 2：

输入：grid = [[1]]
输出：4
示例 3：

输入：grid = [[1,0]]
输出：4
 

提示：

row == grid.length
col == grid[i].length
1 <= row, col <= 100
grid[i][j] 为 0 或 1


 */

// * 思路：如果是1，就是一块陆地，一块陆地贡献4个单位周长，如果有一个边重合，就减2个单位周长

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let land = 0
  let border = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cur = grid[i][j]
      if (cur === 1) {
        land++
        // * 上方重合
        if (grid[i - 1] && grid[i - 1][j] === 1) {
          border++
        }
        // * 左方重合
        if (grid[i][j - 1] && grid[i][j - 1] === 1) {
          border++
        }
      }

    }
  }
  return land * 4 - border * 2
};

// 测试用例
let grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]

console.time('执行用时');
console.log(islandPerimeter(grid));
console.timeEnd('执行用时');