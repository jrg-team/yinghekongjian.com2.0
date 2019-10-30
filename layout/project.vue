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
          <a :href="courseLink">
            查看完整课程大纲
            <i class="iconfont hcsp-right"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <img :src="courseListImg" alt="pic" />
      </div>
    </div>
    <div class="row wide pc">
      <div class="image-wrapper" id="project-images">
        <img
          v-for="(image, index) in projectImages"
          :key="index"
          :src="$cdn(image.url)"
          alt="项目图"
          :style="{transform: translateCalculator(index, imagesExpand, image.hover)}"
          @mouseenter="() => hoverImage(index)"
          @mouseleave="() => leaveImage(index)"
          @click="() => reverseImageStatus(index)"
        />
      </div>
      <div class="col vertical-center text-wrapper">
        <div class="text">
          <p>实战项目</p>
          <h4>{{projectTitle}}</h4>
          <p>{{projectDescription}}</p>
          <a :href="projectLink">
            进一步了解项目详情
            <i class="iconfont hcsp-right"></i>
          </a>
        </div>
      </div>
    </div>
    <TextWithPic
      class="mobile"
      :image-src="courseListImg"
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
        <div class="image-wrapper mobile">
          <img
            v-for="(image, index) in projectImages"
            :key="index"
            :src="$cdn(image.url)"
            alt="项目图"
            :style="{transform: translateCalculator(index, imagesExpand, image.hover)}"
            @mouseenter="() => hoverImage(index)"
            @mouseleave="() => leaveImage(index)"
            @click="() => reverseImageStatus(index)"
          />
        </div>
      </template>
    </TextWithPic>
  </section>
</template>

<script>
import TextWithPic from "../components/TextWithPic";
import { projectConfig } from "../lib/config";
export default {
  name: "project",
  components: {
    TextWithPic
  },
  data() {
    return {
      imagesExpand: false,
      isMobile: document.body.clientWidth < 500,
      ...projectConfig[process.env.BUILD_FLAG]
    };
  },
  methods: {
    listenScrollToElement: function(selector) {
      let offsetTotop = document.querySelector(selector).getBoundingClientRect().top;
      let height = document.documentElement.clientHeight;
      if (offsetTotop - height / 3 <= 0) return true;
      else return false;
    },
    listenScrollToImages: function() {
      if (this.imagesExpand === this.listenScrollToElement("#project-images"))
        return;
      else {
        this.imagesExpand = this.listenScrollToElement("#project-images");
      }
    },
    translateCalculator(index, imagesExpand, hover = false) {
      let imageCounts = this.projectImages.length;
      let rowStep = document.documentElement.clientWidth * (this.isMobile ? 0.05 : 0.025);
      let colStep = document.documentElement.clientWidth * (this.isMobile ? 0.2: 0.1) * 3 / imageCounts;
      let floatUp = hover && index !== (imageCounts - 1) && this.projectImageFloatUp
      if (imagesExpand) {
        let offset = Math.floor(imageCounts / 2);
        if (imageCounts % 2 === 1) {
          return `translate3d(${rowStep * (index - offset)}px, ${colStep * (index - offset - (floatUp && 1))}px, 0)`;
        } else if (imageCounts % 2 === 0) {
          return `translate3d(${rowStep *(index - offset + 0.5)}px, ${colStep * (index - offset + 0.5 - (floatUp && 1))}px, 0)`;
        }
      } else return undefined
    },
    hoverImage(index) {
      this.projectImages[index].hover = true
      this.$set(this.projectImages, index, {hover: true, ...this.projectImages[index]})
    },
    leaveImage(index) {
      this.projectImages[index].hover = false
    },
    reverseImageStatus(index) {
      this.projectImages[index].hover = !this.projectImages[index].hover
    }
  },
  mounted() {
    window.addEventListener("scroll", this.listenScrollToImages);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.listenScrollToImages);
  }
};
</script>

<style lang="scss" scoped>
@import "../css/vars";
.project-wrapper {
  background-color: $v-popover-white;
  @media (min-width: 500px) {
    background-color: #f0fbf9;
    padding-bottom: 0;
  }
  .row {
    display: flex;
    max-width: 980px;
    left: 0;
    right: 0;
    margin: 0 auto;
    &.wide {
      max-width: 100vw;
    }
  }
  .row > .col {
    max-width: 50%;
    flex: 1;
    .text {
      display: block;
      max-width: 70%;
      h4,
      p {
        margin-bottom: 20px;
      }
      a {
        color: $blue;
      }
    }
    img {
      width: 35vw;
    }
    &.vertical-center {
      display: flex;
      align-items: center;
    }
  }
  .image-wrapper {
    position: relative;
    width: 65vw;
    height: 55vw;
    img {
      display: block;
      position: absolute;
      width: 60%;
      margin: auto;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      transition: all 0.5s ease-in-out;
    }
    &.mobile {
      width: 100%;
      height: 70vw;
      img {width: 80%;}
    }
  }
}
</style>