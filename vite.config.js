import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/QinListen.github.io/', // 根路径
  plugins: [vue()],
  server: {
    port: 3000, // 默认开发服务器端口
    open: true, // 启动时自动打开浏览器
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
    },
  },
}) 