<template>
  
  <div class="warp bg-white dark:bg-gray-800"  :class="{ bganimation: useStore().theme }">
    <Head />
    <div class="w-screen h-screen mt-20">
      <router-view v-slot="{ Component, route }">
        <transition name="route.meta.transition || 'fade'" mode="out-in">
          <keep-alive>
            <suspense>
              <template #default>
                <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
              </template>
              <template #fallback> Loading... </template>
            </suspense>
          </keep-alive>
        </transition>
      </router-view>
      <Footer />
    </div>
    <!-- class="absolute bottom-0" -->
  </div>
</template>

<script setup lang="ts">
import Head from "./components/head.vue";
import Footer from "./components/footer.vue";

import { useStore } from "@/store/user";
import { useI18n } from "vue-i18n";
import { isMobileTerminal } from "@/util/flex";
const { t } = useI18n();
</script>

<style scoped lang="scss">
.warp {
  // position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: all 0.5s;

  // .center {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  // }

  p {
    color: #333;
  }
}

.bganimation {
  // animation: change 15s infinite;
  // background: linear-gradient(125deg, LightPink, LightSkyBlue, DarkTurquoise, #27ae60, #2980b9);
  // #192f44,#8e44ad,#633bd3,
  background-size: 800%;
}

@keyframes change {
  0% {
    background-position-x: 0%;
  }

  50% {
    background-position-x: 100%;
  }

  100% {
    background-position-x: 0%;
  }
}
</style>
