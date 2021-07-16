<template>
  <div class="text-picture-wrapper">
    <slot name="image">
      <img :src="$cdn(imageSrc)" alt="展示图"/>
    </slot>
    <slot>
      <h3>{{title}}</h3>
      <p v-html="content"></p>
      <a v-if="linkTo !== {}" :href="linkTo.link">{{linkTo.text}}<i class="iconfont hcsp-right"></i></a>
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
    },
    linkTo: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../css/vars";
  .text-picture-wrapper {
    position: relative;
    img {
      width: 100vw;
      position: relative;
      left: -20px;
    }
    h3 {
      margin: 60px 0 20px;
      @media (max-width: 499px) {
        margin: 40px 0 10px;
      }
    }
    h6 + h3 {
      margin-top: 20px;
    }
    a {
      display: inline-block;
      color: $blue;
      font-size: 14px;
      padding: 10px 0;
      margin-top: 10px;
    }
    & + & {
      margin-top: 20px;
    }
  }

</style>

