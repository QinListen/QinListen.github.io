<template>
  <div>
    <Navbar />
    <v-img
      aspect-ratio="16/9"
      cover
      src="https://w.wallhaven.cc/full/yx/wallhaven-yxdzzl.jpg"
      height="600"
    ></v-img>

    <div class="ma-4">
      <v-row>
        <v-col
          v-for="(variant, i) in list"
          :key="i"
          cols="12"
          sm="6"
          md="6"
          lg="3"
          @click="handleClick(variant)"
        >
          <v-card>
            <v-img
              class="align-end text-white"
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
              <v-card-title>{{ variant.name }}</v-card-title>
            </v-img>

            <v-card-text>
              <div>不知道什么标题</div>

              <div>不知道什么副标题</div>
            </v-card-text>

            <!-- <v-card-actions>
              <v-btn color="orange" text="Share"></v-btn>

              <v-btn color="orange" text="Explore"></v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { incrementCounter } from "../api/index";
import { useDisplay } from "vuetify";
import { getCounter } from "../api/index";
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useStore();
const list = ref([
  {
    id: 1,
    name: "大屏滚动动画",
    url: "https://w.wallhaven.cc/full/yx/wallhaven-yxdzzl.jpg",
    description: "A beautiful picture by Wallhaven",
    views: 1000,
    favorites: 500,
    comments: 200,
    router: "/case/big-animation",
  },
  {
    id: 2,
    name: "canvas实现",
    url: "https://images.unsplash.com/photo-1560067167-5d75871771b9",
    description: "A beautiful picture by Unsplash",
    views: 2000,
    favorites: 700,
    comments: 1500,
    router: "/case/canvas-demo",
  },
  {
    id: 3,
    name: "Pexels",
    url: "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg",
    description: "A beautiful picture by Pexels",
    views: 3000,
    favorites: 900,
    comments: 300,
    router: "/shengdan",
  },
]);
onMounted(() => {
  // updateMessage();
});

const updateMessage = async () => {
  try {
    let res = await getCounter();
    console.log("获取列表成功", res);
  } catch (error) {
    console.error("获取列表失败", error);
  }
};
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

const handleClick = (item) => {
  router.push(item.router)
}
</script> 