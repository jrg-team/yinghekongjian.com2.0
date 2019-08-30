<template>
  <div class="preview-wrapper">
    <h3 class="title">国内顶级水平Java教学</h3>
    <div class="items-wrapper">
      <div class="row">
        <div class="item">
          <h4>xxxxxxxxx</h4>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div class="item">
          <h4>xxxxxxxxx</h4>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
      </div>
      <div class="row">
        <div class="item">
          <h4>xxxxxxxxx</h4>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div class="item">
          <h4>xxxxxxxxx</h4>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
      </div>
    </div>
    <a href="#">
      <span class="appointment-button">预约试听</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'preview'
  }
</script>

<style scoped lang="scss">
  @import '../css/vars';
  .preview-wrapper {
    padding: 20vh 0 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .items-wrapper {
      margin-top: 10vh;
      max-width: 60vw;
      flex: 1;
      .row {
        display: flex;
      }

      .row > .item{
        max-width: 50%;
        padding: 0 5vw;
        flex: 1;
        word-break: break-word;
        p {
          margin-top: 1em;
          min-height: 5em;
          line-height: 120%;
        }
      }
    }
    a {
      margin-top: 20px;
      .appointment-button {
        padding: 10px;
        font-size: 16px;
        color: white;
        background-color: $text_main;
      }
    }
  }
</style>