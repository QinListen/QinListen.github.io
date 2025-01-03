import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 根路径
  plugins: [vue()],
  server: {
    port: 3000, // 默认开发服务器端口
    open: true, // 启动时自动打开浏览器
  },
  resolve: {
    alias: {
      '@': '/src', // 设置路径别名
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern", "legacy"
      },
    },
  },
}) 