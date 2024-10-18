<template>
  <q-page-container>
    <q-page class="headquarters-container" style="width: 65%; margin: 0% auto">
      <q-toolbar class="bg-grey-3 full-width">
        <q-btn flat @click="navigateTo()" class="text-bold" label="首頁" />
        <span class="separator">/</span>
        <q-btn
          flat
          @click="navigateTo('services')"
          class="text-bold"
          label="業務職掌"
        />
        <span class="separator">/</span>
        <q-btn
          flat
          @click="navigateTo('services/headquarters')"
          class="text-bold"
          label="處本部"
        />
      </q-toolbar>
      <!-- 關於本處 Title -->
      <div class="headquarters-title">
        <h4>處本部</h4>
        <p>················</p>
      </div>

      <!-- 關於本處內容 -->
      <div class="headquarters-list">
        <div
          class="headquarters-item"
          v-for="(info, index) in aboutInfo"
          :key="index"
        >
          <!-- 左邊圖片 -->
          <div class="left-image">
            <p class="item-content">{{ info.image }}</p>
          </div>

          <!-- 垂直虛線 -->
          <div class="vertical-line"></div>

          <!-- 右邊的內容，項目名稱和對應內容包在一起 -->
          <div class="right-info">
            <div class="info-item">
              <p class="item-label">電話：</p>
              <p class="item-content">{{ info.phone }}</p>
            </div>
            <div class="info-item">
              <p class="item-label">信箱：</p>
              <p class="item-content">{{ info.email }}</p>
            </div>
            <div class="info-item">
              <p class="item-label">現任職務：</p>
              <p class="item-content" v-html="info.position"></p>
            </div>
            <div class="info-item">
              <p class="item-label">學經歷：</p>
              <p class="item-content">{{ info.education }}</p>
            </div>
            <div class="info-item">
              <p class="item-label">工作項目：</p>
              <p class="item-content">{{ info.responsibility }}</p>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

// 使用 Vue Router 來進行導航
const router = useRouter();

// 定義關於本處的資料
const aboutInfo = reactive([
  {
    image: "高瑞鍾 處長",
    phone: "(07)3617141 轉 23131、23470",
    email: "jckao@nkust.edu.tw",
    position:
      "國立高雄科技大學 經營管理處 處長<br>國立高雄科技大學 教育事業暨產品推廣處 處長<br>國立高雄科技大學 海事產管所 教授",
    education: "學經歷總表",
    responsibility: "負綜理 經營管理處 業務。",
  },
  // 更多的項目...
]);

// 導航至指定路徑
const navigateTo = (route) => {
  if (route) {
    router.push(`/${route}`); // 使用絕對路徑，避免重複拼接
  } else {
    router.push("/");
  }
};
</script>

<style scoped>
.headquarters-container {
  padding: 20px;
}

.headquarters-title {
  flex: 1;
  color: #343a40;
  font-weight: bold; /* 設置字體為粗體 */
  display: flex;
  flex-direction: column; /* 垂直排列元素 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  text-align: center; /* 保證文本居中 */
}
.headquarters-title h4 {
  margin-bottom: 5px; /* 調整 h4 底部的外邊距 */
  font-weight: bolder;
}

.headquarters-title p {
  margin-top: 2px; /* 調整 p 元素的頂部外邊距 */
  font-weight: bolder;
}

.separator {
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

/* 關於本處區塊樣式 */
.headquarters-list {
  padding: 30px;
  background: linear-gradient(135deg, #f5f7fa, #ffffff);
  border-radius: 15px;
  margin: 20px auto;
  width: 80%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border: 2px solid #ddd;
}

.headquarters-item {
  display: flex; /* 使用 flexbox 排列 */
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 0;
  font-size: 18px;
  border-bottom: 1px dashed #bdc3c7;
}

.headquarters-item:last-child {
  border-bottom: none;
}
/* 左邊圖片樣式 */
.left-image {
  flex: 0 0 20%; /* 控制圖片的寬度，佔20%空間 */
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 100%;
  max-width: 150px;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 圖片陰影效果 */
}

/* 中間的垂直虛線 */
.vertical-line {
  border-left: 2px dashed #bdc3c7; /* 垂直虛線 */
  height: auto;
  margin: 0 20px;
}

/* 右邊的內容區 */
.right-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* 每個項目名稱和對應內容包在一起 */
.info-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
}

.item-label {
  flex: 0 0 150px;
  font-weight: bold;
  margin-right: 20px;
  color: #34495e;
}

.item-content {
  flex: 1;
  color: #2c3e50;
  font-size: 20px;
  line-height: 1.6;
  word-break: break-word; /* 如果文字過長，允許換行 */
}
</style>
