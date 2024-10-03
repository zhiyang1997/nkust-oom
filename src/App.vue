<template>
  <MainLayout>
    <!-- 將輪播圖片作為內容插入 -->
    <ImageCarousel />
  </MainLayout>

  <router-view />
</template>

<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import ImageCarousel from "./components/ImageCarousel.vue"; // 引入輪播圖片元件
</script>

<style scoped>
/* 根據需要的樣式 */
</style>
