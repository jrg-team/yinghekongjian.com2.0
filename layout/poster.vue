<template>
    <div class="poster-wrapper">
        <a :href="descriptionUrl" target="_blank">
            <img class="poster" :src="src" alt="封面" />
        </a>
    </div>
</template>

<script>
    export default {
        name: "poster",
        data() {
            return {
                src: 'https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-16-2-45.png',
                descriptionUrl: "https://mp.weixin.qq.com/s/sWuDYKcYhJtPcOhxPJVQcw"
            }
        }
    }
</script>

<style scoped lang="scss">
    .poster-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .poster {
        max-width: 80vw;
    }
    @media (min-width: 500px) {
        max-width: 90vw;
    }
</style>