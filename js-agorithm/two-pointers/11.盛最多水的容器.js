/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 *
 * https://leetcode.cn/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (61.42%)
 * Likes:    5549
 * Dislikes: 0
 * Total Accepted:    1.8M
 * Total Submissions: 2.9M
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 *
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 返回容器可以储存的最大水量。
 *
 * 说明：你不能倾斜容器。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 *
 * 示例 2：
 *
 *
 * 输入：height = [1,1]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 *
 *
 */

// @lc code=start
/**
 * 计算能够装下最多水的两个柱子的面积
 * @param {number[]} height - 一个数组代表每个柱子的高度
 * @return {number} - 返回最大面积
 */
var maxArea = function(height) {
  // 初始化左指针、右指针和最大面积
  let left = 0, right = height.length - 1, max = 0;
  // 当左指针小于右指针时，执行循环
  while (left < right) {
    // 计算当前两个指针所代表的两个柱子之间的面积
    let area = Math.min(height[left], height[right]) * (right - left);
    // 更新最大面积
    max = Math.max(max, area);
    // 移动高度较小的指针
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  // 返回最大面积
  return max;
};
// @lc code=end

console.log(maxArea([1,8,6,2,5,4,8,3,7]));