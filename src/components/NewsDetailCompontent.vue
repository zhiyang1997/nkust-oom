<template>
  <q-page-container>
    <q-page class="news-detail-container" style="width: 65%; margin: 0% auto">
      <div class="news-detail-title">
        <h4>{{ newsItem.title }}</h4>
        <p>{{ newsItem.date }}</p>
      </div>
      <div class="news-detail-content">
        <img :src="getImageUrl(newsItem.photo)" alt="News Image" />
        <p>{{ newsItem.content }}</p>
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useRoute } from "vue-router";

// 獲取路由參數
const route = useRoute();

// 模擬的新聞數據
const news = reactive([
  // 添加多筆新聞資料以示範
  {
    id: 1,
    photo: "carousel1.jpg",
    title:
      "經營管理處自111年8月1日成立（任務編組），112年2月1日正式納入本校組織規程。",
    date: "2023-03-06",
    content: "這是經營管理處的詳細新聞內容。",
  },
  {
    id: 2,
    photo: "carousel2.jpg",
    title:
      "【轉知】財政部敬邀貴機關及專家學者踴躍投稿「促進民間參與公共建設電子報」，詳如原函說明，轉請查照。",
    date: "2024-10-11",
    content: "這是經營管理處的詳細新聞內容。",
  },
  {
    id: 3,
    photo: "carousel3.jpg",
    title: "【轉知】財政部檢送「中華民國112年度促參年報」，轉請查照。",
    date: "2023-08-14",
    content: "這是經營管理處的詳細新聞內容。",
  },
  // 添加更多的新聞資料...
  {
    id: 4,
    photo: "carousel1.jpg",
    title:
      "【轉知】檢送113年版「民間自備私有土地興建、擁有及營運（B (R)OO）案招商文件（含甄審須知及投資契約）範本」1 份，請查照並轉知所屬。",
    date: "2024-08-08",
    content: "這是經營管理處的詳細新聞內容。",
  },
  {
    id: 5,
    photo: "carousel2.jpg",
    title:
      "【轉知】財政部自即日起至113年9月30日止，受理各機關申請補助 114年度促進民間參與公共建設案件（下稱促參案件）前 置作業費用，請查照。",
    date: "2024-08-08",
    content: "這是經營管理處的詳細新聞內容。",
  },
  {
    id: 6,
    photo: "carousel3.jpg",
    title: "新聞標題 6",
    date: "2024-11-01",
    content: "這是經營管理處的詳細新聞內容。",
  },
  {
    id: 7,
    photo: "carousel1.jpg",
    title: "新聞標題 8",
    date: "2024-11-01",
    content: "這是經營管理處的詳細新聞內容。",
  },
  {
    id: 8,
    photo: "carousel1.jpg",
    title: "新聞標題 9",
    date: "2024-11-01",
    content: "這是經營管理處的詳細新聞內容。",
  },
  {
    id: 9,
    photo: "carousel1.jpg",
    title: "新聞標題 10",
    date: "2024-11-01",
    content: "這是經營管理處的詳細新聞內容。",
  },
  {
    id: 10,
    photo: "carousel1.jpg",
    title: "新聞標題 11",
    date: "2024-11-01",
    content: "這是經營管理處的詳細新聞內容。",
  },
  {
    id: 11,
    photo: "carousel1.jpg",
    title: "新聞標題 12",
    date: "2024-11-01",
    content: "這是經營管理處的詳細新聞內容。",
  },
  {
    id: 12,
    photo: "carousel1.jpg",
    title: "新聞標題 13",
    date: "2024-11-01",
    content: "這是經營管理處的詳細新聞內容。",
  },
  {
    id: 13,
    photo: "carousel1.jpg",
    title: "新聞標題 14",
    date: "2024-11-01",
    content: "這是經營管理處的詳細新聞內容。",
  },
]);

// 根據 id 獲取相應的新聞
const newsItem = computed(() => {
  const id = route.params.id;
  return news[id];
});

// 定義 getImageUrl 方法
const getImageUrl = (photo) => {
  return new URL(`../img/${photo}`, import.meta.url).href;
};
</script>

<style scoped>
.news-detail-container {
  padding: 20px;
}

.news-detail-title h4 {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
}

.news-detail-content {
  margin-top: 20px;
}

.news-detail-content img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.news-detail-content p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}
</style>
