<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="links">
        <div class="card link">
            <Icon icon="fa7-brands:github" />
            <a href="https://github.com/cxl2020MC">
                GitHub
            </a>
        </div>
        <div class="card link">
            <Icon icon="fa7-solid:blog" />
            <a href="https://blog.cxl2020mc.top">
                Blog
            </a>
        </div>
        <div class="card link">
            <Icon icon="fa7-brands:qq" />
            <a
                href="https://qun.qq.com/universal-share/share?ac=1&authKey=4On4X39JdY%2BeTrERg0smNXlyUEPMe1DvML1fcauM6Bp3S26nUPuM4NF3WQleyDwj&busi_data=eyJncm91cENvZGUiOiI4NjA3Njk3NjQiLCJ0b2tlbiI6IkNZQmdWTWlMaVJjd3UxQWp2akVEd0owMkxnMVBjUldoMUtpNUhZa0thOUZDandYUWgxMXlsbnQreUcxZWxxN0MiLCJ1aW4iOiIxMTc2NTAzOTMwIn0%3D&data=5e386OjhF4Ed1Mclz6OTsbgMvTEYdwbe2l_YNFWFXMEB5VAmnPV5GiUeTDqGCwGVakdd4wz5F631nHZ_a7YIaQ&svctype=4&tempid=h5_group_info">
                QQ群
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
    flex-basis: 7em;
}

.link a {
    text-decoration: none;
    color: var(--text-color);
}
</style>