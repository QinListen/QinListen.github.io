import { createStore } from 'vuex'

// 可以把不同的模块拆分到不同的文件中
const store = createStore({
  state() {
    return {
      count: 0,
      message: '你好世界'
    }
  },
  getters: {
    // 获取状态的计算属性
    doubleCount: (state) => state.count * 2,
    welcomeMessage: (state) => `欢迎：${state.message}`
  },
  mutations: {
    // 修改状态的方法
    INCREMENT(state) {
      state.count++
    },
    SET_MESSAGE(state, newMessage) {
      state.message = newMessage
    }
  },
  actions: {
    // 异步操作
    async incrementAsync({ commit }) {
      // 模拟异步操作
      await new Promise(resolve => setTimeout(resolve, 1000))
      commit('INCREMENT')
    },
    updateMessage({ commit }, newMessage) {
      commit('SET_MESSAGE', newMessage)
    }
  }
})

export default store 