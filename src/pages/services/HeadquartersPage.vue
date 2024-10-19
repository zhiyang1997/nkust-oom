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
          @click="navigateTo('services/headquarters')"
          class="text-bold"
          label="處本部"
        />
      </q-toolbar>

      <!-- 關於本處 Title -->
      <div class="headquarters-title">
        <h4>處本部</h4>
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
              <p class="item-label">現任職務：</p>
              <p class="item-content" v-html="info.position"></p>
            </div>
            <div class="info-item">
              <p class="item-label">學經歷：</p>
              <p class="item-content">{{ info.education }}</p>
            </div>
            <div class="info-item">
              <p class="item-label">工作項目：</p>
              <p class="item-content">{{ info.responsibility }}</p>
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
    image: "高瑞鍾<br>處長",
    phone: "(07)3617141 轉 23131、23470",
    email: "jckao@nkust.edu.tw",
    position:
      "國立高雄科技大學 經營管理處 處長<br>國立高雄科技大學 教育事業暨產品推廣處 處長<br>國立高雄科技大學 海事產管所 教授",
    education: "學經歷總表",
    responsibility: "綜理 經營管理處 業務。",
  },
  // 可以添加更多的項目...
]);

// 第二個列表的資料
const anotherListData = reactive([
  {
    image: "賴杏雲<br>約用組員",
    phone: "(07)3617141 轉 22101",
    email: "xingyun@nkust.edu.tw",
    responsibility:
      "1.處長行程安排及公文核稿。<br>2.彙整及召開處務會議。<br>3.彙整各項工作報告（含專案）進度。<br>4.彙整及管考年度計畫。<br>5.彙整及提報業務績效報告資料。<br>6.經營管理處各類專案之規劃與執行。<br>7.其他行政支援及臨時交辦事項。",
    agent: "1.蘇宸儀",
  },
  {
    image: "蘇宸儀<br>約用助理員",
    phone: "(07)3617141 轉 22114",
    email: "judy2022@nkust.edu.tw",
    responsibility:
      "1.公文分發及稽催。<br>2.大事紀要、登革熱場域管理及自主管理填報窗口。<br>3.網站管理及維護。<br>4.辦理處內財物盤點。<br>5.修訂經營管理處相關法規。<br>6.分配處內預算及執行控管。<br>7.管理處內物品及採購核銷。<br>8.管理經營管理處兼任助理。<br>9.其他行政支援及臨時交辦事項。",
    agent: "1.賴杏雲",
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
