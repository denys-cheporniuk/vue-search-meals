<script setup>
  import { ref, computed, onMounted } from 'vue';
  import axiosClient from "../axiosClient.js";

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const ingredients = ref([])

  onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list');
    ingredients.value = response.data;
  })
</script>

<template>

  <div class="flex p-8 flex-col">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
    />

    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{name: 'byLetter', params: { letter }}"
        :key="{letter}"
        v-for="letter of letters"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>
