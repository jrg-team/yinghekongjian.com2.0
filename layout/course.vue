<template>
  <section class="course-wrapper section-margin">
    <div class="title title-margin">
      <h3>课程如何开展</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, sint?</p>
    </div>
    <div class="image-wrapper">
      <div class="row">
        <div>
          <div class="col">
            <img src="https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg" alt="pic"/>
            <div class="text">
              <p>闯关式任务</p>
              <h5>是什么在激励我们？</h5>
            </div>
          </div>
          <div class="mask-wrapper">
            <div class="mask"></div>
            <div class="text">
              <h3>a</h3>
            </div>
          </div>
        </div>
        <div>
          <div class="col">
            <img src="https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg" alt="pic"/>
            <div class="text">
              <p>实战项目</p>
              <h5>找到你所热爱的事业。</h5>
            </div>
          </div>
          <div class="mask-wrapper">
            <div class="mask"></div>
            <div class="text">
              <h3>b</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div>
          <div class="col">
            <img src="https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg" alt="pic"/>
            <div class="text">
              <p>拓展直播</p>
              <h5>打造不凡体验。</h5>
            </div>
          </div>
          <div class="mask-wrapper">
            <div class="mask"></div>
            <div class="text">
              <h3>c</h3>
            </div>
          </div>
        </div>
        <div>
          <div class="col">
            <img src="https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg" alt="pic"/>
            <div class="text">
              <p>线下训练营</p>
              <h5>发挥沟通能力,学习技术知识。</h5>
            </div>
          </div>
          <div class="mask-wrapper">
            <div class="mask"></div>
            <div class="text">
              <h3>d</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>

</script>

<style scoped lang="scss">
  @import '../css/vars';
  .course-wrapper {
    background-color: #F2F2F2;
    .image-wrapper {
      max-width: 900px;
      position: relative;
      left: 0;
      right: 0;
      margin: 0 auto;
      > .row {
        display: flex;
        position: relative;
        > div {
          max-width: 50%;
          padding: 5px;
          > .col {
            position: relative;
            > img {
              width: 100%;
              vertical-align: middle;
            }
            div.text {
              position: absolute;
              top: 40px;
              left: 60px;
              > p {
                margin-bottom: 10px;
              }
            }
          }
          div.mask-wrapper {
            position: absolute;
            visibility: hidden;
            z-index: $mask-z-index;
            top: 0;
            bottom: 0;
            left: 0;
            padding: 5px;
            width: 900px;
            .mask {
              width: 100%;
              height: 100%;
              background: rgba(#000, 0.7);
            }
            .text {
              color: white;
              top: 30px;
              left: 40px;
              position: absolute;
            }
          }
          &:hover {
            div.mask-wrapper { visibility: visible;}
          }
        }
      }
    }
  }
</style>