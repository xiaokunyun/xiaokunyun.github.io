<template>
  <div>
    <div class="wrapper">
      <div class="sides">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
      </div>
      <div class="text">
        <div class="text--backing">{{ props.text }}</div>
        <div class="text--left">
          <div class="inner">{{ props.text }}</div>
        </div>
        <div class="text--right">
          <div class="inner">{{ props.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: () => '',
  },
})
</script>
<style scoped lang="scss">
.wrapper {
  position: relative;
  color: #fff;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  padding-top: 0.33rem;
  padding-left: 0.25rem;
  padding-right: 0.18rem;
  padding-bottom: 0.1rem;

  .sides {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;

    .side {
      position: absolute;
      background: #fff;
    }

    .side:nth-child(1) {
      top: 0;
      left: 0;
      width: 100%;
      height: 0.07rem;
      -webkit-transform: translateX(-101%);
      transform: translateX(-101%);
      -webkit-animation: side-top ease 6s infinite;
      animation: side-top ease 6s infinite;
      box-shadow: 0 0 10px #ffd700;
    }

    .side:nth-child(2) {
      top: 0;
      right: 0;
      width: 0.07rem;
      height: 100%;
      -webkit-transform: translateY(-101%);
      transform: translateY(-101%);
      -webkit-animation: side-right ease 6s infinite;
      animation: side-right ease 6s infinite;
    }

    .side:nth-child(3) {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.07rem;
      -webkit-transform: translateX(101%);
      transform: translateX(101%);
      -webkit-animation: side-bottom ease 6s infinite;
      animation: side-bottom ease 6s infinite;
    }

    .side:nth-child(4) {
      top: 0;
      left: 0;
      width: 0.07rem;
      height: 100%;
      -webkit-transform: translateY(101%);
      transform: translateY(101%);
      -webkit-animation: side-left ease 6s infinite;
      animation: side-left ease 6s infinite;
    }
  }

  .text {
    position: relative;

    .text--backing {
      opacity: 0;
    }

    .text--left {
      position: absolute;
      top: 0;
      left: 0;
      width: 51%;
      height: 100%;
      overflow: hidden;

      .inner {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        -webkit-animation: text-left 6s ease-in-out infinite;
        animation: text-left 6s ease-in-out infinite;
      }
    }

    .text--right {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      overflow: hidden;

      .inner {
        -webkit-transform: translateX(-200%);
        transform: translateX(-200%);
        -webkit-animation: text-right 6s ease-in-out infinite;
        animation: text-right 6s ease-in-out infinite;
      }
    }
  }
}

@-webkit-keyframes text-left {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  10% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  58% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  70% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }

  100% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
}

@keyframes text-left {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  10% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  58% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  70% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }

  100% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }
}

@-webkit-keyframes text-right {
  0% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }

  10% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  58% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  70% {
    -webkit-transform: translateX(-300%);
    transform: translateX(-300%);
  }

  100% {
    -webkit-transform: translateX(-300%);
    transform: translateX(-300%);
  }
}

@keyframes text-right {
  0% {
    -webkit-transform: translateX(-200%);
    transform: translateX(-200%);
  }

  10% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  58% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  70% {
    -webkit-transform: translateX(-300%);
    transform: translateX(-300%);
  }

  100% {
    -webkit-transform: translateX(-300%);
    transform: translateX(-300%);
  }
}

@-webkit-keyframes side-top {
  0%,
  14% {
    -webkit-transform: translateX(-101%);
    transform: translateX(-101%);
  }

  24%,
  55% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  65% {
    -webkit-transform: translateX(101%);
    transform: translateX(101%);
  }

  100% {
    -webkit-transform: translateX(101%);
    transform: translateX(101%);
  }
}

@keyframes side-top {
  0%,
  14% {
    -webkit-transform: translateX(-101%);
    transform: translateX(-101%);
  }

  24%,
  55% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  65% {
    -webkit-transform: translateX(101%);
    transform: translateX(101%);
  }

  100% {
    -webkit-transform: translateX(101%);
    transform: translateX(101%);
  }
}

@-webkit-keyframes side-right {
  0%,
  14%,
  23% {
    -webkit-transform: translateY(-101%);
    transform: translateY(-101%);
  }

  30%,
  62% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  72% {
    -webkit-transform: translateY(101%);
    transform: translateY(101%);
  }

  100% {
    -webkit-transform: translateY(101%);
    transform: translateY(101%);
  }
}

@keyframes side-right {
  0%,
  14%,
  23% {
    -webkit-transform: translateY(-101%);
    transform: translateY(-101%);
  }

  30%,
  62% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  72% {
    -webkit-transform: translateY(101%);
    transform: translateY(101%);
  }

  100% {
    -webkit-transform: translateY(101%);
    transform: translateY(101%);
  }
}

@-webkit-keyframes side-bottom {
  0%,
  14%,
  24%,
  28% {
    -webkit-transform: translateX(101%);
    transform: translateX(101%);
  }

  37%,
  70% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  79% {
    -webkit-transform: translateX(-101%);
    transform: translateX(-101%);
  }

  100% {
    -webkit-transform: translateX(-101%);
    transform: translateX(-101%);
  }
}

@keyframes side-bottom {
  0%,
  14%,
  24%,
  28% {
    -webkit-transform: translateX(101%);
    transform: translateX(101%);
  }

  37%,
  70% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  79% {
    -webkit-transform: translateX(-101%);
    transform: translateX(-101%);
  }

  100% {
    -webkit-transform: translateX(-101%);
    transform: translateX(-101%);
  }
}

@-webkit-keyframes side-left {
  0%,
  14%,
  24%,
  34%,
  35% {
    -webkit-transform: translateY(101%);
    transform: translateY(101%);
  }

  44%,
  79% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  86% {
    -webkit-transform: translateY(-101%);
    transform: translateY(-101%);
  }

  100% {
    -webkit-transform: translateY(-101%);
    transform: translateY(-101%);
  }
}

@keyframes side-left {
  0%,
  14%,
  24%,
  34%,
  35% {
    -webkit-transform: translateY(101%);
    transform: translateY(101%);
  }

  44%,
  79% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  86% {
    -webkit-transform: translateY(-101%);
    transform: translateY(-101%);
  }

  100% {
    -webkit-transform: translateY(-101%);
    transform: translateY(-101%);
  }
}
</style>
