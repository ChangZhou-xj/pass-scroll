# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

个人学习笔记/面试题库站点（"通关秘籍"，站点标题 June_Solstice），基于 VitePress 构建，内容全部为中文（zh-CN）。
注意：根目录的 `index.html` 和 `vite.config.js` 是初始 Vue 模板的残留（`src/` 不存在），**真正的产物是 `docs/` 下的 VitePress 站点**，不要以普通 Vite 应用的方式去理解或修改它。

## 常用命令

```bash
pnpm install   # 安装依赖（CI 使用 --frozen-lockfile，lockfile 不可随意改动）
pnpm serve     # VitePress 开发服务器（--host 0.0.0.0）
pnpm build     # 构建到 docs/.vitepress/dist
pnpm preview   # 预览构建产物
```

- 没有配置测试框架（无 test runner），不要臆造测试命令。
- ESLint 只通过 husky 的 pre-commit 钩子（lint-staged → `eslint --fix`）运行，作用于 js/ts/vue 文件；没有独立的 lint script。

## 提交规范（多文件协作流程，务必理解）

提交走 commitizen + cz-customizable + commitlint + husky 四件套：

- 用 `npx cz` 交互式提交，类型限定为：feat / fix / docs / style / refactor / chore / perf / test / revert / build（见 `.cz-config.js` 与 `commitlint.config.js`）。
- **scope（提交编号）必填**（`allowEmptyScopes: false`），历史格式如 `refactor(20250318001): 描述`、`docs(custom): 描述`。
- body 用 `|` 分隔多条；footer 填问题单号，cz 会自动加 `【` 前缀。
- `.husky/commit-msg` 里有一段 sed 脚本：自动补全未闭合的中文 `【】` 并去除括号内多余空格——**这是有意为之**，写提交信息时不要被它"修改了我的消息"困扰，也不要去删它。

## 架构要点

- `docs/` 是 VitePress 根目录。站点配置拆分在 `docs/.vitepress/` 下：`config.mts` 导入 `navConfig.ts`（顶部导航）和 `sidebarConfig.ts`（侧边栏）。**新增页面时必须同时手动更新 nav 和 sidebar 两份配置**，二者没有自动同步机制。
- `config.mts` 中 `base: '/pass-scroll/'` 必须与仓库名一致（gh-pages 项目页子路径），**不能用 `'./'`**——相对 base 会让路由生成 `./xxx` 相对链接，跨目录跳转时按当前路径解析，导致 404（面试 → 排序算法 等跨模块导航同样会中招）。
- 部署：`.github/workflows/deploy.yml` 在 push 到 master 时触发（node 16 + pnpm），构建后由 `peaceiris/actions-gh-pages` 把 `docs/.vitepress/dist` 发布到 gh-pages 分支，使用 `ACCESS_TOKEN` secret。
- `docs/bxcx/` 下的页面**未出现在 nav/sidebar 中**——是有意隐藏的私密笔记，只能通过直链访问；除非用户要求，不要"修复"它或把它加进导航。
- `js-agorithm/` 是可独立运行的 JS 算法练习代码（sort、data-structure、hash、two-pointers、byhand 等），与文档主题一一对应，但位于 `docs/` 之外、不参与 VitePress 构建。验证方式：`node js-agorithm/<目录>/<文件>.js`。
- `docs/.vitepress/theme/`（index.ts + style.css）继承 DefaultTheme，仅做轻微扩展。

## 文档编写约定

- LeetCode 题解命名与结构：参照 `docs/interview/hash/1.两数之和_solution.md`，文件名为 `<编号>.<题目名>_solution.md`，内容结构为：题目描述 → 解题思路 → 代码实现 → 复杂度分析。
- 题解目录按专题分（hash、two-pointers 等），对应练习代码放 `js-agorithm/` 同名专题下。
- Markdown 容器标签已本地化（tip=提示、warning=警告、danger=危险、details=答案）；`details` 容器在题解中常用于折叠答案。
