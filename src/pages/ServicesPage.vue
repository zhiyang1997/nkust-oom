<template>
  <q-page-container>
    <q-page class="services-container" style="width: 65%; margin: 0% auto">
      <q-toolbar class="bg-grey-3 full-width">
        <q-btn flat @click="navigateTo()" class="text-bold" label="首頁" />
        <span class="separator">/</span>
        <q-btn
          flat
          @click="navigateTo('services')"
          class="text-bold"
          label="業務職掌"
        />
      </q-toolbar>

      <!--單位介紹 Title-->
      <div class="services-title">
        <h4>業務職掌</h4>
        <p>················</p>
      </div>

      <!-- 兩個方塊區域 -->
      <div class="services-list">
        <!-- 左邊方塊 - 處本部 -->
        <div class="services-item">
          <q-icon name="info" color="grey" style="margin-right: 20px" />
          <a href="/services/overview">處本部</a>
        </div>

        <!-- 中間方塊 - 規劃評估組 -->
        <div class="services-item">
          <q-icon name="info" color="grey" style="margin-right: 20px" />
          <a href="/introduction/structure">規劃評估組</a>
        </div>

        <!-- 右邊方塊 - 開發活化組 -->
        <div class="services-item">
          <q-icon name="info" color="grey" style="margin-right: 20px" />
          <a href="/introduction/structure">開發活化組</a>
        </div>
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
  if (route) {
    router.push(route);
  } else {
    router.push("/");
  }
};
</script>

<style scoped>
.services-container {
  padding: 20px;
}

.services-title {
  flex: 1;
  color: #343a40;
  font-weight: bold; /* 設置字體為粗體 */
  display: flex;
  flex-direction: column; /* 垂直排列元素 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  text-align: center; /* 保證文本居中 */
}

.services-title h4 {
  margin-bottom: 5px; /* 調整 h4 底部的外邊距 */
  font-weight: bolder;
}

.services-title p {
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

/* 連結區塊樣式 - 改為兩個方塊 */
.services-list {
  display: flex;
  justify-content: space-between; /* 兩個方塊左右對齊 */
  margin: 20px auto;
  width: 100%; /* 占滿整個容器 */
}

.services-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%; /* 每個方塊佔 45% 寬度，留點空間 */
  padding: 20px;
  background-color: white;
  margin: 0 10px; /* 每個方塊的左右間距 */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加陰影 */
  transition: all 0.3s ease;
  font-size: 20px;
  text-align: center;
}

/* 懸停效果 */
.services-item:hover {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* 懸停時增加陰影效果 */
  background-color: #f0f0f0; /* 懸停時背景變淡 */
}

.services-item a {
  color: #003366;
  text-decoration: none; /* 去除下劃線 */
  font-weight: bold;
}

.services-item a:hover {
  color: #007bff; /* 懸停時變為藍色 */
}
</style>
