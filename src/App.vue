<script setup lang="ts">
import { ref } from 'vue';
import Author from './components/Author.vue';
import Hitokoto from './components/Hitokoto.vue';
import Links from './components/Links.vue';

const img_list = [
  "https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E5%8E%9F%E7%A5%9E/%E6%8C%AA%E5%BE%B7%E5%8D%A1%E6%9D%A5/1753448623771481df9cf452103d7620d6363e0da1067fcb839bb2c7f5360254955bda86329d3.0.jpg",
  "https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E5%8E%9F%E7%A5%9E/%E6%8C%AA%E5%BE%B7%E5%8D%A1%E6%9D%A5/1753448627517ca637bb1af9bbedef7274c023bdd1cbbb94113784a437c5a3074661a25f3c15b.0.jpg",
  "https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E5%8E%9F%E7%A5%9E/%E6%8C%AA%E5%BE%B7%E5%8D%A1%E6%9D%A5/1753448632815c52fa04543bc388a171931123d59ec352cd013cdeb7c4d88fa9b9f429f8de512.0.jpg",
  "https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E5%8E%9F%E7%A5%9E/%E6%8C%AA%E5%BE%B7%E5%8D%A1%E6%9D%A5/1753448637841cae82bb6243154af02c11af175367885042125d3404a2f2bab673bdb988c0022.0.jpg",
  "https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E5%8E%9F%E7%A5%9E/%E6%8C%AA%E5%BE%B7%E5%8D%A1%E6%9D%A5/1753448645708a398ed017895765d60e5b4a0f9764349c1780d52da4d2b6c39deddbe06519ec7.0.jpg",

  "https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E7%BB%9D%E5%8C%BA%E9%9B%B6/24853e7a2fcd986abcddb05075c79942.png",
  "https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E7%BB%9D%E5%8C%BA%E9%9B%B6/2e4e2d924c9cb7228386380ebd5d9c3c.png",
  "https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E7%BB%9D%E5%8C%BA%E9%9B%B6/5dc2b8473764f3184b241a5f7bd6e95e.png",
  "https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E7%BB%9D%E5%8C%BA%E9%9B%B6/a9b35e4f15790e36fd111796ceb9c7ad.png",
  "https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E7%BB%9D%E5%8C%BA%E9%9B%B6/bcb24e9d8347759375ff10cec550f805.png",
  "https://cxl2020mc-1304820025.file.myqcloud.com/img/%E5%A3%81%E7%BA%B8/%E7%BB%9D%E5%8C%BA%E9%9B%B6/e9a30894c134e9ae6c6c9a3b42c6f232.png"
]

const background_url = ref(img_list[Math.floor(Math.random() * img_list.length)])


</script>

<template>
  <img class="background" :src="background_url" alt="">
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

@media (max-width: 50em) {
  .main-content {
    grid-template-columns: 1fr;

  }
}

.left {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
