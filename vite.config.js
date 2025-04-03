import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

const __dirname = path.resolve(path.dirname(''))

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 路径别名
    },
    extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  server: {
    host: true,  // ✅ 推荐写法，等效于 '0.0.0.0'
    port: 5173,  // ✅ 指定端口
    strictPort: true, // ✅ 避免端口被占用时自动切换
    open: false,  // ❌ 禁止自动打开浏览器（可选）
    cors: true  // ✅ 允许跨域访问（可选）
  }
})
