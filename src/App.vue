<script setup lang="ts">
import { ref } from "vue";

const questions = ref<Array<{ id: number; label: string }>>([]);

fetch("http://localhost:3000")
  .then((res) => res.json())
  .then((data) => {
    questions.value = data;
  });
</script>

<template>
  <div>
    <h1>Quizzr</h1>
    <h2>Questions</h2>
    <ul>
      <li v-for="question in questions" :key="question.id">
        {{ question.label }}
      </li>
    </ul>
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
