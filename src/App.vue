<script setup lang="ts">
// import { isMobileTerminal } from '@/util/flex'

const text = ref('tt')
</script>

<template>
  <div class=" warps h-screen w-screen fixed top-0 left-0  ">
    <div class="w-screen h-16">
      <Header></Header>
    </div>
    {{ text }}
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.warps {
    background-image: radial-gradient(circle, LightPink, LightSkyBlue, 	DarkTurquoise);
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
