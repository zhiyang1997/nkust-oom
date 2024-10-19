<template>
  <q-page-container>
    <q-page class="headquarters-container" style="width: 65%; margin: auto">
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
          @click="navigateTo('services/develop')"
          class="text-bold"
          label="開發活化組"
        />
      </q-toolbar>

      <!-- 關於本處 Title -->
      <div class="headquarters-title">
        <h4>開發活化組</h4>
        <p>················</p>
      </div>

      <!-- 關於本處內容（置頂列表） -->
      <div class="headquarters-list">
        <div
          class="headquarters-item"
          v-for="(info, index) in aboutInfo"
          :key="index"
        >
          <div class="left-image">
            <p
              class="item-content"
              v-html="info.image"
              style="font-size: larger"
            ></p>
          </div>
          <div class="vertical-line"></div>
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
              <p class="item-label">工作項目：</p>
              <p class="item-content" v-html="info.responsibility"></p>
            </div>
            <div class="info-item">
              <p class="item-label">代理人：</p>
              <p class="item-content">{{ info.agent }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 第二個列表（另兩個區塊） -->
      <div class="another-list">
        <div
          class="another-item"
          v-for="(info, index) in anotherListData"
          :key="index"
        >
          <div class="left-image">
            <p
              class="item-content"
              v-html="info.image"
              style="font-size: larger"
            ></p>
          </div>
          <div class="vertical-line"></div>
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
              <p class="item-label">工作項目：</p>
              <p class="item-content" v-html="info.responsibility"></p>
            </div>
            <div class="info-item">
              <p class="item-label">代理人：</p>
              <p class="item-content">{{ info.agent }}</p>
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

// 定義關於本處的資料 (置頂的列表)
const aboutInfo = reactive([
  {
    image: "組長",
    phone: "",
    email: "",
    position: "",
    responsibility: "",
    agent: "",
  },
  // 可以添加更多的項目...
]);

// 第二個列表的資料
const anotherListData = reactive([
  {
    image: "待補<br>約用組員",
    phone: "",
    email: "",
    responsibility: "",
    agent: "",
  },
]);

// 導航至指定路徑
const navigateTo = (route) => {
  if (route) {
    router.push(`/${route}`);
  } else {
    router.push("/");
  }
};
</script>

<style scoped>
/* 主要容器样式 */
.headquarters-container {
  padding: 20px;
}

.separator {
  margin: 0 10px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center; /* 確保 / 符號和按鈕對齊 */
}

/* 標題樣式 */
.headquarters-title {
  flex: 1;
  color: #343a40;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.headquarters-title h4 {
  margin-bottom: 5px;
  font-weight: bolder;
}
.headquarters-title p {
  margin-top: 2px;
  font-weight: bolder;
}

/* 列表样式 */
.headquarters-list,
.another-list {
  padding: 30px;
  background: linear-gradient(135deg, #f5f7fa, #ffffff);
  border-radius: 20px;
  margin: 20px auto;
  width: 80%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border: 3px solid #ddd;
}

.headquarters-item,
.another-item {
  display: flex;
  justify-content: flex-start;
  align-items: stretch; /* 讓所有子元素的高度撐滿列表項目 */
  padding: 20px 0;
  font-size: 18px;
  border-bottom: 3px dashed #bdc3c7;
  height: auto;
}

.headquarters-item:last-child,
.another-item:last-child {
  border-bottom: none;
}

/* 左邊圖片文字樣式 */
.left-image {
  flex: 0 0 20%; /* 確保這一欄的寬度佔20% */
  display: flex;
  align-items: center; /* 垂直置中 */
  justify-content: center; /* 水平置中 */
  text-align: center; /* 確保文字居中 */
  color: #2c3e50;
  font-size: 28px; /* 調整字體大小 */
  font-weight: bold; /* 設置字體為粗體 */
}

/* 中間虛線 */
.vertical-line {
  border-left: 3px dashed #bdc3c7;
  height: auto;
  margin: 0 20px;
}

/* 右邊內容區樣式 */
.right-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

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
  word-break: break-word;
}
</style>
