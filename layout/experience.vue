<template>
  <div class="background">
    <section class="experience-wrapper" :class="{'section-margin': enable}">
      <template v-if="enable">
        <div class="title title-margin">
          <h3>让真实数据说话</h3>
          <p>一些数据，或许可以代表我们的实力</p>
        </div>
        <div class="block-wrapper">
          <div class="block" v-for="(block, index) in dataBlocks" :key="index">
            <div>
              <h2>{{block.title}}<span class="unit">{{block.unit}}</span></h2>
              <span class="description">{{block.description}}</span>
            </div>
          </div>
        </div>
      </template>
      <div class="row pc" v-if="enable">
        <div class="title col">
          <h6>{{commentLink.subTitle}}</h6>
          <h3>{{commentLink.title}}</h3>
          <p>{{commentLink.content}}</p>
          <a :href="commentLink.link" target="_blank">{{commentLink.linkTo}}<i class="iconfont hcsp-right"></i></a>
        </div>
        <div class="image-wrapper col">
          <img :src="$cdn(pictureSrc)" alt="前端转行经历"/>
        </div>
      </div>
      <text-with-pic
        :image-src="pictureSrc"
        class="mobile text-with-pic-wrapper"
        v-if="enable"
      >
        <div class="title col">
          <h6>{{commentLink.subTitle}}</h6>
          <h3>{{commentLink.title}}</h3>
          <p>{{commentLink.content}}</p>
          <black-button class="black-button" :linkTo="commentLink.link">{{commentLink.linkTo}}</black-button>
        </div>
      </text-with-pic>
      <div class="row cards-wrapper" :class="{'card-margin': !enable}">
        <section class="card col" v-for="(card, index) in articleLinks" :key="index">
          <h6>{{card.subTitle}}</h6>
          <h5>{{card.title}}</h5>
          <p>{{card.content}}</p>
          <a :href="card.link" target="_blank">进一步了解 <i class="iconfont hcsp-right"></i></a>
        </section>
      </div>
    </section>
    <section class="contact-download-wrapper">
      <div class="col">
        <div class="text-wrapper">
          <i class="iconfont hcsp-comment"></i>
          <h6>联系我们</h6>
          <p>可通过电话、微信或在线交流方式咨询。</p>
          <a :href="contactLink">进一步了解<i class="iconfont hcsp-right"></i></a>
        </div>
      </div>
      <div class="col">
        <div class="text-wrapper">
          <i class="iconfont hcsp-article"></i>
          <h6>下载课程大纲</h6>
          <v-popover>
            <span class="download">下载 PDF 格式的课程大纲 <i class="iconfont hcsp-right"/></span>
            <template slot="popover">
              <div v-for="(pdf, index) in pdfLinks" :key="index" class="pdf-link">
                <a :href="pdf.link" target="_blank"><i class="iconfont hcsp-xiazai"></i> {{pdf.title}} </a>
              </div>
            </template>
          </v-popover>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import TextWithPic from '../components/TextWithPic'
  import BlackButton from '../components/BlackButton'
  import { experienceConfig } from "../lib/config";

  export default {
    name: 'experience',
    components: {TextWithPic, BlackButton},
    data() {
      return experienceConfig[process.env.BUILD_FLAG]
    }
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
      flex: 1;
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
    .block-wrapper {
      position: relative;
      max-width: 100%;
      left: 0;
      right: 0;
      top: 0;
      margin: 0 auto;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      overflow: hidden;
      padding-bottom: 10vh;
      .block {
        margin: 12px 0;
        min-width: calc(100% / 4);
        max-width: calc(100% / 4);
        flex: 1;
        display: flex;
        justify-content: center;
        >div {width: fit-content; text-align: start;}
        span.description {font-size: 12px; font-weight: $font-bold;}
        span.unit {font-size: 24px; margin-left: 8px;}
      }
      @media (max-width: 499px) {
        padding-bottom: 30px;
        .block {
          margin: 10px 0;
          min-width: calc(100% / 2);
          max-width: calc(100% / 2);
          justify-content: flex-start;
          >div {width: auto; margin-left: 12px;}
          span.unit {font-size: 14px;}
        }  
      }
    }
    div.cards-wrapper {
      &.card-margin {
        margin-bottom: 10vh;
      }
    }
  }
  section.card {
    margin-top: 10vh;
    background-color: white;
    padding: 40px 30px;
    border-radius: 10px;
    h6, a {
      color: $blue;
      font-size: 16px;
    }
    h5 {padding: 14px 0 30px;}
    p {min-height: 54px; padding-bottom: 10px;}
    & + & {margin-left: 40px;}
    > a {font-size: 14px;}
  }
  section.contact-download-wrapper {
    background-color: $v-popover-white;
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
      &.card-margin {
        margin-bottom: 5vh;
      }
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
  .v-popover {
    span.download {
      cursor: pointer;
      color: $blue;
      font-size: 14px;
    }
  }
</style>
