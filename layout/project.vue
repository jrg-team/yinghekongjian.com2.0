<template>
  <section class="project-wrapper">
    <div class="title">
      <h3>全面、深度、紧贴实战</h3>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx长文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</p>
    </div>
    <div class="row">
      <div class="col vertical-center">
        <div class="text">
          <h4>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h4>
          <p>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</p>
          <a href="#">查看完整课程大纲 <i class="iconfont hcsp-right"></i> </a>
        </div>
      </div>
      <div class="col">
        <img src="../assets/course-list.png" alt="pic"/>
      </div>
    </div>
    <div class="row wide">
      <div class="image-wrapper">
        <img src="../assets/project1.png" alt="pic"/>
        <img src="../assets/project1.png" alt="pic"/>
        <img src="../assets/project1.png" alt="pic"/>
      </div>
      <div class="col vertical-center text-wrapper">
        <div class="text">
          <p>实战项目</p>
          <h4>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</h4>
          <p>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</p>
          <a href="#">进一步了解课程详情 <i class="iconfont hcsp-right"></i> </a>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'project'
  }
</script>

<style lang="scss" scoped>
  @import '../css/vars';
  .project-wrapper {
    background-color: #F2F2F2;
    position: relative;
    padding: 20vh 0 10vh;
    overflow: hidden;
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 { margin-bottom: 20px}
      p {
        max-width: 30em;
        word-break: break-word;
        text-align: center;
      }
      margin-bottom: 10vh;
    }
    .row {
      display: flex;
      max-width: 980px;
      left: 0;
      right: 0;
      margin: 0 auto;
      &.wide { max-width: 100vw; }
    }
    .row > .col {
      max-width: 50%;
      flex: 1;
      .text {
        display: block;
        max-width: 70%;
        h4, p {margin-bottom: 10px;}
        a {color: $blue}
      }
      img {
        width: 50vw;
        margin-left: 5vw;
      }
      &.vertical-center {
        display: flex;
        align-items: center;
      }
    }
    .row > .image-wrapper {
      margin: 10vh 0 10vh 10vw;
      padding-top: 40px;
      img {
        display: block;
        vertical-align: middle;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
      }
      img:nth-child(2) {
        position: relative;
        top: -40px;
        left: 40px;
      }
      img:nth-child(3) {
        position: relative;
        top: -80px;
        left: 80px;
      }
    }
    .row > .text-wrapper {
      margin-left: 220px;
    }
  }

</style>