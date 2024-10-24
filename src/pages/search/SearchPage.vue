<template>
  <q-page-container>
    <q-page class="search-container" style="width: 65%; margin: 0% auto">
      <ul>
        <li v-for="(item, index) in filteredItems" :key="index">
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </li>
      </ul>
    </q-page>
  </q-page-container>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useListStore } from "src/stores/listStore";

// 使用 Pinia store
const listStore = useListStore();

// 綁定查詢結果
const filteredItems = ref([]);

// 取得目前的路由參數
const route = useRoute();

// 每次進入頁面或 query 變動時，執行查詢
const performSearch = () => {
  const query = route.query.q || ""; // 取得 query 中的 'q' 參數
  filteredItems.value = listStore.filterItems(query);
};

// 監聽路由變化，當 query 變動時重新查詢
watch(() => route.query.q, performSearch);

// 初次進入頁面時執行查詢
onMounted(performSearch);
</script>

<style scoped>
.search-input {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  max-width: 300px;
}

.search-container {
  padding: 20px;
}
</style>
