<template>
  <v-card>
    <v-img
      aspect-ratio="16/9"
      cover
      src="https://w.wallhaven.cc/full/yx/wallhaven-yxdzzl.jpg"
    ></v-img>
  </v-card>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { incrementCounter } from "../api/index";
import { useDisplay } from "vuetify";

const store = useStore();

// Destructure only the keys you want to use

// const count = computed(() => store.state.count)
// const doubleCount = computed(() => store.getters.doubleCount)

// const increment = async () => {
//   try {
//     await incrementCounter()
//     store.commit('INCREMENT')
//   } catch (error) {
//     console.error('增加计数失败：', error)
//   }
// }

// const incrementAsync = async () => {
//   try {
//     await store.dispatch('incrementAsync')
//   } catch (error) {
//     console.error('异步增加计数失败：', error)
//   }
// }
</script> 