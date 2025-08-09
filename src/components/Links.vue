<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="links">
        <div class="card link">
            <Icon icon="mdi:github" />
            <a href="https://github.com/cxl2020MC">
                GitHub
            </a>
        </div>
        <div class="card link">
            <Icon icon="mdi:microsoft-bing" />
            <a href="https://github.com/cxl2020MC">
                Blog
            </a>
        </div>
    </div>
</template>

<style scoped>
.links {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    /* flex-direction: row; */
    /* flex-grow:  1; */
    gap: 1em;
}

.link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    flex-grow: 1;
}

.link a {
    text-decoration: none;
    color: var(--text-color);
}
</style>