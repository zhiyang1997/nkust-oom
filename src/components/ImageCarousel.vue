<template>
  <q-carousel
    v-model="slide"
    transition-prev="scale"
    transition-next="scale"
    swipeable
    animated
    control-color="grey"
    navigation
    arrows
    infinite
    class="carousel-container"
    control-type="dots"
    autoplay
    :autoplay-interval="5000"
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
.carousel-container {
  width: 95%; /* 確保輪播容器寬度佔滿父容器 */
  margin: 0 auto;
  height: 200px; /* 設置輪播圖片的高度，根據需求可以調整 */
}

.q-carousel-slide {
  background-size: contain; /* 確保背景圖片根據容器大小縮放，保持比例 */
  background-position: center; /* 確保圖片居中顯示 */
  background-repeat: no-repeat; /* 防止圖片重複 */
  height: 100%; /* 讓圖片高度跟隨容器高度變化 */
}

/* 調整左右箭頭的大小 */
.q-carousel__arrow {
  font-size: 20px; /* 調整箭頭大小，根據需要可以更小或更大 */
}

/* 調整點之間的間距 */
.q-carousel__control-container {
  margin: 5px 0; /* 控制點的上下間距 */
}
</style>
