/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  for(let s of strs){
    // split 将字符串拆分为字符数组
    // sort 排序
    // join 将字符数组重新拼接为字符串
    let key = s.split('').sort().join('')
    if(map.has(key)){
      map.get(key).push(s)
    }else{
      map.set(key, [s])
    }
  }
  return [...map.values()]
};
// @lc code=end
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
