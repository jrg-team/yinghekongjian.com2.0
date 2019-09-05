<template>
  <div class="background">
    <section class="experience-wrapper section-margin">
      <div class="row pc">
        <div class="title col">
          <h6>真实故事</h6>
          <h3>数千同学的真实转行经历</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id inventore molestiae, molestias
            mollitia
            nesciunt numquam pariatur quam qui reiciendis tenetur?</p>
          <a href="#">查看幻灯片<i class="iconfont hcsp-right"></i></a>
        </div>
        <div class="image-wrapper col">
          <img src="../assets/experience.png" alt="前端转行经历"/>
        </div>
      </div>
      <text-with-pic
        image-src="https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-4-11-16-30.png"
        class="mobile text-with-pic-wrapper"
      >
        <div class="title col">
          <h6>真实故事</h6>
          <h3>数千同学的真实转行经历</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id inventore molestiae, molestias
            mollitia
            nesciunt numquam pariatur quam qui reiciendis tenetur?</p>
          <black-button class="black-button">查看幻灯片</black-button>
        </div>
      </text-with-pic>
      <div class="row cards-wrapper">
        <section class="card col">
          <h6>闯关式任务</h6>
          <h4>什么在激励着我们？</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate dignissimos ipsa iusto labore
            nihil qui, repellat reprehenderit sit vel?</p>
          <a href="#">进一步了解 <i class="iconfont hcsp-right"></i></a>
        </section>
        <section class="card col">
          <h6>闯关式任务</h6>
          <h4>什么在激励着我们？</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cupiditate dignissimos ipsa iusto labore
            nihil qui, repellat reprehenderit sit vel?</p>
          <a href="#">进一步了解 <i class="iconfont hcsp-right"></i></a>
        </section>
      </div>
    </section>
    <section class="contact-download-wrapper">
      <div class="col">
        <div class="text-wrapper">
          <i class="iconfont hcsp-comment"></i>
          <h6>联系我们</h6>
          <p>可通过电话、微信或在线交流方式咨询。</p>
          <a href="#">进一步了解<i class="iconfont hcsp-right"></i></a>
        </div>
      </div>
      <div class="col">
        <div class="text-wrapper">
          <i class="iconfont hcsp-article"></i>
          <h6>下载课程大纲</h6>
          <p>下载 PDF 格式的课程大纲</p>
          <a href="#">进一步了解<i class="iconfont hcsp-right"></i></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import TextWithPic from '../components/TextWithPic'
  import BlackButton from '../components/BlackButton'

  export default {
    name: 'experience',
    components: {TextWithPic, BlackButton}
  }
</script>

<style lang="scss" scoped>
  @import "../css/vars";
  .background {
    background-color: $background-grey-light;
  }
  a.black-button {
    display: block;
  }
  section.experience-wrapper {
    margin: 0 auto;
    position: relative;
    max-width: 980px;
    .row {display: flex; align-items: center;}
    .row > .col {
      max-width: 50%;
      &.title {
        padding-right: 5vw;
        h6 {margin-bottom: 10px; font-size: 18px;}
        p {margin: 20px 0 10px;}
        a {color: $blue;}
      }
    }
    .text-with-pic-wrapper {
      .title {
        p {margin-bottom: 30px;}
        margin: 20px 0;
      }
    }
  }
  section.card {
    margin-top: 20vh;
    background-color: white;
    padding: 40px 30px;
    border-radius: 10px;
    h6, a {
      color: $blue;
      font-size: 16px;
    }
    h4 {padding: 14px 0 30px;}
    p {min-height: 108px;}
    & + & {margin-left: 40px;}
    > a {font-size: 14px;}
  }
  section.contact-download-wrapper {
    background-color: #F2F2F2;
    padding: 15vh 0;
    display: flex;
    justify-content: center;
    .col {
      max-width: 50%; flex: 1;
      display: flex;
      &:first-child {justify-content: flex-end;}
      &:last-child {justify-content: flex-start;}
    }
    div.text-wrapper {
      text-align: center;
      > i.iconfont {
        display: block;
        font-size: 48px;
        color: #888;
        margin-bottom: 20px;
      }
      > h6 {
        font-weight: $font-bold;
        margin-bottom: 10px
      }
      > p {
        font-size: 14px;
        margin-bottom: 10px;
        max-width: 20em;
      }
      > a {
        font-size: 14px;
        color: $blue;
        padding-left: 10px;
      }
      margin: 0 8vw;
    }
  }

  @media (max-width: 499px) {
    .experience-wrapper > div.cards-wrapper {
      display: block;
      > section.card {
        margin-top: 50px;
        max-width: 100%;
        margin-left: 0 !important;
        &:last-child {margin-top: 30px;}
      }
    }
    section.contact-download-wrapper {
      padding: 50px 0;
      div.text-wrapper {
        margin: 0 5vw;
        > i.iconfont {
          font-size: 36px;
        }
      }
    }
  }
</style>
