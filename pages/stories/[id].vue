<template>
  <div class="story-container">
    <NuxtLink
      class="back-button"
      to="/stories"
      id="go-back-btn"
      aria-label="Go back"
      >←
    </NuxtLink>

    <div class="story-card" v-if="findStory()">
      <img class="story-image" src="/image.jpg" alt="Static dummy" />
      <h1 class="story-title">
        {{ findStory().title }}
      </h1>

      <p class="timestamp">{{ findStory().timeStamp }}</p>

      <div class="details">
        <p><strong>Score:</strong> {{ findStory().score }}</p>
        <p><strong>Author:</strong> {{ findStory().authorId }}</p>
        URL:
        <NuxtLink :to="findStory().url" id="go-to-story-btn" aria-label="Go to the story URL">
          Story link</NuxtLink
        >
      </div>
    </div>

    <div v-else>
      <p>Loading story...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from "~/types";

const { tenRandomStories } = useStoryStore();
const route = useRoute();
const postId = route.params.id;

function findStory(): Item {
  return tenRandomStories.value.find((item) => item.id === Number(postId))!;
}
</script>

<style scoped>
.story-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
}

.back-button {
  background: none;
  border: none;
  font-size: 3rem;
  color: #007bff;
  cursor: pointer;
  margin-bottom: 16px;
  padding: 4px;
}

a {
  text-decoration: none;
}

.story-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.story-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 16px;
}

.story-title {
  font-size: 1.6rem;
  margin: 0 0 8px;
}

.story-title a {
  text-decoration: none;
  color: #333;
}

.timestamp {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.details p {
  margin: 4px 0;
}
</style>
