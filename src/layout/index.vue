<template>
  <div class="warp">
    <Head class="fixed top-0 w-screen" />
    <Center class="center" />
    <div class="bg" :class="{bganimation:useStore().theme}"></div>
    <div class="beian">版权所有 © 2022-至今 AKUN</div>
  </div>
</template>

<script setup lang="ts">
import Head from './components/head.vue'
import Center from './components/center.vue'
import { useStore } from '@/store/user'

</script>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .warp {
    font-size: 14px !important;
  }
}

.warp {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  transition: all 0.5s;
  z-index: 5;

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
  }

  .bg {
    width: 100%;
    height: 100vh;
    z-index: -99;
  }
.bganimation{
  animation: change 15s infinite;
    background: linear-gradient(
      125deg,
      #2980b9,
      #633bd3,
      #8e44ad,
      #192f44,
      #27ae60
    );
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

  .beian {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 16px;
    white-space: nowrap;
    animation: cloor 15s infinite;
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
