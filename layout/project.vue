<template>
  <section class="project-wrapper section-margin">
    <div class="title title-margin">
      <h3>{{title}}</h3>
      <p>{{subTitle}}</p>
    </div>
    <div class="row pc">
      <div class="col vertical-center">
        <div class="text">
          <h4>{{courseTitle}}</h4>
          <p>{{courseDescription}}</p>
          <a :href="courseLink">查看完整课程大纲 <i class="iconfont hcsp-right"></i> </a>
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
          <h4>{{projectTitle}}</h4>
          <p>{{projectDescription}}</p>
          <a :href="projectLink">进一步了解课程详情 <i class="iconfont hcsp-right"></i> </a>
        </div>
      </div>
    </div>
    <TextWithPic
      class="mobile"
      image-src="https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg"
      :title="courseTitle"
      :content="courseDescription"
      :link-to="{link: courseLink, text: '查看完整课程大纲'}"
    ></TextWithPic>
    <TextWithPic
      class="mobile"
      :title="projectTitle"
      :content="projectDescription"
      :link-to="{link: projectLink, text: '进一步了解详细课程'}"
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
  import { projectConfig } from "../lib/config";
  export default {
    name: 'project',
    components: {
      TextWithPic
    },
    data() {
      return projectConfig[process.env.BUILD_FLAG]
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