<template>
  <div class="fixed top-0 left-0 w-screen h-16 text-xs overflow-hidden">
    <div class="w-screen h-16 flex justify-between items-center">
      <div class="w-1/5 flex justify-center items-center">
        <img src="@/assets/images/logo.png" class="w-10 h-4" alt="logo" />
      </div>
      <div class="w-4/5 flex">
        <div
          class="text-black w-1/4 flex items-center text-xs"
          :class="{ active: index }"
          v-for="(item, index) in list"
          :key="index"
        >
          <RouterLink :to="item.path"> {{ item.meta.title }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const list = ref(router.getRoutes().filter((v) => v.meta.requiresAuth));
</script>

<style scoped lang="scss">
// .active{
//   border-bottom: 3px solid white;
// }
</style>
