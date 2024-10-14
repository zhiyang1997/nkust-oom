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
    <q-page-container
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
            v-for="(item, index) in navItems"
            :key="index"
            class="nav-item"
            @mouseenter="openMenu(index)"
            @mouseleave="closeMenu(index)"
            @click="!item.subItems && navigateTo(item.route)"
            style="font-size: medium; font-weight: bolder"
          >
            {{ item.label }}

            <q-menu
              v-if="item.subItems"
              v-model="menus[index]"
              transition-show="scale"
              transition-hide="scale"
              style="min-width: 150px"
              @mouseenter="keepMenuOpen(index)"
              @mouseleave="closeMenu(index)"
            >
              <q-list>
                <q-item
                  clickable
                  v-close-popup
                  v-for="(subItem, subIndex) in item.subItems"
                  :key="subIndex"
                  @click="navigateTo(subItem.route)"
                >
                  <q-item-section>{{ subItem.label }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </li>
        </ul>
      </q-toolbar>
    </q-page-container>

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
import { useRouter } from "vue-router";
import Footer from "./Footer.vue";
import NewsCompontent from "src/components/NewsCompontent.vue";

// 使用 Vue Router 來進行導航
const router = useRouter();

// 導航項目，每個項目可以有下拉選單內容，並包含導航路徑
const navItems = ref([
  {
    label: "單位介紹",
    route: "/introduction",
    subItems: [
      { label: "關於本處", route: "/introduction/overview" },
      { label: "組織架構", route: "/introduction/structure" },
    ],
  },
  { label: "最新消息", route: "/news" },
  {
    label: "業務職掌",
    route: "/services",
    subItems: [
      { label: "處本部", route: "/services/headquarters" },
      { label: "規劃評估組", route: "/services/plan" },
      { label: "開發活化組", route: "/services/develop" },
    ],
  },
  {
    label: "法令規章",
    route: "/regulations",
    subItems: [
      { label: "財政部", route: "/regulations/mof" },
      { label: "本機關", route: "/regulations/agency" },
    ],
  },
  { label: "表單下載", route: "/downloads" },
  { label: "相關連結", route: "/links" },
  { label: "聯絡我們", route: "/contact" },
]);

// 控制每個下拉選單是否顯示
const menus = ref(Array(navItems.value.length).fill(false));

// 開啟指定索引的下拉選單
const openMenu = (index) => {
  menus.value[index] = true;
};

// 關閉指定索引的下拉選單
const closeMenu = (index) => {
  menus.value[index] = false;
};

// 讓下拉選單在鼠標懸停時保持顯示
const keepMenuOpen = (index) => {
  menus.value[index] = true;
};

// 導航至指定路徑
const navigateTo = (route) => {
  if (route) {
    router.push(route);
  }
};
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
