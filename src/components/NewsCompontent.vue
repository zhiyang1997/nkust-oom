<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="news-container" style="width: 65%; margin: 0% auto">
        <div class="news-title">
          <h4>最新消息</h4>
          <p>··········</p>
        </div>
        <!-- 最新消息區域 -->
        <div class="news-list">
          <div class="news-item" v-for="(item, index) in news" :key="index">
            <div class="news-photo">
              <img
                :src="getImageUrl(item.photo)"
                alt="News Image"
                class="news-image"
              />
            </div>
            <div class="news-title">{{ item.title }}</div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "NewsComponent",
  data() {
    return {
      news: [
        {
          photo: "carousel1.jpg", // 確保圖片文件存在於 src/assets 資料夾
          title: "113-1學期 EMI TA培訓開始報名囉！",
        },
        {
          photo: "carousel2.jpg", // 這裡可以更改為不同圖片的文件名
          title: "【113-1Workshop】教學實踐計畫經驗分享",
        },
        {
          photo: "carousel3.jpg", // 指向正確的圖片文件
          title: "國立臺灣科技大學EMI教學資源中心辦理 EMI培訓",
        },
      ],
    };
  },
  methods: {
    getImageUrl(photo) {
      // 使用 import.meta.url 來動態載入圖片資源
      return new URL(`../img/${photo}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.news-container {
  padding: 20px;
}

.news-list {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 4px solid #ddd; /* 添加2px的灰色邊框 */
}

.news-item {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}

.news-photo {
  flex: 0 0 20%;
  padding-right: 20px;
}

.news-image {
  max-width: 400px; /* 調整圖片寬度 */
  height: auto; /* 保持圖片比例 */
  border-radius: 10px; /* 圓角 */
}

.news-title {
  flex: 1;
  color: #343a40;
  font-size: 18px; /* 增加字體大小 */
  font-weight: bold; /* 設置字體為粗體 */
}

.news-item:last-child {
  border-bottom: none;
}

.news-title {
  display: flex;
  flex-direction: column; /* 垂直排列元素 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  text-align: center; /* 保證文本居中 */
}
.news-title h4 {
  margin-bottom: 5px; /* 調整 h4 底部的外邊距 */
  font-weight: bolder;
}

.news-title p {
  margin-top: 2px; /* 調整 p 元素的頂部外邊距 */
  font-weight: bolder;
}
</style>
