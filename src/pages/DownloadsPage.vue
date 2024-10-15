<template>
  <q-page-container>
    <q-page class="news-container" style="width: 65%; margin: 0% auto">
      <q-toolbar class="bg-grey-3 full-width">
        <q-btn flat @click="navigateTo()" class="text-bold" label="首頁" />
        <span class="separator">/</span>
        <q-btn
          flat
          @click="navigateTo('downloads')"
          class="text-bold"
          label="表單下載"
        />
      </q-toolbar>

      <div class="news-title">
        <h4>表單下載</h4>
        <p>················</p>
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup>
import { useRouter } from "vue-router";

// 使用 Vue Router 來進行導航
const router = useRouter();

// 導航至指定路徑
const navigateTo = (route) => {
  console.log(123);

  if (route) {
    router.push(route);
  } else {
    router.push("/");
  }
};
</script>

<style scoped>
.news-container {
  padding: 20px;
}

.news-title {
  flex: 1;
  color: #343a40;
  font-weight: bold; /* 設置字體為粗體 */
  display: flex;
  flex-direction: column; /* 垂直排列元素 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  text-align: center; /* 保證文本居中 */
}
.news-title h4 {
  margin-bottom: 5px; /* 調整 h4 底部的外邊距 */
  font-weight: bolder;
}

.news-title p {
  margin-top: 2px; /* 調整 p 元素的頂部外邊距 */
  font-weight: bolder;
}

.separator {
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center; /* 確保 / 符號和按鈕對齊 */
}
</style>
