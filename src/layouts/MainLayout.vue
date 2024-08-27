<template>
  <q-layout view="hHh lpR fFf">
    <!-- 頂部工具欄作為導航欄 -->
    <q-header elevated class="header-container">
      <q-toolbar class="toolbar-container">
        <q-tabs
          v-model="tab"
          active-color="white"
          indicator-color="white"
          class="text-white"
        >
          <q-btn
            color="primary"
            label="單位介紹"
            style="min-width: 120px; height: 60px; font-size: 18px;"
            class="q-mr-md q-px-lg q-py-md"
          >
            <q-menu
              transition-show="flip-right"
              transition-hide="flip-left"
              style="min-width: 120px;"
            >
              <q-list style="min-width: 120px;">
                <q-item clickable>
                  <q-item-section>關於本處</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>組織架構</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn
            color="primary"
            label="業務職掌"
            style="min-width: 120px; height: 60px; font-size: 18px;"
            class="q-px-lg q-py-md"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="content-container">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const tab = ref("home"); // 預設選中 "首頁"
const router = useRouter();

function goTo(routeName) {
  router.push({ name: routeName });
}
</script>

<style scoped>
.q-header {
  background-color: #1e88e5; /* 頂部導航欄背景色 */
  color: white;
}

/* 設置網站佈局的寬度並居中 */
.header-container,
.content-container {
  max-width: 1200px; /* 設置主內容最大寬度 */
  margin: 0 auto; /* 使容器在頁面中居中 */
}

.q-tab {
  min-width: 100px; /* 調整tab的最小寬度 */
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.q-tab:hover {
  background-color: rgba(255, 255, 255, 0.1); /* 滑鼠懸停時的背景色變化 */
}

.q-item {
  transition: background-color 0.3s ease;
}

.q-item:hover {
  background-color: rgba(255, 255, 255, 0.1); /* 下拉選單項 hover 狀態的背景色 */
}

.q-hover-bg-light {
  cursor: pointer;
}
</style>
