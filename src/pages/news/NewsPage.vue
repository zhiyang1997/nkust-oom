<template>
  <q-page-container>
    <q-page class="news-container">
      <q-toolbar class="bg-grey-3" style="width: 64.3%; margin: auto">
        <q-btn flat @click="navigateTo()" class="text-bold" label="首頁" />
        <span class="separator">/</span>
        <q-btn
          flat
          @click="navigateTo('news')"
          class="text-bold"
          label="最新消息"
        />
      </q-toolbar>
      <!--表單下載 Title-->
      <NewsCompontent />
    </q-page>
  </q-page-container>
</template>

<script setup>
import NewsCompontent from "src/components/NewsCompontent.vue";
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
.news-container {
  padding: 20px;
}

.separator {
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center; /* 確保 / 符號和按鈕對齊 */
}
</style>
