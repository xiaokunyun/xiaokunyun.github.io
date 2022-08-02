<template>
  <div class="h-screen w-screen">
    <Header />
    <div class="mt-16 flex justify-center items-center h-screen w-screen">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
</script>
