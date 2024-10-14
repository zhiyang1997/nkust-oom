<template>
  <q-layout view="hHh lpR fFf">
    <!-- 新增的圖片和鏈接區域 -->
    <div class="header-top" style="width: 65%; margin: 0 auto">
      <div class="logo-container">
        <img src="src/img/nkust-oom.jpg" alt="NKUST Logo" class="logo" />
      </div>
      <div class="links-container">
        <ul class="link-list">
          <li class="link-item">
            <q-icon name="star" color="primary" />學校首頁
          </li>
          <li class="link-item">
            <q-icon name="star" color="primary" />校務系統
          </li>
          <li class="link-item">
            <q-icon name="star" color="primary" />後臺管理
          </li>
        </ul>
      </div>
    </div>

    <!-- 原本的 bar 區域 -->
    <q-header
      elevated
      class="header-container bg-grey-3"
      style="width: 65%; margin: 0 auto; margin-top: 5%"
    >
      <q-toolbar
        class="toolbar-container bg-grey-3"
        style="justify-content: center"
      >
        <!-- 左側的三條線圖標作為菜單 -->
        <q-btn
          flat
          no-border
          icon="menu"
          style="font-size: 14px"
          color="black"
        />

        <!-- 中間的導航欄清單 -->
        <ul class="nav-list">
          <li
            class="nav-item"
            @click="handleClick('單位介紹')"
            style="font-size: medium; font-weight: bolder"
          >
            單位介紹
          </li>
          <li
            class="nav-item"
            @click="handleClick('最新消息')"
            style="font-size: medium; font-weight: bolder"
          >
            最新消息
          </li>
          <li
            class="nav-item"
            @click="handleClick('業務職掌')"
            style="font-size: medium; font-weight: bolder"
          >
            業務職掌
          </li>
          <li
            class="nav-item"
            @click="handleClick('法令規章')"
            style="font-size: medium; font-weight: bolder"
          >
            法令規章
          </li>
          <li
            class="nav-item"
            @click="handleClick('表單下載')"
            style="font-size: medium; font-weight: bolder"
          >
            表單下載
          </li>
          <li
            class="nav-item"
            @click="handleClick('相關連結')"
            style="font-size: medium; font-weight: bolder"
          >
            相關連結
          </li>
          <li
            class="nav-item"
            @click="handleClick('聯絡我們')"
            style="font-size: medium; font-weight: bolder"
          >
            聯絡我們
          </li>
        </ul>
      </q-toolbar>
    </q-header>

    <!-- 插槽：在 bar 下面的區域插入內容 -->
    <div style="width: 65%; margin: 0 auto; margin-top: 5%">
      <router-view />
      <!-- <slot></slot> -->
    </div>
    <NewsCompontent />
    <Footer></Footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import Footer from "./Footer.vue";
import NewsCompontent from "src/components/NewsCompontent.vue";
const tab = ref("單位介紹");

function handleClick(label) {
  tab.value = label;
  console.log(`You clicked: ${label}`);
}
</script>

<style scoped>
/* 頂部區域的樣式 */
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background-color: white;
}

.logo-container {
  flex: 1;
}

.logo {
  height: 80px; /* 控制 logo 的大小 */
}

.links-container {
  flex: 1;
  text-align: right;
}

.link-list {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.link-item {
  margin-left: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.link-item q-icon {
  margin-right: 5px; /* 圖標和文字之間的間距 */
}

/* 原本導航欄樣式 */
.nav-list {
  display: flex;
  list-style-type: none; /* 去除li的原點樣式 */
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 0 6px; /* 控制li之間的間距 */
  padding: 8px 20px; /* 給li設置內邊距，讓點擊區域更大 */
  cursor: pointer;
  color: black; /* 預設字體顏色為黑色 */
  transition: background-color 0.3s, color 0.3s; /* 平滑變色過渡效果 */
}

.nav-item:hover {
  background-color: #5c5c5c; /* 懸停時的背景色 */
  color: white; /* 懸停時字體顏色變白 */
}

.q-toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.q-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
