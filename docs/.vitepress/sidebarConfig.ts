// 侧边栏配置
const sidebarConfig = {
  '/': [
    {
      text: '面试宝典',
      collapsed: false, // 侧边栏是否收起
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
      text: '排序算法',
      collapsed: true, // 侧边栏是否收起
      items: [
        { text: '⭐冒泡排序', link: '/algorithm/sort/bubble' },
        { text: '选择排序', link: '/algorithm/sort/selection' },
        { text: '插入排序', link: '/algorithm/sort/insertion' },
        { text: '归并排序', link: '/algorithm/sort/merge' },
        { text: '⭐快速排序', link: '/algorithm/sort/quick' },
        { text: '希尔排序', link: '/algorithm/sort/shellsort' },
        { text: '堆排序', link: '/algorithm/sort/heap' },
        { text: '基数排序', link: '/algorithm/sort/radix' },
        { text: '排序算法总结', link: '/algorithm/sort/sort' }
      ]
    },
    {
      text: '数据结构',
      collapsed: true, // 侧边栏是否收起
      items: [
        { text: '数组', link: '/algorithm/data-structure/array' },
        { text: '树', link: '/algorithm/data-structure/tree' }
      ]
    }
  ],
  '/blog/': [
    {
      text: '博客分享',
      collapsed: true, // 侧边栏是否收起
      items: [{ text: 'Flex布局', link: '/blog/flex' }]
    }
  ],
  '/entertainment/': [
    { text: '学习路径总览', link: '/entertainment/' },
    {
      text: '基础准备',
      collapsed: true, // 侧边栏是否收起
      items: [
        { text: '提高FPS', link: '/entertainment/fps' },
        { text: '自定义练习设置', link: '/entertainment/practice-settings' }
      ]
    },
    {
      text: '武器体系',
      collapsed: true, // 侧边栏是否收起
      items: [{ text: '武器连招与应对', link: '/entertainment/weapon-combos' }]
    },
    {
      text: '核心理论',
      collapsed: true, // 侧边栏是否收起
      items: [
        { text: '博弈技巧', link: '/entertainment/game-theory' },
        { text: '蓝白博弈论', link: '/entertainment/蓝白博弈论' },
        { text: '基础身法', link: '/entertainment/movement' }
      ]
    },
    {
      text: '专项深入',
      collapsed: true, // 侧边栏是否收起
      items: [
        { text: '斩马刀学习分享', link: '/entertainment/zhanmadao' },
        { text: '远程博弈', link: '/entertainment/ranged-combat' },
        { text: '顾清寒进阶练习', link: '/entertainment/guqinghan' }
      ]
    }
  ]
}

export default sidebarConfig
