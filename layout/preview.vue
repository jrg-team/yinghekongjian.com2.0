<template>
  <div class="preview-wrapper section-margin">
    <h3 class="title title-margin">国内顶级水平Java教学</h3>
    <div class="items-wrapper">
      <div class="row">
        <div class="item">
          <h4>Lorem ipsum.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, molestias?</p>
        </div>
        <div class="item">
          <h4>Lorem ipsum.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, eveniet?</p>
        </div>
      </div>
      <div class="row">
        <div class="item">
          <h4>Lorem ipsum.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ullam!</p>
        </div>
        <div class="item">
          <h4>Lorem ipsum.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, velit.</p>
        </div>
      </div>
    </div>
    <black-button class="button">预约试听</black-button>
  </div>
</template>

<script>
  import BlackButton from '../components/BlackButton'
  export default {
    name: 'preview',
    components: {
      BlackButton
    }
  }
</script>

<style scoped lang="scss">
  @import '../css/vars';
  .preview-wrapper {
    .button {
      margin-top: 40px;
      letter-spacing: 2px;
      font-size: 14px;
      color: white;
    }
    .row > .item > p {
      margin-top: 1em;
      min-height: 5em;
      line-height: 120%;
    }
  }
  @media (min-width: 500px) {
    .preview-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .items-wrapper {
        max-width: 60vw;
        flex: 1;
        .row {display: flex;}
        .row > .item {
          max-width: 50%;
          padding: 0 5vw;
          flex: 1;
          word-break: break-word;
        }
      }
    }
  }
</style>