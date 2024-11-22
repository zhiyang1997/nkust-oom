<template>
  <q-layout view="hHh lpR fFf">
    <!-- 新增的圖片和鏈接區域 -->
    <div class="header-top" style="width: 65%; margin: 0 auto">
      <div class="logo-container">
        <img
          src="/public/img/nkust.png"
          alt="NKUST Logo"
          class="logo"
          @click="hyperlinkTo('https://www.nkust.edu.tw/index.php')"
        />
        <img
          src="/public/img/oom.jpg"
          alt="OOM Logo"
          class="logo2"
          @click="navigateTo()"
        />
      </div>
      <div class="links-container">
        <ul class="link-list">
          <li
            class="link-item"
            @click="hyperlinkTo('https://www.nkust.edu.tw/index.php')"
          >
            學校首頁
          </li>
          <li
            class="link-item"
            @click="hyperlinkTo('https://webap0.nkust.edu.tw/nkust/')"
          >
            校務系統
          </li>
          <!-- <li class="link-item" @click="navigateTo('/login')">後臺管理</li> -->
        </ul>
      </div>
    </div>

    <!-- 原本的 bar 區域 -->
    <q-toolbar
      class="toolbar-container bg-grey-3"
      style="justify-content: center; width: 65%; margin: auto"
    >
      <!-- 左側的三條線圖標作為菜單 -->
      <q-btn flat no-border icon="menu" style="font-size: 14px" color="black" />

      <!-- 中間的導航欄清單 -->
      <ul class="nav-list">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          class="nav-item"
          @mouseenter="openMenu(index)"
          @mouseleave="closeMenu(index)"
          @click="navigateTo(item.route)"
          style="font-size: large; font-weight: bolder"
        >
          {{ item.label }}

          <q-menu
            v-if="item.subItems"
            v-model="menus[index]"
            transition-show="scale"
            transition-hide="scale"
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
        <!-- <li>
          <div class="search-container">
            若 isSearching 為 false，顯示放大鏡圖示

            <button
              v-if="!isSearching"
              @click="toggleSearch"
              class="search-button"
            >
              <q-icon name="search" size="sm" />
            </button>

            若 isSearching 為 true，顯示輸入框和按鈕
            <div v-else class="search-bar">
              <input
                v-model="query"
                type="text"
                placeholder="輸入關鍵字"
                class="search-input"
              />
              <button @click="search" class="search-button">
                <q-icon name="search" size="sm" />
              </button>
              <button @click="toggleSearch" class="close-button">
                <q-icon name="close" size="sm" />
              </button>
            </div>
          </div>
        </li> -->
      </ul>
    </q-toolbar>

    <!-- 插槽：在 bar 下面的區域插入內容 -->
    <!-- <div style="width: 65%; margin: 0 auto; margin-top: 2%"> -->
    <!-- <slot></slot> -->
    <!-- </div> -->

    <router-view />
    <FooterComponent></FooterComponent>
  </q-layout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import FooterComponent from "./FooterComponent.vue";

// 使用 Vue Router 來進行導航
const router = useRouter();

const isSearching = ref(false); // 控制是否顯示搜尋輸入框
const query = ref(""); // 綁定輸入框內容

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
    label: "主管法規",
    route: "/regulations",
    subItems: [
      { label: "財政部", route: "/regulations/mof" },
      { label: "本校", route: "/regulations/agency" },
    ],
  },
  { label: "表單下載", route: "/downloads" },
  { label: "相關連結", route: "/links" },
  { label: "聯絡我們", route: "/contact" },
]);

// 控制每個下拉選單是否顯示
const menus = ref(Array(navItems.value.length).fill(false));

let closeTimeout = null;
// 開啟指定索引的下拉選單
const openMenu = (index) => {
  clearTimeout(closeTimeout); // 清除任何之前設置的關閉延遲

  // 關閉所有其他選單
  menus.value = menus.value.map((_, i) => i === index);
};

// 延遲關閉指定索引的下拉選單
const closeMenu = (index) => {
  closeTimeout = setTimeout(() => {
    menus.value[index] = false;
  }, 100); // 延遲100ms關閉
};

// 讓下拉選單在鼠標懸停時保持顯示
const keepMenuOpen = (index) => {
  clearTimeout(closeTimeout); // 當滑鼠進入時清除關閉延遲
  menus.value[index] = true;
};

// 導航至指定路徑
const navigateTo = (route) => {
  if (route) {
    router.push(route);
  } else {
    router.push("/");
  }
};

const hyperlinkTo = (url) => {
  window.open(url, "_blank");
};

// 切換搜尋輸入框顯示
const toggleSearch = () => {
  isSearching.value = !isSearching.value;
  if (!isSearching.value) {
    query.value = ""; // 清空輸入框
  }
};

// 搜尋並導向 /search 頁面
const search = () => {
  if (query.value.trim() !== "") {
    router.push({ name: "search", query: { q: query.value } });
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
  cursor: pointer; /* 滑鼠移上去變成手型 */
}

.logo {
  height: auto; /* 控制 logo 的大小 */
  width: 40%;
}

.logo2 {
  height: auto;
  width: 20%;
  margin-left: 10px; /* 與虛線保持間距 */
}
.links-container {
  display: flex; /* 使用 Flexbox 來進行佈局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.link-list {
  list-style-type: none; /* 去除 ul 的原點樣式 */
  padding: 0;
  margin: 0;
  display: flex; /* 使用 Flexbox 讓項目水平排列 */
}

.link-item {
  margin: 0 15px; /* 控制每個項目之間的水平間距 */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative; /* 為 ::after 定位準備 */
  font-size: 16px;
  color: black;
  font-weight: bolder;
  background-color: white; /* 背景顏色 */
  padding: 5px 20px; /* 調整內部間距 */
  border-radius: 50px; /* 使按鈕變為橢圓形 */
  transition: background-color 0.3s, color 0.3s; /* 平滑過渡效果 */
  text-align: center;
  border: 2px solid #5c5c5c; /* 添加 2px 灰色的外框線 */
}

.link-item:last-child::after {
  content: none; /* 移除最後一個項目的分隔線 */
}

.link-item:hover {
  background-color: #5c5c5c; /* 懸停時的背景顏色 */
  color: white; /* 懸停時字體顏色 */
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
