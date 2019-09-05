<template>
  <section class="project-wrapper section-margin">
    <div class="title title-margin">
      <h3>全面、深度、紧贴实战</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi debitis facilis impedit inventore laudantium maiores minus neque omnis repellendus repudiandae.</p>
    </div>
    <div class="row pc">
      <div class="col vertical-center">
        <div class="text">
          <h4>体系课涵盖20个阶段，初、中、高级Java核心知识</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolor ea est fugit illum nam nisi, nobis quas reiciendis ullam.</p>
          <a href="#">查看完整课程大纲 <i class="iconfont hcsp-right"></i> </a>
        </div>
      </div>
      <div class="col">
        <img src="../assets/course-list.png" alt="pic"/>
      </div>
    </div>
    <div class="row wide pc">
      <div class="image-wrapper">
        <img :src="$cdn('https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-4-17-44-29.png')" alt="pic"/>
        <img :src="$cdn('https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-4-17-44-29.png')" alt="pic"/>
        <img :src="$cdn('https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-4-17-44-29.png')" alt="pic"/>
      </div>
      <div class="col vertical-center text-wrapper">
        <div class="text">
          <p>实战项目</p>
          <h4>三大实战项目，让你轻松应对日常工作与面试</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi eveniet excepturi iusto, nam nulla praesentium tenetur ut veritatis voluptas!</p>
          <a href="#">进一步了解课程详情 <i class="iconfont hcsp-right"></i> </a>
        </div>
      </div>
    </div>
    <TextWithPic
      class="mobile"
      image-src="https://www.apple.com/v/education/home/a/images/overview/technology_large.jpg"
      title="体系课涵盖20个阶段，初、中、高级Java核心知识"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at dolores ea, eius enim exercitationem facere itaque mollitia odio officiis placeat praesentium quaerat quas quis tenetur, veniam vero, voluptas. In."
      :link-to="{link: '#', text: '查看完整课程大纲'}"
    ></TextWithPic>
    <TextWithPic
      class="mobile"
      title="三大实战项目，让你轻松应对日常工作与面试"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at dolores ea, eius enim exercitationem facere itaque mollitia odio officiis placeat praesentium quaerat quas quis tenetur, veniam vero, voluptas. In."
      :link-to="{link: '#', text: '进一步了解详细课程'}"
    >
      <template v-slot:image>
        <div class="image-wrapper">
          <img :src="$cdn('https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-4-17-44-29.png')" alt="pic"/>
          <img :src="$cdn('https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-4-17-44-29.png')" alt="pic"/>
          <img :src="$cdn('https://static.xiedaimala.com/xdml/file/6e556a51-b8ff-466f-bda6-7d1847e39f2e/2019-9-4-17-44-29.png')" alt="pic"/>
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
      padding-top: 0;
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
    .image-wrapper {
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