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
                src: 'https://static.xiedaimala.com/xdml/image/2f52ffb4-4a2a-40c0-bd0d-d63d700669f8/2021-4-30-16-46-3.png',
                descriptionUrl: "https://mp.weixin.qq.com/s/RVrYFPDmRSXQwCOKCifxaw"
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