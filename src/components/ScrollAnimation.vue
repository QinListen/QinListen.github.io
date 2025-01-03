<template>
  <div class="scroll-animation" ref="animationElement">
    <transition :name="animationClass" mode="out-in">
      <div v-if="isVisible" class="animated-content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  enterAnimation: {
    type: String,
    default: 'slide-in-left' // 默认进入动画
  },
  exitAnimation: {
    type: String,
    default: 'fade' // 默认退出动画
  }
});

let isVisible = ref(true);
const animationElement = ref(null);
const observer = ref(null);
const animationClass = ref(props.enterAnimation);

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        animationClass.value = props.enterAnimation; // 设置进入动画
      } else {
        animationClass.value = props.exitAnimation; // 设置退出动画
        setTimeout(() => {
          isVisible.value = false; // 延迟隐藏
        }, 500); // 与退出动画时间一致
      }
    });
  });
  observer.value.observe(animationElement.value);
});

onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<style scoped>
.animated-content {
  opacity: 1;
}

/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* 左右移动动画 */
.slide-in-left {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-in-left-active {
  transform: translateX(0);
  opacity: 1;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* 从右到左的动画 */
.slide-in-right {
  transform: translateX(100%);
  opacity: 0;
}
.slide-in-right-active {
  transform: translateX(0);
  opacity: 1;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* 从下到上的动画 */
.slide-in-up {
  transform: translateY(100%);
  opacity: 0;
}
.slide-in-up-active {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.5s ease, opacity 0.5s ease;
}
</style>
