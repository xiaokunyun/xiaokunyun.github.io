<template>
  <div class="warp" :class="{bganimation:useStore().theme}">
    <!-- <div class="bg" :class="{bganimation:useStore().theme}"></div> -->
    <Head class="fixed top-0 w-screen" />
    <div class="w-screen h-screen">
      <p>{{ $t('hello') }}</p>
      <p>{{ t('hello') }}</p>
      <Center class="center" />
    </div>
    <div class="beian">版权所有 © 2022-至今 AKUN</div>
  </div>
</template>

<script setup lang="ts">
import Head from './components/head.vue'
import Center from './components/center.vue'
import { useStore } from '@/store/user'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped lang="scss">
p {
  color: #333;
}
.bganimation {
    animation: change 15s infinite;
    background: linear-gradient(125deg,
        LightPink,
        LightSkyBlue,
        DarkTurquoise,
        #633bd3,
        #192f44,
      );
    //  #2980b9, #27ae60,#8e44ad,
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
.warp {
  // position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: all 0.5s;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
 
  .beian {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 16px;
    white-space: nowrap;
    animation: cloor 10s infinite;
  }

  @keyframes cloor {
    0% {
      color: #2980b9;
    }

    25% {
      color: #633bd3;
    }

    50% {
      color: #8e44ad;
    }

    75% {
      color: #192f44;
    }

    100% {
      color: #27ae60;
    }
  }
}

</style>
