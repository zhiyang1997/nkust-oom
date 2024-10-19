<template>
  <div class="map-container">
    <!-- 使用 SVG 定義校區地圖 -->
    <svg height="300px" xmlns="http://www.w3.org/2000/svg">
      <!-- 燕巢校區 -->
      <polygon
        points="125,100 125,94 131,88 139,94 145,95 153,96 156,100 162,99 168,103 169,108 172,115 177,119 175,126 171,131 167,136 166,139 159,133 156,138 148,135 144,140 140,146 133,145 125,143 123,141 118,148 114,143 117,138 114,131 111,131 104,132 104,124 102,117 106,109 112,107 122,105"
        class="map-area"
        @mouseenter="showCampusInfo('燕巢校區')"
        @mouseleave="hideCampusInfo"
      />
      <!-- 第一校區 -->
      <polygon
        points="102,159 102,157 110,155 110,147 111,141 116,143 117,148 119,154 117,163 112,171 110,177 104,184 98,160 102,159 102,157"
        class="map-area"
        @mouseenter="showCampusInfo('第一校區')"
        @mouseleave="hideCampusInfo"
      />
      <!-- 楠梓校區 -->
      <polygon
        points="97,160 103,183 97,182 92,178 92,174 86,178 77,177 74,175 70,179 66,173 67,165 71,162 74,159 79,157 79,154 88,155 91,159 88,155"
        class="map-area"
        @mouseenter="showCampusInfo('楠梓校區')"
        @mouseleave="hideCampusInfo"
      />
      <!-- 建工校區 -->
      <polygon
        points="107,196 113,200 120,199 116,205 117,208 112,208 117,208 118,214 123,218 125,224 120,227 106,224 105,229 100,224 84,228 83,221 85,215 94,214 102,212 101,208 105,202"
        class="map-area"
        @mouseenter="showCampusInfo('建工校區')"
        @mouseleave="hideCampusInfo"
      />
      <!-- 旗津校區 -->
      <polygon
        points="66,236 73,239 80,242 85,249 90,258 97,269 102,274 106,281 100,287 94,287 95,280 83,264 71,249 73,243"
        class="map-area"
        @mouseenter="showCampusInfo('旗津校區')"
        @mouseleave="hideCampusInfo"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campusName: "",
      campusInfoVisible: false,
      infoPosition: { x: 0, y: 0 },
    };
  },
  methods: {
    showCampusInfo(name) {
      this.campusName = name;
      this.campusInfoVisible = true;
      // 更新提示框的位置
      this.infoPosition = {
        x: event.clientX,
        y: event.clientY,
      };
    },
    hideCampusInfo() {
      this.campusInfoVisible = false;
    },
  },
};
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* 柔和的陰影效果 */
  width: 30%;
  margin: auto;
}

.map-area {
  fill: #5c5c5c; /* 預設顏色 */
  stroke: #000000;
  stroke-width: 1;
  transition: transform 0.3s ease, fill 0.3s ease, box-shadow 0.3s ease;
}

/* 懸停時放大並增加陰影效果 */
.map-area:hover {
  fill: #343a40; /* 懸停時顏色變深 */
  transform: scale(1.15); /* 懸停時放大 1.15 倍 */
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3)); /* 增加放大的陰影效果 */
}

.info-box {
  position: absolute;
  background: rgba(255, 255, 255, 0.9); /* 背景透明度增加 */
  padding: 10px;
  border-radius: 8px; /* 圓角讓訊息框更柔和 */
  border: 1px solid #343a40; /* 訊息框邊框 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 增加陰影效果 */
  pointer-events: none;
  white-space: nowrap;
  color: #343a40; /* 訊息框文字顏色 */
  font-weight: bold; /* 讓校區名稱更醒目 */
}
</style>
