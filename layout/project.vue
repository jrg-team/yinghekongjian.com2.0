<template>
  <section class="project-wrapper section-margin">
    <div class="title title-margin">
      <h3>全面、深度、紧贴实战</h3>
      <p>通过对Java的全面学习，充分利用时间紧密学习，精通每个知识点，加以实战项目将知识点融会贯通，学以致用，直接上手工作</p>
    </div>
    <div class="row pc">
      <div class="col vertical-center">
        <div class="text">
          <h4>体系课程涵盖40个阶段，初、中、高级Java核心知识</h4>
          <p>我们希望同学在学习过程中可以同时获得快乐与知识，因此我们加入了很多有趣的环节，让学习变得不那么枯燥。通过各位大牛老师的精心打造，你可以很流畅地从入门开始学习，全面了解后端基础知识、Java语言入门及应用、基本数据结构和算法知识、Java Web开发、框架使用、前后端协作、发布与部署的基础知识、面试技巧等，直到找到心仪的工作。我们一起来让Java学习变得轻松愉悦。</p>
          <a href="detail">查看完整课程大纲 <i class="iconfont hcsp-right"></i> </a>
        </div>
      </div>
      <div class="col">
        <img src="../assets/course-list.png" alt="pic"/>
      </div>
    </div>
    <div class="row wide pc">
      <div class="image-wrapper">
        <img :src="$cdn('https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-10-1-23.png')" alt="pic"/>
        <img :src="$cdn('https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-10-1-19.png')" alt="pic"/>
        <img :src="$cdn('https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-10-1-14.png')" alt="pic"/>
      </div>
      <div class="col vertical-center text-wrapper">
        <div class="text">
          <p>实战项目</p>
          <h4>三大实战项目，让你轻松应对日常工作与面试</h4>
          <p>全新项目，各有侧重，拒绝平庸，拒绝千篇一律；完全与实际工作所对应，在学习过程中体验工作的乐趣；提前感受项目的各大环节，将知识点融会贯通。</p>
          <a href="detail#java实战项目1---多线程网络爬虫">进一步了解课程详情 <i class="iconfont hcsp-right"></i> </a>
        </div>
      </div>
    </div>
    <TextWithPic
      class="mobile"
      image-src="https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg"
      title="体系课涵盖20个阶段，初、中、高级Java核心知识"
      content="我们希望同学在学习过程中可以同时获得快乐与知识，因此我们加入了很多有趣的环节，让学习变得不那么枯燥。通过各位大牛老师的精心打造，你可以很流畅地从入门开始学习，全面了解后端基础知识、Java语言入门及应用、基本数据结构和算法知识、Java Web开发、框架使用、前后端协作、发布与部署的基础知识、面试技巧等，直到找到心仪的工作。我们一起来让Java学习变得轻松愉悦。"
      :link-to="{link: 'detail', text: '查看完整课程大纲'}"
    ></TextWithPic>
    <TextWithPic
      class="mobile"
      title="三大实战项目，让你轻松应对日常工作与面试"
      content="全新项目，各有侧重，拒绝平庸，拒绝千篇一律；完全与实际工作所对应，在学习过程中体验工作的乐趣；提前感受项目的各大环节，将知识点融会贯通。"
      :link-to="{link: 'detail#java实战项目1---多线程网络爬虫', text: '进一步了解详细课程'}"
    >
      <template v-slot:image>
        <div class="image-wrapper">
          <img :src="$cdn('https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-10-1-23.png')" alt="pic"/>
          <img :src="$cdn('https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-10-1-19.png')" alt="pic"/>
          <img :src="$cdn('https://static.xiedaimala.com/xdml/image/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-10-15-10-1-14.png')" alt="pic"/>
        </div>
      </template>
    </TextWithPic>
  </section>
</template>

<script>
  import TextWithPic from '../components/TextWithPic'
  export default {
    name: 'project',
    components: {
      TextWithPic
    }
  }
</script>

<style lang="scss" scoped>
  @import '../css/vars';
  .project-wrapper {
    background-color: #F2F2F2;
    @media (min-width: 500px) {
      background-color: #F0FBF9;
      padding-bottom: 0;
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
        h4, p {margin-bottom: 20px;}
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
    .image-wrapper {
      margin: 10vh 0 10vh 10vw;
      padding-bottom: 20vw;
      position: relative;
      img {
        display: block;
        position: relative;
        vertical-align: middle;
        width: 40vw;
        top: 0;
        left: 0;
      }
      img:nth-child(2) {
        position: absolute;
        top: 9vw;
        left: 4vw;
      }
      img:nth-child(3) {
        position: absolute;
        top: 18vw;
        left: 8vw;
      }
      @media (max-width: 499px) {
        margin: 0;
        height: 40vh;
        img {width: 80vw; left: -10px}
        img:nth-child(2) {
          position: relative;
          top: -60px;
          left: 10px;
        }
        img:nth-child(3) {
          position: relative;
          top: -120px;
          left: 30px;
        }
      }
    }
    .row > .text-wrapper {
      margin-left: 220px;
    }
  }

</style>