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

/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
