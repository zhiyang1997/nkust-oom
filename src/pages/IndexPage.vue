<template>
  <!-- 插槽：在 bar 下面的區域插入內容 -->
  <div style="width: 65%; margin: 0 auto; margin-top: 2%">
    <!-- <slot></slot> -->
    <!-- 將輪播圖片作為內容插入 -->
    <ImageCarousel />
  </div>

  <NewsCompontent />
  <MapCompontent />
</template>

<script setup>
import ImageCarousel from "../components/ImageCarouselCompontent.vue"; // 引入輪播圖片元件
import NewsCompontent from "src/components/NewsCompontent.vue"; //最新消息元件
import MapCompontent from "src/components/MapCompontent.vue";
</script>

<style scoped></style>
