<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const hitokoto = ref("一言获取中...")

async function getHitokoto() {
    try {
        const response = await fetch('https://v1.hitokoto.cn')
        const data = await response.json()
        hitokoto.value = `${data.hitokoto} —— ${data.from}`
    } catch (error) {
        console.error(error)
        hitokoto.value = `一言获取失败：${error}`
    }
}

getHitokoto()
</script>

<template>
    <div class="card hitokoto">
        <p id="hitokoto">
            {{ hitokoto }}
        </p>
        <Icon class="refresh" icon="mdi:refresh" @Click="getHitokoto" />
    </div>

</template>

<style scoped>
#hitokoto {
    /* font-size: 1.5rem; */
    margin: 0;
}

.refresh {
    cursor: pointer;
}
</style>