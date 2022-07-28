<script setup lang="ts"></script>

<template>
  <div class="warps fixed h-screen w-screen top-0 left-0">
    <Header />
    <div class="mt-16 flex justify-center items-center h-screen w-screen">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.warps {
  background-image: radial-gradient(circle, LightPink, LightSkyBlue, DarkTurquoise);
}
</style>
