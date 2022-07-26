<template>
  <!-- <div class="flex justify-center items-center">
    <div class="box relative">
      <div class="one">A</div>
      <div class="two">B</div>
      <div class="three">C</div>
      <div class="four">D</div>
      <div class="five">E</div>
      <div class="six">F</div>
    </div>
  </div> -->
  <div class="view">
    <div class="box">
      <div class="one">A</div>
      <div class="two">B</div>
      <div class="three">C</div>
      <div class="four">D</div>
      <div class="five">E</div>
      <div class="six">F</div>
    </div>
  </div>


</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
}

.box {
  transform-style: preserve-3d; // 开启3d
  perspective: 200px; // 透视
  perspective: 500;
  -webkit-perspective: 500;
  /* Safari 和 Chrome */
  // transform-origin: 0 0 0; // 设置旋转中心点
}

.box div {
  box-sizing: border-box;
  position: absolute;
  height: 160px;
  width: 160px;
  border: 3px solid rgba(147, 197, 253);
  // background: rgba(255, 200, 100, .8);
  text-align: center;
  font-size: 60px;
}

.box .one {
  transform: translateZ(80px);
}

.box .two {
  transform: rotateX(-90deg) translateZ(80px);
}

.box .three {
  transform: rotateY(90deg) rotateX(90deg) translateZ(80px);
}

.box .four {
  transform: rotateY(180deg) rotateZ(90deg) translateZ(80px);
}

.box .five {
  transform: rotateY(-90deg) rotateZ(90deg) translateZ(80px);
}

.box .six {
  transform: rotateY(90deg) translateZ(80px);
}

.box {
  animation: doit 5s ease-in-out infinite;
}

@keyframes doit {
  0% {
    -webkit-transform: rotateY(0deg);
  }

  25% {
    -webkit-transform: rotateY(90deg);
  }

  50% {
    -webkit-transform: rotateY(180deg);
  }

  75% {
    -webkit-transform: rotateY(270deg);
  }

  83% {
    -webkit-transform: rotateX(360deg);
  }
}
</style>
