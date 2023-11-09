<script setup>

</script>

<template>
  <div class="bg-gray-100">
    <header class="bg-white shadow px-6">
      <nav class="flex justify-between items-center h-16">
        <router-link
          :to="{name: 'home'}"
          class="
            px-2
            h-full
            transition-colors
            hover:bg-purple-100
            flex
            items-center"
        >
          Home
        </router-link>

        <ul class="flex justify-between gap-5 h-full">
          <li class="
            flex
            items-center
            px-2
            h-full
            hover:bg-purple-100
            transition-colors
            cursor-pointer"
          >
            <router-link
              :to="{name: 'home'}"
            >
              Search Meals
            </router-link>
          </li>

          <li class="
            flex
            items-center
            px-2
            h-full
            hover:bg-purple-100
            transition-colors
            cursor-pointer"
          >
            <router-link
              :to="{name: 'home'}"
            >
              Meals By Letter
            </router-link>
          </li>

          <li class="
            flex
            items-center
            px-2
            h-full
            hover:bg-purple-100
            transition-colors
            cursor-pointer"
          >
            <router-link
              :to="{name: 'home'}"
            >
              Meals By Ingredients
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
</style>
