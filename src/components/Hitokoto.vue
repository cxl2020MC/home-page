<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const hitokoto = ref(":D 获取中...")

async function getHitokoto() {
    const response = await fetch('https://v1.hitokoto.cn')
    const data = await response.json()
    hitokoto.value = `${data.hitokoto} —— ${data.from}`
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