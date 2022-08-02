<script setup lang="ts"></script>

<template>
  <div class="warpsfixed h-screen w-screen top-0 left-0">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.warps {
  background-image: radial-gradient(
    circle,
    LightPink,
    LightSkyBlue,
    DarkTurquoise
  );
}
</style>
