<template>
  <q-page-container>
    <q-page class="contact-container" style="width: 65%; margin: 0% auto">
      <q-toolbar class="bg-grey-3 full-width">
        <q-btn flat @click="navigateTo()" class="text-bold" label="首頁" />
        <span class="separator">/</span>
        <q-btn
          flat
          @click="navigateTo('contact')"
          class="text-bold"
          label="聯絡我們"
        />
      </q-toolbar>

      <!-- 聯絡我們 Title -->
      <div class="contact-title">
        <h4>聯絡我們</h4>
        <p>················</p>
      </div>

      <!-- 聯絡資訊區 -->
      <div class="contact-info">
        <h5>國立高雄科技大學 經營管理處</h5>
        <ul>
          <li>校區位置：楠梓校區 行政大樓三樓1309、1310</li>
          <li>地址：811213 高雄市楠梓區海專路142號</li>
          <li>電話：07-3617141 分機22112</li>
          <li>
            E-mail：<a href="mailto:eroffice01@nkust.edu.tw"
              >eroffice01@nkust.edu.tw</a
            >
          </li>
        </ul>

        <q-separator></q-separator>

        <h6>規劃評估組</h6>
        <ul>
          <li>電話：</li>
          <li>E-mail：</li>
        </ul>

        <q-separator></q-separator>

        <h6>開發活化組</h6>
        <ul>
          <li>電話：</li>
          <li>E-mail：</li>
        </ul>
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup>
import { useRouter } from "vue-router";

// 使用 Vue Router 進行導航
const router = useRouter();

const navigateTo = (route) => {
  if (route) {
    router.push(route);
  } else {
    router.push("/");
  }
};
</script>

<style scoped>
.contact-container {
  padding: 20px;
}

.contact-title {
  flex: 1;
  color: #343a40;
  font-weight: bold; /* 設置字體為粗體 */
  display: flex;
  flex-direction: column; /* 垂直排列元素 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  text-align: center; /* 保證文本居中 */
}

.contact-title h4 {
  margin-bottom: 5px; /* 調整 h4 底部的外邊距 */
  font-weight: bolder;
}

.contact-title p {
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

.contact-info h5,
.contact-info h6 {
  margin-bottom: 10px; /* 減少標題和內文間距 */
  margin-top: 10px; /* 視需求減少頂部的間距 */
  font-weight: bold;
  color: #003366;
}

.contact-info ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.contact-info li {
  margin: 5px 0;
  font-size: 18px;
  color: #555;
}
</style>
