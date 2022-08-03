<template>
  <div class="h-screen w-screen">
    <!-- <Header /> -->
    <div class="fixed top-0 left-0 w-screen h-16 text-xs overflow-hidden">
      <div class="w-screen h-16 flex justify-between items-center">
        <div class="w-1/5 flex justify-center items-center">
          <img src="@/assets/images/logo.png" class="w-10 h-4" alt="logo" />
        </div>
        <div class="w-4/5 flex">
          <div
            class="text-black w-1/4 flex items-center text-xs"
            v-for="(item, index) in list"
            :key="index"
          >
            <RouterLink :to="item.path"> {{ item.meta.title }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 flex justify-center items-center h-screen w-screen">
      <!-- <router-view /> -->
      <!-- <RouterView /> -->
      <router-view v-slot="{ Component, route }">
        <transition mode="out-in" appear>
          <keep-alive>
            <suspense>
              <template #default>
                <component :is="Component" :key="route.fullPath" />
              </template>
              <template #fallback> Loading... </template>
            </suspense>
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Header from './Header.vue';
const router = useRouter();
console.log('router', router);
const list = ref(router.getRoutes().filter((v) => v.meta.requiresAuth));
</script>
