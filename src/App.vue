<script setup lang="ts">
import { ref } from "vue";

const displayedText = ref("");

fetch("http://localhost:3000")
  .then((res) => res.text())
  .then((newText) => {
    displayedText.value = newText;
  });
</script>

<template>
  <div>
    <h1>Quizzr</h1>
    <p>{{ displayedText }}</p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
