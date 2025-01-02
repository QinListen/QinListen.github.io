<template>
  <v-app>
    <v-main>
      <router-view v-slot="{ Component }">
        <v-fade-transition mode="out-in">
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
/* 移除默认的内边距 */
.v-application__wrap {
  min-height: 100vh;
  padding: 0 !important;
}

/* 确保内容可以在导航栏下方正常显示 */
.v-main {
  padding-top: 0 !important;
}
</style> 