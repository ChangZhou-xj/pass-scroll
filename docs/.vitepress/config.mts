import { defineConfig } from 'vitepress'
// 导入导航配置和侧边栏配置
import navConfig from './navConfig'
import sidebarConfig from './sidebarConfig'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  // 必须与 gh-pages 项目页路径一致（仓库名），不能用相对路径 './'
  // 相对 base 会让路由生成 ./xxx 相对链接，跨目录跳转时浏览器按当前路径解析导致 404
  base: '/pass-scroll/',
  title: 'June_Solstice',
  description: '个人学习笔记',
  lastUpdated: true,
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '答案'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.awebp',
    outlineTitle: '大纲',
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    outline: [1, 2],
    nav: navConfig,
    search: {
      provider: 'local'
    },
    sidebar: sidebarConfig,
    lastUpdated: {
      text: '最近更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    // footer: {
    //     message: 'Released under the MIT License.',
    //     copyright: 'Copyright © 2022-present zxjdzxb'
    // },
    socialLinks: [{ icon: 'github', link: 'https://github.com/zxjdzxb' }]
  }
})
