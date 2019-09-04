<template>
  <div class="text-picture-wrapper">
    <img :src="imageSrc" alt="展示图"/>
    <slot>
      <h3>{{title}}</h3>
      <p>{{content}}</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'TextWithPic',
  props: {
    imageSrc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
    },
    content: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .text-picture-wrapper {
    position: relative;
    img {
      width: 100vw;
      position: relative;
      left: -30px;
    }
    h3 {
      margin: 20px 0;
    }
  }

</style>

