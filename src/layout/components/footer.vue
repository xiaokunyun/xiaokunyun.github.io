<template>
  <footer class="bg-gray-800 text-white">
    <div class="container mx-auto py-8 px-4">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1">
          <div>
            <span>&copy;{{ currentYear }} </span> {{ siteName }}. All rights reserved.
          </div>
          <div><span>Contact us:</span></div>
          <div><span>Email:</span> {{ email }}</div>
          <div>Phone:{{ phone }}</div>
          <div>Address: {{ address }}</div>
        </div>
        <div class="mt-4 md:mt-0">
          <ul class="flex flex-wrap justify-center md:justify-end space-x-4">
            <li><a href="#" class="text-sm">Home</a></li>
            <li><a href="#" class="text-sm">About</a></li>
            <li><a href="#" class="text-sm">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const siteName = ref("Your Website Name");
const email = ref("xiaokun323@163.com");
const phone = ref("17530343327");
const address = ref("我在世界的尽头");
// const currentYear=ref(new Date().getFullYear())
// const isMobile = ref(false);
const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>
<style lang="scss" scoped>
footer {
//   @apply w-screen lg:flex bg-gray-900 text-gray-300 py-6 flex flex-wrap justify-center items-center  font-bold;
//   // background-color: #f5f5f5;
//   // font-size: 14px;
//   // // color: #333;
//   // color: #fff;
//   // letter-spacing: 2px;
//   // font-size: 16px;
//   @apply container p-4;
//   white-space: nowrap;
  animation: cloor 10s infinite;
//   div {
//     // margin: 10px;
//     @apply ;
//     span {
//       @apply font-bold;
//     }
//   }
}

// .contact-info p {
//   margin: 0;
// }

// .contact-info p + p {
//   margin-top: 10px;
// }

// @media screen and (max-width: 768px) {
//   .contact-info p:first-of-type {
//     margin-top: 10px;
//   }

//   .contact-info p + p {
//     margin-top: 5px;
//   }
// }
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
</style>
