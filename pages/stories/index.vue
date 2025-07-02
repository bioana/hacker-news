<template>
  <div class="grid-container">
    <article v-for="item in tenRandomStories" :key="item.id" class="card">
      <NuxtLink :to="`/stories/${item.id}`">
        <img src="/image.jpg" alt="Static dummy" class="dummy-image" />
        <h3 class="title">
          {{ item.title }}
        </h3>
        <p class="timestamp">{{ item.timeStamp }}</p>
        <p>Score: {{ item.score }}</p>
        <p>Author: {{ item.authorId }}</p>
      </NuxtLink>
      <p>URL: <NuxtLink :to="item.url"> Story link </NuxtLink></p>
    </article>
  </div>
</template>

<script setup lang="ts">
const { tenRandomStories, fetchStories, scrollY } = useStoryStore();

await fetchStories();

onMounted(() => {
  window.scrollTo(0, scrollY.value);
});

onBeforeUnmount(() => {
  scrollY.value = window.scrollY;
});
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  padding: 16px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background: white;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  display: flex;
  flex-direction: column;
}
a {
  text-decoration: none;
}

.dummy-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
}

.title {
  margin: 0 0 8px;
  font-size: 1.1rem;
  line-height: 1.3;
}

.timestamp {
  color: #646464;
  font-size: 0.85rem;
  margin-bottom: 12px;
}
</style>
