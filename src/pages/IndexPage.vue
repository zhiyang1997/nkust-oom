<template>
  <q-page class="flex flex-center">
    <div id="map" style="width: 100%; height: 600px"></div>
  </q-page>
</template>

<script setup>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";

onMounted(() => {
  const map = L.map("map").setView([23.6978, 120.9605], 7); // 台湾的中心位置

  // 使用 OpenStreetMap 瓦片图
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
  }).addTo(map);

  // 引入高雄市的 GeoJSON 数据
  fetch("src/json/taiwan.geojson")
    .then((response) => response.json())
    .then((data) => {
      const geojsonLayer = L.geoJson(data, {
        style: {
          color: "#3388ff",
          weight: 2,
          fillOpacity: 0.1,
        },
        onEachFeature: (feature, layer) => {
          // 添加工具提示窗口，显示区域名称
          layer.bindTooltip(feature.properties.COUNTYNAME, {
            permanent: false, // 非永久显示，只有悬停时显示
            direction: "top", // 工具提示窗口显示在上方
            className: "tooltip-class", // 自定义样式类
          });

          layer.on("mouseover", function () {
            layer.setStyle({
              weight: 5,
              color: "#666",
              fillOpacity: 0.7,
              transform: "scale(1.15)", // 增加缩放比例
              transition: "transform 0.3s ease, fill-opacity 0.3s ease", // 添加过渡效果
              filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))", // 添加阴影效果
            });
          });

          layer.on("mouseout", function () {
            geojsonLayer.resetStyle(layer); // 恢复原样
          });
        },
      }).addTo(map);
    });
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 600px;
}

/* 为SVG的Path元素添加变换效果 */
.leaflet-interactive {
  transition: transform 0.3s ease, fill-opacity 0.3s ease; /* 平滑的缩放效果 */
}

/* 自定义工具提示窗口样式 */
.tooltip-class {
  background-color: #fff; /* 背景颜色 */
  color: #333; /* 文字颜色 */
  padding: 5px 10px; /* 内边距 */
  border-radius: 5px; /* 圆角 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 阴影效果 */
}
</style>
