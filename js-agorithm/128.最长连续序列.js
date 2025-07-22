/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 *
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Medium (49.91%)
 * Likes:    2559
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.2M
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 *
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,0,1,2]
 * 输出：3
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 1. 创建一个集合，去重功能
  let numSet = new Set(nums);
  let max = 0;

  for (let num of numSet) {
    // 只有当 num 是序列的起点时才开始扩展
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // 扩展序列
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      // 更新最大长度
      max = Math.max(max, currentLength);
    }
  }

  return max;
};
// @lc code=end

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
