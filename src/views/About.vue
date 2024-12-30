<template>
  <div class="about">
    <h1>关于我们</h1>
    <div class="message-section">
      <h2>{{ welcomeMessage }}</h2>
      <input 
        v-model="newMessage" 
        @keyup.enter="updateMessage"
        placeholder="输入新消息后按回车"
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
// import { updateMessage as updateMessageApi } from '../api/about'

const store = useStore()
const newMessage = ref('')
const welcomeMessage = computed(() => store.getters.welcomeMessage)

// const updateMessage = async () => {
//   try {
//     await updateMessageApi(newMessage.value)
//     store.dispatch('updateMessage', newMessage.value)
//     newMessage.value = ''
//   } catch (error) {
//     console.error('更新消息失败：', error)
//   }
// }
</script> 