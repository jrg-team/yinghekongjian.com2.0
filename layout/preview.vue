<template>
  <div class="preview-wrapper section-margin">
    <h3 class="title title-margin">国内顶级Java教学水平</h3>
    <div class="items-wrapper">
      <div class="row">
        <div class="item">
          <h4>先进教学的倡导者</h4>
          <ul>
            <li>CI机器人review代码</li>
            <li>所有作业严格按照真实开发流程操作</li>
          </ul>
        </div>
        <div class="item">
          <h4>Java领域的先驱者</h4>
          <ul>
            <li>Gradle开发团队核心成员</li>
            <li>丰富处理复杂bug的经验</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="item">
          <h4>不忘初衷的教育者</h4>
          <ul>
            <li>全程陪伴学生学习Java</li>
            <li>服务到就业、自我提升</li>
          </ul>
        </div>
        <div class="item">
          <h4>真材实料的开发者</h4>
          <ul>
            <li>全程真实项目</li>
            <li>开发协作打磨技能</li>
          </ul>
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
    .row {
      min-width: 60vw;
    }
    .row > .item > ul {
      margin-top: 1em;
      min-height: 5em;
      list-style: disc inside none;
      li {
        line-height: 180%;
      }
    }
  }
  @media (min-width: 500px) {
    .preview-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .items-wrapper {
        max-width: 70vw;
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