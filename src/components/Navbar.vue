<template>
  <v-app-bar app flat absolute color="transparent" elevation="0">
    <template v-slot:prepend>
      <v-app-bar-nav-icon v-if="xs"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Listen</v-app-bar-title>

    <v-spacer></v-spacer>

    <template v-if="!xs">
      <v-btn
        v-for="(item, i) in menuItems"
        :key="i"
        :to="item.to"
        text
        class="text-none"
      >
        {{ item.title }}
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { computed, ref } from "vue";
import { useDisplay } from "vuetify";
const menuItems = [
  { title: "首页", to: "/" },
  { title: "关于", to: "/about" },
];

const { xs, mdAndUp } = useDisplay();
console.log(xs);
</script>

<style scoped>
.v-app-bar {
  background-color: transparent !important;
}

/* 导航图标颜色 */
:deep(.v-app-bar-nav-icon .v-icon) {
  color: white !important;
}

/* 标题颜色 */
.v-app-bar-title {
  color: white !important;
}

/* 导航按钮悬停效果 */
.v-btn {
  color: white !important;
  transition: all 0.3s ease;
}

.v-btn:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* 当前激活的导航按钮 */
.v-btn.router-link-active {
  color: rgb(var(--v-theme-primary)) !important;
}
</style>