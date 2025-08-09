<script setup lang="ts">
import { ref, onMounted } from 'vue'

const hitokoto = ref(":D 获取中...")

fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
        // document.getElementById('hitokoto_text').href = data.url
        // document.getElementById('hitokoto_text').innerText = data.hitokoto
        hitokoto.value = `${data.hitokoto} —— ${data.from}`
    })
    .catch(console.error)
</script>

<template>
    <div class="card hitokoto">
        <p id="hitokoto">
            {{ hitokoto }}
        </p>
    </div>

</template>

<style scoped>
#hitokoto {
    /* font-size: 1.5rem; */
    margin: 0;
}
</style>