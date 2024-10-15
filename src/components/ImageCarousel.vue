<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    controlColor="grey"
    height="250px"
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide
      v-for="(img, index) in images"
      :key="index"
      :name="index"
      :img-src="img.src"
    >
      <!-- 你可以在這裡添加圖片的描述或文字 -->
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(0); // 控制當前顯示的輪播圖片索引

// 定義圖片列表
const images = [
  { src: "src/img/carousel1.jpg" },
  { src: "src/img/carousel2.jpg" },
  { src: "src/img/carousel3.jpg" },
];
</script>

<style scoped>
.q-carousel_arrow {
  font-size: 16px !important;
  color: red !important; /* 更改箭頭顏色 */
  background-color: rgba(0, 0, 0, 0.5) !important; /* 更改箭頭背景 */
  border-radius: 50%; /* 讓箭頭背景變成圓形 */
}
</style>
