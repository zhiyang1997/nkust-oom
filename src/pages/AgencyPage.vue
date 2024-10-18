<template>
  <q-page-container>
    <q-page class="law-container" style="width: 65%; margin: 0% auto">
      <q-toolbar class="bg-grey-3 full-width">
        <q-btn flat @click="navigateTo()" class="text-bold" label="首頁" />
        <span class="separator">/</span>
        <q-btn
          flat
          @click="navigateTo('regulations')"
          class="text-bold"
          label="法令規章"
        />
        <span class="separator">/</span>
        <q-btn
          flat
          @click="navigateTo('regulations/agency')"
          class="text-bold"
          label="本機關"
        />
      </q-toolbar>

      <!--本機關 Title-->
      <div class="law-title">
        <h4>本機關</h4>
        <p>················</p>
      </div>

      <div class="law-list">
        <div
          class="law-item"
          v-for="(law, index) in paginatedLaws"
          :key="index"
        >
          <q-icon name="language" color="grey" style="margin-right: 20px" />

          <a :href="law.url" target="_blank">{{ law.name }}</a>
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
import { useRouter } from "vue-router";
import { reactive, computed, ref } from "vue";
import { QPagination } from "quasar";

// 使用 Vue Router 來進行導航
const router = useRouter();

// 定義法律資料
const laws = reactive([]);

// 定義每頁顯示的最大數量
const itemsPerPage = 10;

// 分頁的當前頁面
const currentPage = ref(1);

// 分頁計算總頁數
const totalPages = computed(() => Math.ceil(laws.length / itemsPerPage));

// 根據當前頁面計算要顯示的新聞資料
const paginatedLaws = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return laws.slice(startIndex, startIndex + itemsPerPage);
});

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
.law-container {
  padding: 20px;
}

.law-title {
  flex: 1;
  color: #343a40;
  font-weight: bold; /* 設置字體為粗體 */
  display: flex;
  flex-direction: column; /* 垂直排列元素 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  text-align: center; /* 保證文本居中 */
}
.law-title h4 {
  margin-bottom: 5px; /* 調整 h4 底部的外邊距 */
  font-weight: bolder;
}

.law-title p {
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

/* 連結區塊樣式 */
.law-list {
  padding: 50px;
  background-color: white;
  border-radius: 10px;
  border: 3px dashed #333; /* 添加2px的虛線邊框 */
  margin: 20px auto; /* 與上方區域保持一些間距 */
  width: 80%;
}

.law-item {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
  font-size: 20px;
}

.law-item a {
  color: #7d7d7d; /* 默認灰色 */
  text-decoration: none; /* 去掉下劃線 */
  transition: color 0.3s ease; /* 平滑過渡效果 */
}

.law-item a:hover {
  color: #003366; /* 鼠標懸停時的深藍色 */
}

.law-item:last-child {
  border-bottom: none;
}

.law-index {
  flex: 1;
  color: #343a40;
  font-size: 18px; /* 增加字體大小 */
  font-weight: bold; /* 設置字體為粗體 */
  display: flex;
  flex-direction: column; /* 垂直排列元素 */
  justify-content: center; /* 垂直居中 */
  text-align: left; /* 保證文本左對齊 */
}

/* 分頁容器樣式，讓分頁元件居中 */
.pagination-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  margin-top: 20px; /* 與法律列表保持一些間距 */
}
</style>
