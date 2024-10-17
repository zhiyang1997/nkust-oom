<template>
  <footer class="footer-section" style="width: 65%; margin: 2% auto">
    <div class="container">
      <div class="footer-contact">
        <div>電話：07-3617141 Ext. 22112</div>
        <div>信箱：eroffice01@nkust.edu.tw</div>
        <div>地址：811213高雄市楠梓區海專路142號</div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer-section {
  background-color: #5c5c5c; /* 頁腳的背景色 */
  color: white;
  position: relative;
  text-align: center;
  margin: 20px; /* 距離內容區的間距 */
  font-size: 18px; /* 整體字體大小 */
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
}

.footer-contact div {
  flex: 1; /* 每個 div 均分 1/3 寬度 */
  display: flex; /* 讓內部元素也使用 Flexbox */
  flex-direction: column; /* 讓內部的內容垂直排列 */
  align-items: center; /* 內部內容水平居中 */
  justify-content: center; /* 內部內容垂直居中 */
  padding: 0 10px; /* 控制內部間距，防止太靠邊 */
}
</style>
