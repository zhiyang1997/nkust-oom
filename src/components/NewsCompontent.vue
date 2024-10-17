<template>
  <q-page-container>
    <q-page class="news-container" style="width: 65%; margin: 0% auto">
      <div class="news-title">
        <h4>最新消息</h4>
        <p>················</p>
      </div>
      <!-- 最新消息區域 -->
      <div class="news-list">
        <div
          class="news-item"
          v-for="(item, index) in paginatedNews"
          :key="index"
        >
          <div class="news-photo">
            <img
              :src="getImageUrl(item.photo)"
              alt="News Image"
              class="news-image"
            />
          </div>
          <div class="news-index">{{ item.title }}</div>
          <div class="news-date">{{ item.date }}</div>
        </div>
      </div>
      <!-- 分頁元件 -->
      <div class="pagination-container">
        <q-pagination
          v-model="currentPage"
          :max="totalPages"
          max-pages="5"
          boundary-numbers
          class="q-mt-lg"
          color="grey"
        />
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup>
import { reactive, computed, ref } from "vue";
import { QPagination } from "quasar";

// 定義每頁顯示的最大數量
const itemsPerPage = 10;

// 分頁的當前頁面
const currentPage = ref(1);

// 定義 news 資料
const news = reactive([
  // 添加多筆新聞資料以示範
  {
    photo: "carousel1.jpg",
    title:
      "經營管理處自111年8月1日成立（任務編組），112年2月1日正式納入本校組織規程。",
    date: "2023-03-06",
  },
  {
    photo: "carousel2.jpg",
    title:
      "【轉知】財政部敬邀貴機關及專家學者踴躍投稿「促進民間參與公共建設電子報」，詳如原函說明，轉請查照。",
    date: "2024-10-11",
  },
  {
    photo: "carousel3.jpg",
    title: "【轉知】財政部檢送「中華民國112年度促參年報」，轉請查照。",
    date: "2023-08-14",
  },
  // 添加更多的新聞資料...
  {
    photo: "carousel1.jpg",
    title:
      "【轉知】檢送113年版「民間自備私有土地興建、擁有及營運（B (R)OO）案招商文件（含甄審須知及投資契約）範本」1 份，請查照並轉知所屬。",
    date: "2024-08-08",
  },
  {
    photo: "carousel2.jpg",
    title:
      "【轉知】財政部自即日起至113年9月30日止，受理各機關申請補助 114年度促進民間參與公共建設案件（下稱促參案件）前 置作業費用，請查照。",
    date: "2024-08-08",
  },
  { photo: "carousel3.jpg", title: "新聞標題 6", date: "2024-11-01" },
  { photo: "carousel1.jpg", title: "新聞標題 7", date: "2024-11-01" },
  { photo: "carousel2.jpg", title: "新聞標題 8", date: "2024-11-01" },
  { photo: "carousel3.jpg", title: "新聞標題 9", date: "2024-11-01" },
  { photo: "carousel1.jpg", title: "新聞標題 10", date: "2024-11-01" },
  { photo: "carousel2.jpg", title: "新聞標題 11", date: "2024-11-01" },
  { photo: "carousel3.jpg", title: "新聞標題 12", date: "2024-11-01" },
]);

// 分頁計算總頁數
const totalPages = computed(() => Math.ceil(news.length / itemsPerPage));

// 根據當前頁面計算要顯示的新聞資料
const paginatedNews = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return news.slice(startIndex, startIndex + itemsPerPage);
});

// 定義 getImageUrl 方法
const getImageUrl = (photo) => {
  return new URL(`../img/${photo}`, import.meta.url).href;
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

.news-list {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 每個 news-item 之間的間距 */
}

.news-item {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加陰影 */
  border: 2px solid #ddd; /* 每個 news-item 的邊框 */
}

.news-photo {
  flex: 0 0 20%;
  padding-right: 20px;
}

.news-image {
  max-width: 200px; /* 調整圖片寬度 */
  height: auto; /* 保持圖片比例 */
  border-radius: 10px; /* 圓角 */
  transition: transform 0.3s ease; /* 添加過渡效果 */
}

.news-image:hover {
  transform: scale(5); /* 當滑鼠移上去時圖片放大1.1倍 */
}

.news-index {
  flex: 1;
  color: #343a40;
  font-size: 16px; /* 增加字體大小 */
  font-weight: bold; /* 設置字體為粗體 */
  display: flex;
  flex-direction: column; /* 垂直排列元素 */
  justify-content: center; /* 垂直居中 */
  text-align: left; /* 保證文本左對齊 */
}

.news-date {
  margin-left: 20px;
  color: #888;
  font-size: 14px;
}

.news-title h4 {
  margin-bottom: 5px; /* 調整 h4 底部的外邊距 */
  font-weight: bolder;
}

.news-title p {
  margin-top: 2px; /* 調整 p 元素的頂部外邊距 */
  font-weight: bolder;
}

/* 分頁容器樣式，讓分頁元件居中 */
.pagination-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  margin-top: 20px; /* 與新聞列表保持一些間距 */
}
</style>
