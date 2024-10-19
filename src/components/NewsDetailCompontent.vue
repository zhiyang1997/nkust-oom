<template>
  <q-page-container>
    <q-page class="news-detail-container" style="width: 65%; margin: 0% auto">
      <q-toolbar class="bg-grey-3 full-width">
        <q-btn flat @click="navigateTo()" class="text-bold" label="首頁" />
        <span class="separator">/</span>
        <q-btn
          flat
          @click="navigateTo('news')"
          class="text-bold"
          label="最新消息"
        />
      </q-toolbar>

      <div class="news-detail-title">
        <h4>{{ newsItem.title }}</h4>
        <p>{{ newsItem.date }}</p>
      </div>
      <div class="news-detail-content">
        <img :src="getImageUrl(newsItem.photo)" alt="News Image" />
        <p v-html="newsItem.content"></p>
        <br />
        <div
          class="file-download"
          v-if="newsItem.files && newsItem.files.length > 0"
        >
          <div
            v-for="(file, index) in newsItem.files"
            :key="index"
            class="file-item"
          >
            <q-icon
              name="insert_drive_file"
              color="grey"
              style="margin-right: 15px"
              size="30px"
            />
            <a :href="file.url" download>{{ file.name }}</a>
          </div>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

// 獲取路由參數
const route = useRoute();
const router = useRouter();
// 導航至指定路徑
const navigateTo = (route) => {
  if (route) {
    router.push(`/${route}`);
  } else {
    router.push("/");
  }
};

// 模擬的新聞數據
const news = reactive([
  // 添加多筆新聞資料以示範
  {
    id: 1,
    photo: "carousel1.jpg",
    title:
      "經營管理處自111年8月1日成立（任務編組），112年2月1日正式納入本校組織規程。",
    date: "2023-03-06",
    content:
      "經營管理處自111年8月1日成立（任務編組），112年2月1日正式納入本校組織規程。<br>經營管理處置處長一人，掌理重大工程之先期評估與規劃設計、資產之開發、營運空間與項目活化事宜。<br>分設規劃評估、 開發活化 二組，各組置組長一人。<br><br>經營管理處：Office of Operations and Management (OOM)<br>規劃評估組：Operational Planning and Organizational Assessment Division<br>開發活化組：	Marketing and Spatial Activation Division",
    files: [
      { name: "1-1.組織規程核定本-1120201生效.pdf", url: "path/to/file1.pdf" },
    ],
  },
  {
    id: 2,
    photo: "carousel2.jpg",
    title:
      "【轉知】財政部敬邀貴機關及專家學者踴躍投稿「促進民間參與公共建設電子報」，詳如原函說明，轉請查照。",
    date: "2024-10-11",
    content: "",
    files: [
      {
        name: "台財促字第11325529870號.pdf",
        url: "path/to/file1.pdf",
      },
    ],
  },
  {
    id: 3,
    photo: "carousel3.jpg",
    title: "【轉知】財政部檢送「中華民國112年度促參年報」，轉請查照。",
    date: "2023-08-14",
    content: "",
    files: [
      {
        name: "臺教秘(二)字第1130080395號.pdf",
        url: "path/to/file1.pdf",
      },
    ],
  },
  // 添加更多的新聞資料...
  {
    id: 4,
    photo: "carousel1.jpg",
    title:
      "【轉知】檢送113年版「民間自備私有土地興建、擁有及營運（B (R)OO）案招商文件（含甄審須知及投資契約）範本」1 份，請查照並轉知所屬。",
    date: "2024-08-08",
    content: "",
    files: [
      {
        name: "台財促字第11325523610號.pdf",
        url: "path/to/file1.pdf",
      },
      {
        name: "民間自備私有土地 興建、擁有及營運(B(R)OO)案 投資契約範本.pdf",
        url: "path/to/file1.pdf",
      },
      {
        name: "民間自備私有土地 興建、擁有及營運(B(R)OO)案 甄審須知範本.pdf",
        url: "path/to/file1.pdf",
      },
    ],
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
/* 設計主容器樣式 */
.news-detail-container {
  padding: 20px;
}

/* 標題區域設計 */
.news-detail-title {
  background-color: #2e3e56;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 2%;
  width: 100%;
}

.news-detail-title h4 {
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 2%;
}

.news-detail-title p {
  font-size: 22px;
  color: #ddd;
}

/* 內容區塊設計 */
.news-detail-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

/* 圖片樣式 */
.news-detail-content img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
}

/* 文字內容樣式 */
.news-detail-content p {
  font-size: 20px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 10px;
  word-break: break-word;
}

/* 附加檔案 */
.news-detail-content a {
  color: #7d7d7d; /* 默認灰色 */
  text-decoration: none; /* 去掉下劃線 */
  transition: color 0.3s ease; /* 平滑過渡效果 */
  font-size: 18px;
}

.news-detail-content a:hover {
  color: #003366; /* 鼠標懸停時的深藍色 */
}

.news-detail-content:last-child {
  border-bottom: none;
}
</style>
