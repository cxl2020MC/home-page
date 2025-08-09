<script setup lang="ts">
import Author from './components/Author.vue';
import Hitokoto from './components/Hitokoto.vue';
import Links from './components/Links.vue';
</script>

<template>
  <img class="background"
    src="https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E7%BB%9D%E5%8C%BA%E9%9B%B6/24853e7a2fcd986abcddb05075c79942.png"
    alt="">
  <main>
    <div class="main-content">
      <Author />
      <div class="left">
        <Hitokoto />
        <Links />
      </div>

    </div>

  </main>
</template>

<style scoped>
.background {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  /* filter: blur(1em); */
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main-content {
  display: grid;
  grid-template-columns: repeat(2, 20em);
  grid-auto-flow: row dense;
  gap: 1em;
  /* justify-items: start;
  align-items: start; */
}

.left {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
