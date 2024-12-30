import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: '/QinListen.github.io/',
    plugins: [vue()],
    server: {
      port: 8081,
      host: true,
      strictPort: true,
      open: true,
      proxy: {
        // 从环境变量读取代理配置
        [env.VITE_API_URL]: {
          target: env.VITE_API_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_API_URL}`), '')
        },
        [env.VITE_QIN_API_URL]: {
          target: env.VITE_QIN_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_QIN_API_URL}`), '')
        },
        [env.VITE_OTHER_API_URL]: {
          target: env.VITE_OTHER_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_OTHER_API_URL}`), '')
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}) 