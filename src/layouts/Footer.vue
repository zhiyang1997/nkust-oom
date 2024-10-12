<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-links">
        <a href="#">單位介紹<br />About</a>
        <a href="#">最新消息<br />News</a>
        <a href="#">業務職掌<br /></a>
        <a href="#">法令規章<br /></a>
        <a href="#">表單下載<br />Download</a>
        <a href="#">相關連結<br />Link</a>
        <a href="#">聯絡我們<br /></a>
      </div>
      <div class="footer-contact">
        <div><i class="fas fa-phone"></i> 電話：</div>
        <div><i class="fas fa-envelope"></i> 信箱：</div>
        <div><i class="fas fa-map-marker-alt"></i> 地址：</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer-section {
  background-color: #355878; /* 頁腳的背景色 */
  color: white;
  padding: 40px 0; /* 減少上下內邊距 */
  position: relative;
  text-align: center;
  margin-top: 20px; /* 距離內容區的間距 */
  border-radius: 50% / 30px 30px 0 0; /* 調整圓角的大小 */
  font-size: 18px; /* 整體字體大小 */
}

.footer-links {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  line-height: 1.5;
  font-size: 18px; /* 調整鏈接文字大小 */
}

.footer-contact {
  display: flex; /* 使用 Flexbox */
  justify-content: space-around; /* 等間距排列 */
  align-items: center; /* 垂直居中 */
  text-align: center; /* 內容水平居中 */
  padding: 20px 0; /* 調整內邊距 */
  font-size: 16px; /* 調整聯繫方式的字體大小 */
  position: relative; /* 為了使用 ::before */
}

.footer-contact::before {
  content: ""; /* 偽元素內容 */
  position: absolute;
  top: 5px; /* 控制虛線的垂直位置 */
  left: 0;
  width: 100%;
  height: 0; /* 沒有高度，只需要線條 */
  border-top: 3px dashed white; /* 虛線樣式 */
}

.footer-contact div {
  flex: 1; /* 每個 div 均分 1/3 寬度 */
  display: flex; /* 讓內部元素也使用 Flexbox */
  flex-direction: column; /* 讓內部的內容垂直排列 */
  align-items: center; /* 內部內容水平居中 */
  justify-content: center; /* 內部內容垂直居中 */
  padding: 0 10px; /* 控制內部間距，防止太靠邊 */
}

.footer-contact i {
  margin-bottom: 5px; /* 圖標與文本之間的間距 */
  font-size: 20px; /* 調整圖標大小 */
}
</style>
