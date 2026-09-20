// 导航配置
const navConfig = [
  { text: '主页', link: '/' },
  {
    text: '面试宝典',
    items: [
      { text: 'HTML+CSS', link: '/interview/html_css' },
      { text: 'JavaScript', link: '/interview/javascript' },
      { text: 'Vue', link: '/interview/vue' },
      { text: 'React', link: '/interview/react' },
      { text: 'Http', link: '/interview/http' },
      // { text: '性能优化', link: '/interview/performance' },
      { text: '工程化', link: '/interview/engineering' },
      { text: '手写', link: '/interview/byhand' },
      { text: '每日一练', link: '/interview/practice_daily' }
    ]
  },
  {
    text: '博客分享',
    collapsed: true, // 侧边栏是否收起
    items: [{ text: 'Flex布局', link: '/blog/flex' }]
  },
  {
    text: '排序算法',
    items: [
      { text: '冒泡排序', link: '/algorithm/sort/bubble' },
      { text: '选择排序', link: '/algorithm/sort/selection' },
      { text: '插入排序', link: '/algorithm/sort/insertion' },
      { text: '归并排序', link: '/algorithm/sort/merge' },
      { text: '快速排序', link: '/algorithm/sort/quick' },
      { text: '希尔排序', link: '/algorithm/sort/shellsort' },
      { text: '堆排序', link: '/algorithm/sort/heap' },
      { text: '基数排序', link: '/algorithm/sort/radix' },
      { text: '排序算法总结', link: '/algorithm/sort/sort' }
    ]
  },
  {
    text: '娱乐',
    items: [
      { text: '学习路径总览', link: '/entertainment/' },
      { text: '提高FPS', link: '/entertainment/fps' },
      { text: '自定义练习设置', link: '/entertainment/practice-settings' },
      { text: '武器连招与应对', link: '/entertainment/weapon-combos' },
      { text: '博弈技巧', link: '/entertainment/game-theory' },
      { text: '基础身法', link: '/entertainment/movement' },
      { text: '斩马刀学习分享', link: '/entertainment/zhanmadao' },
      { text: '远程博弈', link: '/entertainment/ranged-combat' },
      { text: '顾清寒进阶练习', link: '/entertainment/guqinghan' }
    ]
  }
]

export default navConfig
