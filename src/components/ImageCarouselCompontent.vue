<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    :autoplay-interval="autoplayInterval"
    arrows
    control-color="grey"
    height="250px"
    transition-prev="slide-right"
    transition-next="slide-left"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
  >
    <q-carousel-slide v-for="(img, index) in images" :key="index" :name="index">
      <!-- 你可以在這裡添加圖片的描述或文字 -->
      <img :src="img.src" class="custom-image" />
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(0); // 控制當前顯示的輪播圖片索引

const autoplayInterval = ref(3000); // 自動播放間隔，單位為毫秒
const autoplay = ref(true); // 是否啟動自動播放

// 定義圖片列表
const images = [
  { src: "src/img/carousel1.jpg" },
  { src: "src/img/carousel2.jpg" },
  { src: "src/img/carousel3.jpg" },
  { src: "src/img/carousel3.jpg" },
];
</script>

<style scoped>
.custom-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 保持圖片完整不裁切 */
}
</style>
