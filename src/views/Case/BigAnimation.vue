<template>
  <div>
    <div class="section" style="background: orange">
      <div
        class="animate__animated home_item_title"
        style="padding: 20px; background: lightblue"
      >
        单个动画
      </div>
    </div>
    <div class="section" style="background: red">
      <div class="mask d-flex">
        <div class="mask_item animate__animated ma-2" v-for="item in 5" :key="item">测试</div>
      </div>
    </div>
    <div class="section" style="background: blue">Scroll down</div>
    <div class="section" style="background: #42a5f5">Scroll down</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import observer from "@/utils/observer";

onMounted(() => {
  observer(".home_item_title", (ele) => {
    ele.classList.add("animate__bounce");
  });
  observer(".mask_item", (ele, index) => {
    ele.classList.add("animate__fadeInDown");
    ele.style.animationDelay = index * 300 + "ms";
  });

  window.addEventListener("wheel", handleScroll, { passive: false });
});

const handleScroll = (event) => {
  event.preventDefault(); // 防止默认滚动行为

  const scrollAmount = window.innerHeight; // 每次滚动的高度
  const direction = event.deltaY > 0 ? 1 : -1; // 判断滚动方向

  window.scrollBy({
    top: scrollAmount * direction,
    behavior: "smooth", // 平滑滚动
  });
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  height: 100vh; /* 每个屏幕的高度 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: lightblue;
  border-bottom: 1px solid #ccc;
}

</style>
