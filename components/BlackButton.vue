<template>
  <a :href="linkTo">
    <div class="black-button">
      <slot>
        进一步了解
      </slot>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'BlackButton',
    props: {
      linkTo: {
        type: String,
        default: '#'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../css/vars';
  a {
    .black-button {
      padding: 10px;
      font-size: 16px;
      color: white;
      background-color: $text_main;
    }
  }
  @media (max-width: 499px) {
    a > .black-button {
      text-align: center;
      margin: 0 30px;
    }
  }

</style>