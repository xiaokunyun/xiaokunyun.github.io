<template>
  <div>
    <div id="center">
      <div class="wrapper">
        <div class="slash"></div>
        <div class="sides">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </div>
        <div class="text">
          <div class="text--backing">LONGJIE</div>
          <div class="text--left">
            <div class="inner">LONGJIE</div>
          </div>
          <div class="text--right">
            <div class="inner">LONGJIE</div>
          </div>
        </div>
      </div>
      <div class="loading">
        <div class="status online"></div>
        <div class="status invisible"></div>
        <div class="status idle"></div>
        <div class="status offline"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
@media screen and (max-width: 700px) {
  #center {
    font-size: 14px;
  }
}

#center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

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

    .slash {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(60deg) scaleY(0);
      transform-origin: center center;
      width: 0.075rem;
      height: 145%;
      background: #fff;
      z-index: 4;
      box-shadow: 0 0 10px #27ae60;
      animation: slash 6s ease-in infinite;
    }

    .slash:before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 0.37rem;
      height: 120%;
      background: #232323;
      z-index: -1;
    }

    .slash:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
    }

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

      side:nth-child(1) {
        top: 0;
        left: 0;
        width: 100%;
        height: 0.07rem;
        transform: translateX(-101%);
        animation: side-top ease 6s infinite;
        box-shadow: 0 0 10px #ffd700;
      }

      .side:nth-child(2) {
        top: 0;
        right: 0;
        width: 0.07rem;
        height: 100%;
        transform: translateY(-101%);
        animation: side-right ease 6s infinite;
      }

      .side:nth-child(3) {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0.07rem;
        transform: translateX(101%);
        animation: side-bottom ease 6s infinite;
      }

      .side:nth-child(4) {
        top: 0;
        left: 0;
        width: 0.07rem;
        height: 100%;
        transform: translateY(101%);
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
          transform: translateX(100%);
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
          transform: translateX(-200%);
          animation: text-right 6s ease-in-out infinite;
        }
      }
    }
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;

    .status {
      margin-left: 10px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      margin: 10px;
      animation: pulse 1.5s infinite ease-in;
    }

    .online {
      background: #72ff7d;
    }

    .offline {
      background: #dc143c;
    }

    .invisible {
      background: #42e5ff;
    }

    .idle {
      background: #ffda72;
    }

    @keyframes pulse {
      from {
        transform: scale(0.5);
        opacity: 1;
      }

      to {
        transform: scale(1.5);
        opacity: 0;
      }
    }
  }
}

@keyframes text-right {
  0% {
    transform: translateX(-200%);
  }

  10% {
    transform: translateX(-100%);
  }

  58% {
    transform: translateX(-100%);
  }

  70% {
    transform: translateX(-300%);
  }

  100% {
    transform: translateX(-300%);
  }
}

@keyframes text-left {
  0% {
    transform: translateX(100%);
  }

  10% {
    transform: translateX(0);
  }

  58% {
    transform: translateX(0);
  }

  70% {
    transform: translateX(-200%);
  }

  100% {
    transform: translateX(-200%);
  }
}

@keyframes side-top {
  0%,
  14% {
    transform: translateX(-101%);
  }

  24%,
  55% {
    transform: translateX(0);
  }

  65% {
    transform: translateX(101%);
  }

  100% {
    transform: translateX(101%);
  }
}

@keyframes side-right {
  0%,
  14%,
  23% {
    transform: translateY(-101%);
  }

  30%,
  62% {
    transform: translateY(0);
  }

  72% {
    transform: translateY(101%);
  }

  100% {
    transform: translateY(101%);
  }
}

@keyframes side-bottom {
  0%,
  14%,
  24%,
  28% {
    transform: translateX(101%);
  }

  37%,
  70% {
    transform: translateX(0);
  }

  79% {
    transform: translateX(-101%);
  }

  100% {
    transform: translateX(-101%);
  }
}

@keyframes side-left {
  0%,
  14%,
  24%,
  34%,
  35% {
    transform: translateY(101%);
  }

  44%,
  79% {
    transform: translateY(0);
  }

  86% {
    transform: translateY(-101%);
  }

  100% {
    transform: translateY(-101%);
  }
}
</style>
